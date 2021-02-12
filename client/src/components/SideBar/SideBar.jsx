import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    Menu,
    Stack,
  } from "@chakra-ui/react";
  import {RiMenu2Line} from 'react-icons/ri';
  import {BsChevronExpand} from 'react-icons/bs';
  import {HiChevronDown} from 'react-icons/hi';
  import {VscVmActive} from 'react-icons/vsc';


  import "./SideBar.css"
import React from 'react'
import AddWorkBook from "../AddWorkBook/AddWorkBook";
import NoteBooks from "../NoteBooks/NoteBooks";
const SideBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( <>
        <Button className="sidebar__button" 
        variant="ghost" 
        bg="brand.light"
        borderRadius="0px" 
        fontSize="md"
        _focus={{
          boxShadow:
            "0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)",
        }}
        onClick={onOpen}>
        <RiMenu2Line size="2vw"/>
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader display="flex"
              alignItems="center"
              justifyContent="center"
              bg="brand.dark">
         
              <Menu>
                  <MenuButton as={Button} 
                  _hover={{ bg: "transparent" }}
                  width="100%"
                  _active={{
                    bg: "transparent",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)",
                  }}
                  borderRadius="0px" 
                  bg="brand.dark"
                  color="white"
                  leftIcon={<VscVmActive color="green"/>}
                  rightIcon={<BsChevronExpand />}>
                    WEB DEV
                  </MenuButton>
                  <MenuList bg="brand.light" borderRadius="none" 
                 
                  ml="3">
                    <MenuItem >Machine Learning</MenuItem>
                    <MenuItem>Competitive Programing</MenuItem>
            
                  </MenuList>
                </Menu>
          
              </DrawerHeader>
              <DrawerBody bg="brand.dark">

              

              <Stack spacing="10px">
                <AddWorkBook/>
                  <NoteBooks/>
          
              </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </> );
}
 
export default SideBar;
{/* <Menu>
                  <MenuButton as={Button} 
                  _hover={{ bg: "transparent" }}
                  width="100%"
                  _active={{
                    bg: "transparent",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 0px 0px rgba(88, 144, 255, 0), 0 1px 1px rgba(0, 0, 0, 0)",
                  }}
                  borderRadius="0px" 
                  bg="brand.dark"
                  color="white"
                  rightIcon={<HiChevronDown />}>
                    WEB DEV
                  </MenuButton>
                  <MenuList bg="brand.light" borderRadius="none" 
                 
                  ml="3">
                    <MenuItem >Machine Learning</MenuItem>
                    <MenuItem>Competitive Programing</MenuItem>
            
                  </MenuList>
                </Menu> */}