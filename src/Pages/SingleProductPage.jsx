import React, { useEffect, useState } from "react";
// import styles from "../CSS/SinglePage.module.css";
import { ArrowRightIcon, StarIcon } from "@chakra-ui/icons";
// import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_SUCCESS } from "../Redux/Auth/auth.types";
import {
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Grid,
  Button,
  useToast
} from "@chakra-ui/react";
// const initialData={
//     title:"COMBRAIDED Striped Pink N White Short Sleeve Lycra Shirt For Men",
//     image:"https://images.meesho.com/images/products/132914847/hjlhm_512.webp",
//     price:"Rs-147",
//     rating:"4.2",
//     reviews:"118 reviews",
//     category:"Beauty & Health",
//     tag:"Lips",
//   }

const SingleProductPage = () => {
  const [userData, setUserData] = useState({});
  const [loginUserData, setLoginUserData] = useState({});
  const { image, title, price,rating,reviews } = userData;
  const userId = useSelector((state) => state.Auth.currentUser.id);
  const login = useSelector((state) => state.Auth.isAuth);
  const toast =  useToast()

  const dispatch = useDispatch();
  const { id } = useParams();
  const getSingleUserData = async () => {
    let res = await fetch(
      `https://onestoredata.onrender.com/products/${id}`
    );
    let data = await res.json();

    setUserData(data);
  };
  
  const getUserData = async () => {
    try {
      let r = await fetch(
        `https://onestoredata.onrender.com/login/${userId}`
      );
      let d = await r.json();

      setLoginUserData(d.cart);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userData)

  const cartDetails = async () => {
   if(!login){
    
    toast({
      position:"top",
      title: 'You are not Logedin',
      description: "Please Login first",
      status: 'error',
      duration: 4000,
      isClosable: true,
    })
   }else{
    try {
      let r = await fetch(
        `https://onestoredata.onrender.com/login/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: [
              ...loginUserData,
              { image, price, title, quantity: 1, orderId: Date.now() },
            ]
          }),
          
        }
      );
      let d = await r.json();
      localStorage.setItem("user",JSON.stringify(d))
      dispatch({ type: AUTH_SUCCESS, payload: d });
    
    } catch (error) {
      console.log(error);
    }
   }
   
    // setTimeout(()=>{
    //   dispatch(getUsersData())
    // },1500)
  };

  useEffect(() => {
    getSingleUserData();
    getUserData();
  }, [id]);
  return (
    <>
      <Grid
        templateRows={{
          sm: "repeat(2,auto)",
          md: "repeat(2,auto)",
          lg: "repeat(1,auto)",
        }}
        templateColumns={{
          sm: "repeat(1,auto)",
          md: "repeat(1,auto)",
          lg: "repeat(2,50%)",
        }}
        h="auto"
        w="100%"
        p={{ base: "30px 0px", md: "30px 0px", lg: "30px 100px" }}
        gap={"50px"}
        alignItems={"top"}
      >
        <Box h="auto" >
          <HStack h="auto"  gap="10px" alignItems={"top"}>
            <VStack h="300px" w="20%">
              <Image
                border={"1px solid #dfdfdf"}
                w="80%"
                h="25%"
                borderRadius={"5px"}
                src={image}
              ></Image>
              <Image
                border={"1px solid #dfdfdf"}
                w="80%"
                h="25%"
                borderRadius={"5px"}
                src={image}
              ></Image>
              <Image
                border={"1px solid #dfdfdf"}
                w="80%"
                h="25%"
                borderRadius={"5px"}
                src={image}
              ></Image>
              <Image
                border={"1px solid #dfdfdf"}
                w="80%"
                h="25%"
                borderRadius={"5px"}
                src={image}
              ></Image>
            </VStack>
            <VStack
              border={"1px solid #dfdfdf"}
              borderRadius="5px"
              h="90%"
              w="70%"
              gap="20px"
            >
              <Image
                h={{ base: "auto", md: "auto", lg: "400px" }}
                src={image}
              ></Image>
            </VStack>
          </HStack>
          <Grid
            w={{ base: "60%", md: "60%", lg: "80%" }}
            gap="5px"
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(2,1fr)",
            }}
            templateRows={{
              base: "repeat(2,60%)",
              md: "repeat(2,60%)",
              lg: "repeat(1,1fr)",
            }}
            m="auto"
            mt="20px"
            justifyContent={"space-around"}
          >
            <HStack
              p="7px 20px"
              fontSize="20px"
              borderRadius={"5px"}
              fontWeight={"600"}
              border="1px solid black"
              onClick={cartDetails}
              cursor="pointer"
            >
              <AiOutlineShoppingCart />
              <Text>Add to cart</Text>
            </HStack>
            <HStack
              p="7px 20px"
              borderRadius={"5px"}
              color="white"
              bgColor={"#f43397"}
              fontSize="20px"
              fontWeight={"600"}
            >
              <ArrowRightIcon boxSize={"15px"} />
              <Text> Buy Now</Text>
            </HStack>
          </Grid>
        </Box>
        <VStack alignItems={{ base: "center", md: "center", lg: "left" }} gap="15px">
          <VStack
            borderRadius={"5px"}
            border={"1px solid #dfdfdf"}
            h="auto"
            w="90%"
            p="15px"
            alignItems={"left"}
          >
            <Text
              textAlign={"left"}
              fontSize={"23px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              {title}
            </Text>
            <Text textAlign={"left"} fontSize={"30px"} fontWeight={"700"}>
            ₹{price}
            </Text>
            <Box
              color="#333"
              w="30%"
              ml="10px"
              bgColor="#f9f9f9"
              fontSize="14px"
              textAlign="center"
              borderRadius="15px"
              p="0px 5px"
            >
              Free Delivery
            </Box>
          </VStack>
          <VStack
            borderRadius={"5px"}
            border={"1px solid #dfdfdf"}
            h="auto"
            w="90%"
            p="15px"
            alignItems={"left"}
          >
            <Text textAlign={"left"} fontSize={"25px"} fontWeight={"500"}>
              Select Size
            </Text>
            <HStack mt="20px" fontWeight={"500"}>
              <Box borderRadius={"5px"} border="1px solid black" p="5px 10px">S</Box>
              <Box borderRadius={"5px"} border="1px solid black" p="5px 10px">M</Box>
              <Box borderRadius={"5px"} border="1px solid black" p="5px 10px">L</Box>
              <Box borderRadius={"5px"} border="1px solid black" p="5px 10px">XL</Box>
            </HStack>
          </VStack>
          <VStack
            borderRadius={"5px"}
            border={"1px solid #dfdfdf"}
            h="auto"
            w="90%"
            p="15px"
            alignItems={"left"}
          >
            <Text textAlign={"left"} fontSize={"25px"} fontWeight={"500"}>
              Product Details
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              Name : {title}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              Fabric : Cotton Blend
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              Sleeve Length : Short Sleeves
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              Pattern : Printed
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              Net Quantity (N) : 1
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              Sizes :{" "}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              S, M, L, XL
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"19px"}
              color="#999"
              fontWeight={"500"}
              noOfLines={1}
            >
              Country of Origin : India
            </Text>
          </VStack>
          <VStack
            borderRadius={"5px"}
            border={"1px solid #dfdfdf"}
            h="auto"
            w="90%"
            p="15px"
            alignItems={"left"}
          >
            <Text textAlign={"left"} fontSize={"23px"} fontWeight={"500"}>
              Sold By
            </Text>
            <HStack justifyContent={"space-between"} p="10px">
              <Text textAlign={"left"} fontSize={"21px"} fontWeight={"500"}>
                S&D Fashion
              </Text>
              <Button
                border={"1px solid #f43397"}
                bgColor="white"
                color="#f43397"
              >
                View Shop
              </Button>
            </HStack>
            <HStack justifyContent={"space-around"} gap="10px">
              <VStack>
                <Box
                  bgColor="#23BB75"
                  p="3px 10px"
                  ml="5px"
                  color="white"
                  fontWeight="bold"
                  borderRadius="20px"
                >
                  {rating}<StarIcon color="white" boxSize="10px" />
                </Box>
                <Text color="#718096" fontSize="20px" fontWeight="400">
                  {reviews}
                </Text>
              </VStack>
              <VStack>
                <Text textAlign={"left"} fontSize={"25px"} fontWeight={"500"}>
                  531
                </Text>
                <Text
                  textAlign={"left"}
                  fontSize={"19px"}
                  color="#999"
                  fontWeight={"500"}
                  noOfLines={1}
                >
                  Followers
                </Text>
              </VStack>
              <VStack>
                <Text textAlign={"left"} fontSize={"25px"} fontWeight={"500"}>
                  64
                </Text>
                <Text
                  textAlign={"left"}
                  fontSize={"19px"}
                  color="#999"
                  fontWeight={"500"}
                  noOfLines={1}
                >
                  Products
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <VStack
            borderRadius={"5px"}
            border={"1px solid #dfdfdf"}
            h="auto"
            w="90%"
            bgColor={"#e7eeff"}
            p="20px"
          >
            <HStack justifyContent={"space-around"} gap="10px" w="100%">
              <HStack
                w="30%"
                alignItems={"center"}
                justifyContent="space-around"
              >
                <Image w="25%" src="https://images.meesho.com/images/value_props/lowest_price_pbd.png"></Image>
                <Text>Lowest Price</Text>
              </HStack>
              <HStack
                w="30%"
                alignItems={"center"}
                justifyContent="space-around"
              >
                <Image w="25%" src="https://images.meesho.com/images/value_props/cash_on_delivery_pbd.png"></Image>
                <Text>Cash on Delivery</Text>
              </HStack>
              <HStack
                w="30%"
                alignItems={"center"}
                justifyContent="space-around"
              >
                <Image w="25%" src="https://images.meesho.com/images/value_props/7_day_returns_pbd.png"></Image>
                <Text>7-day Returns</Text>
              </HStack>
            </HStack>
          </VStack>
          <VStack
            borderRadius={"5px"}
            border={"1px solid #dfdfdf"}
            h="auto"
            w="90%"
            p="15px"
          >
            <Text color="#999" fontWeight={"600"} fontSize="20px">Best quality products from trusted suppliers</Text>
          </VStack>
        </VStack>
      </Grid>
    </>
  );
};

export default SingleProductPage;
