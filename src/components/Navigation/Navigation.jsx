import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navigation = () => {
  return (
    <>
      <Flex
        as={"header"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        w={"100%"}
        m={"0 auto"}
        p={"16px"}
        gap={"16px"}
      >
        <Link to={"/register"}>Sign Up</Link>
        <Link to={"/login"}>Sign In</Link>
        <Link to={"/"}>Contacts</Link>
        <ThemeToggler />
      </Flex>
    </>
  );
};

export default Navigation;
