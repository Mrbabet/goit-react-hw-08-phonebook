import {
  Button,
  Flex,
  Avatar,
  useColorModeValue,
  Text,
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

import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";

const Navigation = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  const bg = useColorModeValue("#EDF2F7", "#ffffff14");
  const color = useColorModeValue("#1A202C", "");

  console.log(user);

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
        {!isLoggedIn && (
          <>
            <Link to={"/register"}>Sign Up</Link>
            <Link to={"/login"}>Sign In</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Popover>
              <PopoverTrigger>
                <Avatar
                  _hover={{ cursor: "pointer" }}
                  size={"md"}
                  bg={bg}
                  color={color}
                  name={user.name}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverCloseButton />
                <PopoverHeader>Hello {user.name}!</PopoverHeader>
                <PopoverBody>
                  <Text> Name: {user.name}</Text>
                  <Text> Email: {user.email}</Text>
                </PopoverBody>
                <PopoverFooter>
                  <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </>
        )}
        <ThemeToggler />
      </Flex>
    </>
  );
};

export default Navigation;
