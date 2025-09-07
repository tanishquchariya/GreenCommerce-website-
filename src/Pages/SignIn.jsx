import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Image,
  Icon,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux";
import { postUserData } from "../Redux/Auth/auth.action";

const avatars = [
  {
    
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAe1BMVEX///8AgP8Abv/m7f8Aev93pf8AeP8AdP/6/P+jw/+QtP93p/8Aff/w9v8Acv+gxf+syv/M4P/V5f99q/+bvv9Jkf/1+f8ziv/p8f+awf/a6P9GjP/G2/8Aa/9Znf9Pj/+x0P+81P8ghP+Ouf9Zmf9qnf97r/9opf+Mr/8jwox5AAAEnElEQVR4nO2da3eqOhBABTGhEBWVl4rKS+3//4UX2nvO0QWVRDIh6Zr92WaxF8kQhsl0NkMQBEEQBEEQBEEQBEEQBEEQBEEQBPlHfMjydeXdfH8xDt/f3apwnWeHeBqTw/58OZZlaTHGnNE0g1jNYMfLeT9XrpJf2BeWVL7HjHKVJm5gUckaT0rUClxVLpvIBlT50rGjjRKVOKAEVqWF0EBBLEg9G16lxfZScBdfkUtj4wPbxD5V5WJZ1IedaZ6C5fIP4kG6BBZwGHuGWQGcyzZS6tLYRFswGbWTrAVuohWl4hvT3JqygHGJPYWR7A/Ug4lom0T5jWluTQKzrwlW6l0sawUS0NKd8uXfQkD2AYcpZlk7zw4AMtkks6yZZ5l8F3eaJdMuGvkvanE1QWBuIQDBeXmfZP03MvelfJmzI+XaGBPMhDi1fJl09CaTMadNJyXHhqQsra8EE8efRfJjczpuY9aIJPVit8+z7TxN59ssr3aLa5Rw/GUJIDNGxSLltSo6F7XcFjwrEUBmxJJxLL9r8k0+HPCJ/BTn/P3HDInyH9cwx9NrBSDzdlaG3F9cDYeMrZEMvb966JklQ+qXw3LInLSRYdbrYY2SoQNx1aRpRtcDwxok40RD+yqDZOhgosgcGacevA5zZFYfg8OaI1MOv74bI0PuL+Oy68ZxvB5+GddDhoY/WISJQxtIA8deXA8Zpz8ZWZ3EvrtrIcOSviUT30WzPHrI9H3Ld8W/8Wgh45x7EquZeJJXD5lrN5i5lXj2TQ+ZRVdm/kb2TVuZ7I2ElbYyxRsJa21l3vmUoK/ML7oz7sdvkglRBmVQRkjmVwUAlJlG5utl+C92d9fshif6jLYyzm79yL7oVCO4m/36+TccNtPIrHLhUdOTtjLi1VQFx8bTGBmNp5m4DE8NmzEyPGUfxsjoG5rfkOEIZsbIpDzbClNkuEolTZHh+KBhjsyNJ79pikzNkxI0RabkcDFFxuXK1Roic9BZJhccM9NYhlbbzSOHbql4un3gUPG4TPXazJ7oOV/hftiPv+By0SOhQfxOFZBJCQ2UQRmUQRmUQRmUQRmUQRlxGeGqF1kyFEBGuOpNlowDcRpQtFJMkgyDOA0oXFwpSyYBkBE+QStLBuAErfjZZkkyzhngoLbwqXNJMhCnzmPhIl5JMrSS3w9AvFODJBmITg3iPTRkyQD00BDvbiJHBqa7yVK074wcGbKTv/5n4jXJcmRgOgLNNoKPTSkyvedWJOAKdtGSIkM9oPaggmdfZMj0n46SgtipJBkygC0OD1xfhyXKsBoiLv9PLnL8ZbwMs3I4l9ksFJhoZNfZVAnKkB8OekoivvE/bEbLrD6BGx0vbzxVVVJkTjeQZ/8jcchrM1LmFCrocewWnP2aR8kQ2q2KBmFec3XSHiHD7OG2CNIoLhxf8d+VaYa+APU1/UnneiyZ87IyQVimHc1h5fGqVqUlDW7X+pIkzXPUIX3Yi65MeOr9KSHffdyi+noL1P9fgO9rm2+KPNiHVeX18Nltue5mn32/bKjC/Tov+sptEARBEARBEARBEARBEARBEARBEAQR5D8RKnQQ27ZTuQAAAABJRU5ErkJggg==",
  },
  
];



export default function JoinOurTeam() {
 
 
  const dispatch = useDispatch();
  const toast = useToast()
  const navigate = useNavigate();

  const SignupSchema = Yup.object({
    name:Yup.string().min(2).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
  });

  const {values,errors,touched,handleChange,handleSubmit} = useFormik({
    initialValues: {name:"",email:'',password:''},
    validationSchema: SignupSchema,
    onSubmit:(values)=>{
       handleSignup()
    }
  })
  

  const handleSignup = async (name,email,password) => {
  
      const user = {
        name,
        email,
        password,
        cart: [],
        order: [],
      };
      dispatch(postUserData(user));
      navigate("/login");
      toast({
        position: "top",
        title: "Signup Successful",
        description: "You have successfully signup",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    
  };

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Welcome{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              Guest
            </Text>{" "}
            In Signup Page
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              <Image
                style={{
                  objectFit: "cover",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                src="data:image/jpeg;base64,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"
              />
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Greatest Quality
              <br></br>
              Lowest Price🤫
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}></Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Fullname"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={handleChange}
                name="name"
                value={values.name}
              />
              {errors.name && touched.name &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.name}</Text>} 

              <Input
                placeholder="Email Address"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={handleChange}
                name="email"
                value={values.email}
              />
              {errors.email && touched.email &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.email}</Text>} 

              <Input
                placeholder="Enter Password"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                onChange={handleChange}
                name="password"
                value={values.password}
              />
              {errors.password && touched.password &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.password}</Text>} 

            </Stack>
            <Text>{""}</Text>
            <Button
              disabled={true}
              fontFamily={"heading"}
              mt={8}
              type="submit"
              w={"full"}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)", display: "none" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
