const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.signup = async (req, res, next) => {
  try {
    // Hash the user's password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new User document with the hashed password
    const newUser = new User({
      username: req.body.username, // Include if needed
      email: req.body.email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    return res.status(201).json({
      message: "User added successfully!",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(
      //we check if user exists by looking for the user with the same email
      (user) => {
        if (!user) {
          //if we can't find it, we return an error stating that the user is not found
          return res.status(401).json({
            error: new Error("User not found!"),
          });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then(
            //if the user does exist, we compare the entered passowrd with the hash we in the DB
            (valid) => {
              if (!valid) {
                //if it not valid - error
                return res.status(401).json({
                  error: new Error("Incorrect password!"),
                });
              }
              const token = jwt.sign(
                { userId: user._id },
                "RANDOM_TOKEN_SECRET", //process.env.JWT_SECRET, {expiresIn: "1);
                { expiresIn: "24h" }
              );
              res.status(200).json({
                //if it is valid, we send back the user id and the token
                userId: user._id,
                token: token,
              });
            }
            //catchbox to catch any errors
          )
          .catch(
            //if bcrypt goes wrong
            (error) => {
              res.status(500).json({
                error: error,
              });
            }
          );
      }
    )
    .catch(
      //mongoose or MongoDB error
      (error) => {
        res.status(500).json({
          error: error,
        });
      }
    );
};
