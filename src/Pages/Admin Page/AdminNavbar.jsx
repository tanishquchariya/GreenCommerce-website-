import {
  Box,
  Button,
  Divider,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Heading,
  HStack,
  Image,
  useDisclosure,
  Drawer,
  VStack,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";

const AdminNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let navigate = useNavigate();
  return (
    <div>
      <Box bg="rgb(244, 51, 151);" p={4}>
        <HStack gap={10} alignItems="center">
          <Box>
            <Button
              ref={btnRef}
              color="teal"
              onClick={onOpen}
              color="white"
            >
              <RxHamburgerMenu />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="sm"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                  <Box
                    display="flex"
                    gap={"20px"}
                    justifyContent="space-evenly"
                    alignItems="center"
                    margin="20px"
                  >
                    <Image
                      src={
                        "https://user-images.githubusercontent.com/106021674/221098510-39b1e89c-8564-4db9-831d-d285e1b6222c.png"
                      }
                      alt=""
                      width={{ base: "20%", sm: "25%", mg: "35%", lg: "20%" }}
                      height={{ base: "55px", sm: "60px", lg: "100px" }}
                      borderRadius="50%"
                    />
                    <Heading
                      fontSize={{
                        base: "10px",
                        sm: "14px",
                        md: "20px",
                        lg: "25px",
                      }}
                    >
                      {" "}
                      ADMIN PANEL
                    </Heading>
                  </Box>
                  <Divider />
                  <VStack
                    gap={2}
                    margin="10px"
                    alignContent="start"
                    alignItems="flex-start"
                  >
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/AdminDashboard")}
                      fontFamily={" 'Lobster Two', cursive"}
                    >
                      ADMIN DASHBOARD
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/Adminadd")}
                      fontFamily={" 'Lobster Two', cursive"}
                    >
                      ADMIN ADD PRODUCT
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/AdminDataAnalytics")}
                      fontFamily={" 'Lobster Two', cursive"}
                    >
                      ADMIN DATA ANALYTICS
                    </Button>
                    <Button
                      fontSize={{ base: "9px", sm: "18px" }}
                      width="100%"
                      onClick={() => navigate("/")}
                      fontFamily={" 'Lobster Two', cursive"}
                    >
                      USER SIDE
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          <Box>
            <Center>
              <Image
                src={
                  "https://user-images.githubusercontent.com/106021674/221098510-39b1e89c-8564-4db9-831d-d285e1b6222c.png"
                }
                w={"100px"}
              />
            </Center>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default AdminNavbar;
