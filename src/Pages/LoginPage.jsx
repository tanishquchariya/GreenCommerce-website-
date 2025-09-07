import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  useToast,
  Box,
  FormErrorMessage,
  VStack,
  HStack,
  Highlight,
} from "@chakra-ui/react";
import "../CSS/LoginCss.css";
import { useFormik } from 'formik'
import { AUTH_SUCCESS, SET_CUR_NAME } from "../Redux/Auth/auth.types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Action } from "@remix-run/router";
export default function LoginPage() {
 
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
  });

const {values,errors,touched,handleChange,handleSubmit}=useFormik({
  initialValues: {email:"",password:""},
  validationSchema:LoginSchema,
  onSubmit:(values,action)=>{
        handleLogin(values.email,values.password)
        action.resetForm();
      }
})

  const handleLogin = async (email,password) => {
    

   
      try {
        let res = await fetch(`https://onestoredata.onrender.com/login`);
        let data = await res.json();

        let Auth = false;
        for (let i in data) {
          if (data[i].email === email && data[i].password === password) {
            Auth = true;
            dispatch({ type: AUTH_SUCCESS, payload: data[i] });
            localStorage.setItem("user", JSON.stringify(data[i]));
            dispatch({ type: SET_CUR_NAME, payload: data[i].name });
            break;
          }
        }

        if (Auth === false) {
          toast({
            position: "top",
            title: "Login Failed",
            description: "Your email or password incorrect",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        } else {
          navigate("/");
          toast({
            position: "top",
            title: "Login Success",
            description: "you are loged in successfully",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.log(error);
      }
      
    
  };

  return (
    // <Stack
    //   // className="Login_Page"
    //   minH={"100vh"}
    //   direction={{ base: "column", md: "row" }}
    // >
    //   <Flex p={8} flex={1} align={"center"} justify={"center"}>
    //     <Stack spacing={4} w={"full"} maxW={"md"}>
    //       <Heading fontSize={"2xl"}>Sign in to your account</Heading>
    //       <FormControl id="email">
    //         <FormLabel>Email address</FormLabel>
    //         <Input
    //           type="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           name="email"
    //           value={email}
    //         />
    //       </FormControl>
    //       <FormControl id="password">
    //         <FormLabel>Password</FormLabel>
    //         <Input
    //           type="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //           name="password"
    //           value={password}
    //         />
    //       </FormControl>
    //       <Stack spacing={6}>
    //         <Stack
    //           direction={{ base: "column", sm: "row" }}
    //           align={"start"}
    //           justify={"space-between"}
    //         >
    //           <Checkbox>Remember me</Checkbox>
    //           <Link color={"blue.500"}>Forgot password?</Link>
    //         </Stack>
    //         <Text>{""}</Text>
    //         <Button
    //           disabled={""}
    //           color={"blue"}
    //           variant={"solid"}
    //           onClick={handleSubmit}
    //         >
    //           Sign in
    //         </Button>
    //       </Stack>
    //     </Stack>
    //   </Flex>
    //   <Flex flex={1}>
    //     <Image
    //       alt={"Login Image"}
    //       w="50%"
    //       // objectFit={"cover"}
    //       // boxShadow={
    //       //   " inset 20px 20px 2px #862b2b,inset -20px -20px 2px #b63b3b"
    //       // }
    //       zIndex={"2"}
    //       className="Login_Image"
    //       src={
    //         "https://user-images.githubusercontent.com/106021674/220345883-a1f97b29-a8ec-447e-98ca-d0d37ae3c279.png"
    //       }
    //     />
    //   </Flex> background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    // </Stack> background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    <Box
      h="auto"
      backgroundImage="linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"
      p="40px 0px"
    >
      <Stack
        w={{base:"95%",md:"80%",lg:"60%"}}
        borderRadius={"10px"}
        h="auto"
        m="auto"
        mb="40px"
        bgColor="white"
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
      >
        <Box
          w={{base:"100%",md:"100%",lg:"50%"}}
          borderRadius={"10px 0px 0px 10px"}
          h="450px"
          backgroundImage="linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
          alignItems={"center"}
          m="auto"
        >

          <Image h="100%" w="100%" src="https://images.meesho.com/images/marketing/1661417516766.webp"></Image>
        </Box>
        <VStack
          w={{base:"100%",md:"100%",lg:"50%"}}
          h="100%"
          p="30px 40px 30px"
          gap="15px"
          borderRadius={"10px"}
        >
          <Box>
            <Heading textAlign={"left"} color="pink.400" size="lg">
              Login
            </Heading>
            <Text
              color="#999"
              fontFamily={"sans-serif"}
              mt="5px"
              fontWeight="600"
              fontSize={"15px"}
              textAlign={"left"}
            >
              Welcome! Login to get amazing discounts and offers only for you.
            </Text>
          </Box>

          <Box mt={3} w="100%">
            <FormControl>
              <FormLabel fontSize={"15px"} fontWeight="bold" color="#999">
                User name
              </FormLabel>
              <Input placeholder="email" name="email" type="email" value={values.email} onChange={handleChange} mt="-10px" w="100%" />
            {errors.email && touched.email &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.email}</Text>} 
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={"15px"}
                fontWeight="bold"
                color="#999"
                mt="20px"
              >
                Password
              </FormLabel>
              <Input placeholder="Password" type={"password"} name="password" onChange={handleChange} value={values.password} mt="-5px" />
              {errors.password && touched.password &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.password}</Text>} 

            </FormControl>
            <Button
              mt={"30px"}
              bgColor="pink.400"
              color="white"
              type="submit"
              w="100%"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
          <HStack w="100%" justifyContent={"space-between"} mt="30px">
            <Link>
              <Highlight
                query={"Signup"}
                styles={{ color: "pink.400" }}
                color="#999"
              >
                
                New User? Signup
              </Highlight>
            </Link>
            <Text fontSize={"13px"} color="#999" fontStyle={"italic"}>
              Forgot Your Password
            </Text>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}
