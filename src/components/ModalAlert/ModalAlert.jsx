import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const ModalAlert = ({ isOpen, onClose, existingName, existingPhone }) => {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Oppps...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {existingName && existingPhone && (
              <Text>
                Contact with name <strong>{existingName}</strong> and phone
                <strong>{existingPhone}</strong> already exists!
              </Text>
            )}
            {existingName && (
              <Text>
                Contact with name <strong>{existingName}</strong> already
                exists!
              </Text>
            )}
            {existingPhone && (
              <Text>
                Contact with phone <strong>{existingPhone}</strong> already
                exists!
              </Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAlert;
