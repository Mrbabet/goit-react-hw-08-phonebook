import ContactForm from "../../components/ContactForm/ContactForm";
import Contacts from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { Heading, Box } from "@chakra-ui/react";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonenook</title>
      </Helmet>

      <Box w={["100%", "600px"]} m={"0 auto"} p={"16px"} pt={"64px"}>
        <Box mb={"32px"}>
          <Heading mb={"16px"} textAlign={"center"}>
            PhoneBook
          </Heading>
          <ContactForm />
        </Box>
        <Box mb={"16px"}>
          <Filter />
        </Box>
        <Box p={"16px"} borderRadius={"20px"}>
          <Contacts />
        </Box>
      </Box>
    </>
  );
};

export default Home;
