import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/contactsSelectors";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";

import ModalAlert from "../ModalAlert/ModalAlert";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [existingName, setExistingName] = useState(null);
  const [existingPhone, setExistingPhone] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingContact = contacts.find(
      (contact) => contact.name === name || contact.number === phone
    );

    if (!existingContact) {
      setName("");
      setPhone("");

      dispatch(addContact({ name, number: phone }));
    } else if (
      existingContact.name === name &&
      existingContact.number === phone
    ) {
      setExistingName(name);
      setExistingPhone(phone);
      setIsModalOpen(true);
    } else if (existingContact.name === name) {
      setExistingName(name);
      setIsModalOpen(true);
    } else if (existingContact.number === phone) {
      setExistingPhone(phone);
      setIsModalOpen(true);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex flexDirection={["column", "row"]} gap={"16px"} mb={"16px"}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handleChangeName}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="number"
              placeholder="Phone number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={phone}
              onChange={handleChangeNumber}
              required
            />
          </FormControl>
        </Flex>
        <Button w={"100%"} type="submit">
          Add contact
        </Button>
      </form>

      <ModalAlert
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setExistingName(null);
          setExistingPhone(null);
        }}
        existingName={existingName}
        existingPhone={existingPhone}
      />
    </>
  );
};

export default ContactForm;
