import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Grid,
  HStack,
  Button,
  Text,
 
  Select,
  Input,
  Divider,
  Stack,
  Image,
  Spinner,
  VStack,
  Show,
} from "@chakra-ui/react";
import CartItems from "../Components/CartItems";
// import { BsBagCheckFill } from "react-icons/bs";
// import { BiLockAlt } from "react-icons/bi";
import { Link} from "react-router-dom";

import axios from "axios";
import { AUTH_SUCCESS } from "../Redux/Auth/auth.types";
import { TOTAL_PRICE } from "../Redux/Products/product.type";

const CartPage = () => {
  
  const [cartdata, setcartdata] = useState([]);
  const [load,setLoad] = useState(false)
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.Auth.currentUser.id);
  // const login = useSelector((state) => state.Auth.isAuth);
  const total = useSelector((state) => state.productReducer.totalPrice);

  const handletotal = () => {
    if (cartdata) {
    
      let temp = cartdata;
      let sum = 0;
      
      for (let i = 0; i < temp.length; i++) {
        sum += temp[i].price * temp[i].quantity;
      }
      
      dispatch({type:TOTAL_PRICE,payload:sum})
      // settotal(sum);
    }
  
  };
  const getUserData = async () => {
    setLoad(true)
   
    try {
      setLoad(false)
      
      let r = await axios.get(`https://onestoredata.onrender.com/login/${userId}`);
      let d = r.data;
      setcartdata(d.cart);
      localStorage.setItem("user",JSON.stringify(d))
      dispatch({ type: AUTH_SUCCESS, payload: d });
      
      handletotal()
    } catch (error) {
      setLoad(false)
      console.log(error);
    }
  };

  const handledelete = async (orderId) => {
    try {
      let r = await axios.patch(`https://onestoredata.onrender.com/login/${userId}`, {
        cart: cartdata.filter((item) => item.orderId !== orderId),
      });

      setcartdata(r.data);
      getUserData();
      
    } catch (error) {
      console.log(error);
    }
  };
  const handlequant = async (orderId, num) => {
    let temp = cartdata;

    for (let i = 0; i < cartdata.length; i++) {
      if (temp[i].orderId === orderId) {
        temp[i].quantity += num;
      }
    }

    try {
      let r = await axios.patch(`https://onestoredata.onrender.com/login/${userId}`, {
        cart: temp,
      });

      setcartdata(r.data);
      getUserData();
    } catch (error) {
      console.log(error);
    }
  };
const handleDeliveryType =(value)=>{
console.log(value)
}

  setTimeout(() => {
    handletotal();
   
  }, 100);

  useEffect(() => {
    getUserData();
    
  }, []);

  

  return (
    <Box >
      
     
      
      <Stack
        // justifyContent={"space-between"}
        direction={['column','row']}
        p="0px"
        // mt="20px"
        w="100%"
        h="auto"
        
        // alignItems={"top"}
      >
        <Box      
           w={{base:"100%",md:"50%",lg:"70%"}}
          h="auto"
          p="0px 30px"
          >
        <HStack justifyContent={"space-between"} w="100%" borderBottom="1px solid #999" p="10px 30px" m="auto">
          <Text fontSize={{base:"20px",md:"20px",lg:"25px"}} fontWeight="bold">Shopping Cart</Text>
          <Text fontSize={"20px"} fontWeight="bold">{cartdata? cartdata.length+ " Items": "0 Items"}</Text>
        </HStack>
        <Show above="sm">
        <HStack w="90%" h="50px"   borderBottom={"1px solid #999"} justifyContent={"space-between"} m="auto">
         <Box w="40%"  h="50%" fontWeight={600}>PRODUCT DETAILS</Box>
        
         <HStack w="50%" h="95%" p="20px 30px"  fontWeight={600} justifyContent={"space-around"}>
         <Box>QUANTITY</Box>
         <Box>PRICE</Box>
         </HStack>
         
        
        
        </HStack>
        </Show>
        {load? <Spinner/>:
       <Grid
       p={{base:"0px",md:"0px",lg:"10px 40px"}}
       templateColumns={{base:"repeat(1,100%)",md:"repeat(1,100%)",lg:"repeat(1,100%)"}}
       gap="20px"
       >
       {cartdata && cartdata.length > 0 &&
         cartdata.map((e) => (
           <CartItems
             key={Date.now()}
             objProp={e}
             funcProp={handledelete}
             funcquant={handlequant}
           />
         ))}
       </Grid>
      
        }
        {/* {cartdata && cartdata.length===0 && <Image  src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0"/>
        
        } */}
         
        
        </Box>
        <Box
         h="500px"
          w={{base:"100%",md:"50%",lg:"30%"}}
          bgColor={"#f5f5f6"}
          p="0px 30px"
          // alignItems={"left"}
        >
        
          <HStack w="100%" borderBottom="1px solid #999" p="10px 20px" m="auto">
          <Text fontSize={"25px"} fontWeight="bold">Order Summary</Text>
          </HStack>
          <HStack w="100%" justifyContent={"space-between"} mt="20px" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">{cartdata? "ITEMS "+ cartdata.length: "0 Items"}</Text>
          <Text fontSize={"17px"} fontWeight="600">₹{total>0 && total}</Text>
          </HStack>
          <HStack w="100%" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">SHIPPING</Text>
          </HStack>
          <Select placeholder='Delivery Type' size="sm" bgColor="white" onChange={handleDeliveryType}>
             {/* <option value='Standard'>Standard Delivery -$50</option> */}
             <option value='Normal'>Normal Delivery -₹0</option>
             <option value='Standard'>Standard Delivery -₹50</option>

          </Select>
          <HStack w="100%" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">PROMO CODE</Text>
          </HStack>
          <Input placeholder="Enter Your Code" bgColor="white"></Input>
          <Button bgColor="pink.400" mt="20px" alignSelf={"left"} color="white">Apply</Button>
          <Divider mt="20px" />
          <HStack w="100%" justifyContent={"space-between"} mt="20px" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">TOTAL COST</Text>
          <Text fontSize={"17px"} fontWeight="600">₹{total>0 && total}</Text>
          </HStack>
          <Link to="/payment"><Button w="100%" isDisabled={cartdata.length===0} bgColor="teal.500" color="white">CHECKOUT</Button></Link> 
        </Box>
      </Stack>
     
    </Box>
  );
};

export default CartPage;
