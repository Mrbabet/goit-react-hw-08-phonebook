import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from "../../redux/contacts/contactsSelectors";
import {
  deleteContact,
  fetchContacts,
  updateContact,
} from "../../redux/contacts/operations";
import {
  Button,
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  Tbody,
  Icon,
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";

const ContactList = () => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  console.log(newName, newPhone);

  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteBtnText = useBreakpointValue({ base: null, md: "Delete" });
  const editBtnText = useBreakpointValue({ base: null, md: "Edit" });

  const bg = useColorModeValue("#EDF2F7", "#ffffff14");
  const color = useColorModeValue("#1A202C", "");

  const handleClick = () => {};

  return (
    <>
      {isLoading && !error && <Spinner />}

      <TableContainer w={"100%"} p={"16px"} borderRadius={"20px"} bg={bg}>
        <Table variant={"unstyled"}>
          <Thead h={"40px"}>
            <Tr bg={"rgba(255, 255, 255, 0.08)"}>
              <Th
                paddingInline={"12px"}
                borderRadius={"10px 0 0 10px"}
                textAlign={"left"}
              >
                Name
              </Th>
              <Th paddingInline={"12px"} textAlign={"left"}>
                Phone
              </Th>
              <Th
                paddingInline={"12px"}
                borderRadius={"0 10px 10px 0"}
                textAlign={"center"}
              >
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredContacts?.length === 0 && (
              <Tr>
                <Td height={"200px"} textAlign={"center"} colSpan="3">
                  No contacts to display.
                </Td>
              </Tr>
            )}

            {!isLoading &&
              filteredContacts?.map((contact) => (
                <Tr key={contact.id}>
                  <Td p={"12px"} textAlign={"left"} width="33%">
                    {contact.name}
                  </Td>
                  <Td p={"12px"} textAlign={"left"} width="33%">
                    {contact.number}
                  </Td>
                  <Td
                    p={"12px"}
                    justifyContent={"center"}
                    textAlign={"center"}
                    width="33%"
                  >
                    <Button
                      p={0}
                      mr={"8px"}
                      _hover={{ bg: "rgba(235, 89, 89, 0.1)" }}
                      bg={"transparent"}
                      color={"rgba(235, 89, 89)"}
                      onClick={() => dispatch(deleteContact(contact.id))}
                      gap={"8px"}
                    >
                      <DeleteIcon />
                      {deleteBtnText}
                    </Button>
                    <Popover closeOnBlur={false}>
                      <PopoverTrigger>
                        <Button
                          p={0}
                          _hover={{ bg: "rgba(80, 113, 202, 0.1)" }}
                          bg={"transparent"}
                          color={"#5071ca"}
                          gap={"8px"}
                        >
                          <EditIcon />
                          {editBtnText}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent p={5}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <FormControl mb={"8px"}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="New Name"
                          ></Input>
                        </FormControl>
                        <FormControl mb={"8px"}>
                          <FormLabel htmlFor="phone">Phone Number</FormLabel>
                          <Input
                            value={newPhone}
                            onChange={(e) => setNewPhone(e.target.value)}
                            placeholder="New Phone Number"
                          ></Input>
                        </FormControl>
                        <ButtonGroup display="flex" justifyContent="flex-end">
                          <Button>Cancel</Button>
                          <Button
                            onClick={() => {
                              dispatch(
                                updateContact({
                                  contactId: contact.id,
                                  name: newName,
                                  number: newPhone,
                                })
                              );
                              setNewName("");
                              setNewPhone("");
                            }}
                          >
                            Save
                          </Button>
                        </ButtonGroup>
                      </PopoverContent>
                    </Popover>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
};
