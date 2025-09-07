import {
  
  Link,
  Stack,
  Text,
  VStack,
  Button,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";


const CartItems = ({ objProp, funcProp, funcquant }) => {
  const { orderId, title, price, quantity, image } = objProp;

  return (
   
    <Stack direction={{base:"column",md:"column",lg:"row"}} w={{base:"100%",md:'100%',lg:"90%"}} h={{base:"250px",lg:"150px"}} justifyContent={"space-between"} m="auto" borderBottom={"1px solid #999"} mt="20px">
      <HStack w={{base:"100%",md:"80%",lg:"40%"}} h="95%" justifyContent={"space-between"} >
      <Image h="100%" w="40%" src={image}></Image>
        <VStack w="50%" alignItems={"baseline"} gap="25px">
        <Text noOfLines={2} textAlign="left" fontWeight={"600"} color="#999">{title}</Text>
      <Link style={{alignItems:'left'}}><Text textAlign="left" color="red.600" fontWeight={600} onClick={() => funcProp(orderId)}>Remove</Text></Link>
        </VStack>
      </HStack>
      
      <HStack w={{base:"100%",md:"80%",lg:"50%"}} h="95%" p="20px 30px" justifyContent={"space-between"}>
        <HStack gap="5px">
          <Button fontWeight={"bold"} fontSize="30px"  isDisabled={quantity === 1} onClick={() => funcquant(orderId, -1)}>-</Button>
          <Box border="1px solid #999" p=" 5px 10px" borderRadius={"3px"}>{quantity}</Box>
          <Button fontWeight={"bold"} fontSize="20px"  isDisabled={quantity === 3}  onClick={() => funcquant(orderId, 1)}>+</Button>
        </HStack>
        <Box fontWeight={"bold"} color="pink.500" fontSize="30px">₹{price}</Box>
        
      </HStack>
    </Stack> 
  );
};

export default CartItems;

