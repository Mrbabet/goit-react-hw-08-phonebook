import PropTypes from "prop-types";
import { useEffect } from "react";
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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";

const ContactList = () => {
  const dispatch = useDispatch();

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

  return (
    <>
      {isLoading && !error && <Spinner />}

      <TableContainer
        w={"100%"}
        p={"16px"}
        borderRadius={"20px"}
        bg={"rgba(0, 0, 0, 0.4)"}
      >
        <Table variant={"unstyled"}>
          <Thead h={"40px"}>
            <Tr bg={"rgba(255, 255, 255, 0.08)"}>
              <Th
                paddingInline={"12px"}
                borderRadius={"20px 0 0 20px"}
                textAlign={"left"}
              >
                Name
              </Th>
              <Th paddingInline={"12px"} textAlign={"left"}>
                Phone
              </Th>
              <Th
                paddingInline={"12px"}
                borderRadius={"0 20px 20px 0"}
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
                    <Button
                      p={0}
                      _hover={{ bg: "rgba(80, 113, 202, 0.1)" }}
                      bg={"transparent"}
                      color={"#5071ca"}
                      onClick={() =>
                        dispatch(
                          updateContact({
                            contactId: contact.id,
                            name: "zed",
                            number: "123456",
                          })
                        )
                      }
                      gap={"8px"}
                    >
                      <EditIcon />
                      {editBtnText}
                    </Button>
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
