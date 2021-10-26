import {
  Flex,
  Button,
  Heading,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./logo";
import React from "react";
import { MainMenu } from "../../layout/sidebar/accordion-menu";
import { Searchbox } from "../../layout/sidebar/searchbox";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex>
        <Logo />
        <Button ref={btnRef} onClick={onOpen}>
          <RiMenuLine />
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading as="h3" fontSize="md" mt="5">
              Navegue por aqui:
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <Searchbox />
            <Divider py="2"/>
            <MainMenu />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
