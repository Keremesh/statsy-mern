import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const PlayerModal = ({ player, onUpdate, onClose }) => {
  const [updatedPlayer, setUpdatedPlayer] = useState({ ...player });

  const handleUpdate = () => {
    onUpdate(updatedPlayer);
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Player</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Nickname</FormLabel>
            <Input
              value={updatedPlayer.nickname}
              onChange={(e) =>
                setUpdatedPlayer({
                  ...updatedPlayer,
                  nickname: e.target.value,
                })
              }
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleUpdate}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PlayerModal;
