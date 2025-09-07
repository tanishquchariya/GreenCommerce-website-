import React, { useState } from "react";
import Logo from "../../Images/Logo1.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Image,
  
  VStack,
  
  
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {  protypes } from "../../Redux/Products/product.action";
import { PRODUCTS_PAGE } from "../../Redux/Products/product.type";
import SearchCard from "../SearchCard"
import Avatars from "../Avatars";
import Authbuttons from "../Authbuttons";

const SmallNavbar = () => {
  const dispatch = useDispatch();
const [searchBar,setSearchBar] = useState(false)
const [searchInput, setSearchInput] = useState("");
const [searchData,setSearchData]= useState([])
const login = useSelector((state) => state.Auth.isAuth);
const name = useSelector((state) => state.Auth.currentUser.name);
const cartItems = useSelector((state) => state.Auth.currentUser.cart);


const handleSearch = async()=>{
  try {
    let res = await fetch(`https://onestoredata.onrender.com/products?q=${searchInput}`)
    let data = await res.json()
    setSearchData(data)
    if(searchInput===""){
       setSearchData([])
    }
  } catch (error) {
    console.log(error)
  }
  
} 
const doSomeMagic=(fn,d)=>{
  let timer;
  return function (){
clearTimeout(timer)
    timer = setTimeout(()=>{
      fn()
    },d)
  }
}
const debFunction = doSomeMagic(handleSearch,500)
  const handleCate = (category,type) => {
    const getProductsParam = {
      params: {
        category: category,
        
        // _sort: "",
        // _order: ""
      },
    };
    
    dispatch(protypes(type));
   
    localStorage.setItem("cate", JSON.stringify(getProductsParam))

    // dispatch(getProducts(getProductsParam));
    dispatch({type:PRODUCTS_PAGE,payload:1})
  };

const handleInput=()=>{
setSearchInput("")
}

  return (
    <div>
      <Flex
        w="100%"
        bg={"#ffffff"}
        alignItems="center"
        shadow={"base"}
        justifyContent={"space-between"}
        p="10px"
      >
        <Box p="2" display={"flex"} justifyContent="center">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList fontSize={"14px"} zIndex="2000">
              <MenuItem>
                <Link to="/products"  onClick={() => {
              handleCate("women","women");
            }}> Women Ethnic</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"> Women Western</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"  onClick={() => {
              handleCate("men","men");
            }}>Men</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"> Kids</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"> Home & Kitchen</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"  onClick={() => {
              handleCate("Beauty & Health","health");
            }}> Beauty & Health</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
       <Link to="/">
        <Image
          width="120px"
          height="40px"
          marginLeft="10px"
          objectFit="cover"
          src={Logo}
        />
        </Link>
        <Box>
          <Flex gap="10px" h="20px" alignItems={"center"}>
            {/* <Menu>
              <MenuButton>
                <BsPerson fontSize="25px" />
              </MenuButton>
              <MenuList zIndex={10000}>
                <MenuGroup title="Hello User" fontSize="19px" textAlign="left">
                  <VStack>
                    <Text fontSize="13px" textAlign="left">
                      To access your Meesho account
                    </Text>

                    <Button w="80%" h="45px">
                      <Link to="/login"> Login</Link>
                    </Button>
                    <Button w="80%" h="45px">
                      Admin{" "}
                    </Button>
                    <Button w="80%" h="45px" bg="#F43397" color="#fff">
                      <Link to="/signin"> Signup</Link>{" "}
                    </Button>
                  </VStack>
                </MenuGroup>
              </MenuList>
            </Menu> */}
            <Menu h="25px"> 
            {login? <Avatars name={name} /> : <Authbuttons />}
            </Menu>
               
                
            <Link onClick={()=> setSearchBar(!searchBar)}>
              <Image
                // width="120px"
                height="24px"
                objectFit="cover"
                src="https://th.bing.com/th/id/OIP.RF8hdNm5eOnLDpG_GSu5NwHaHN?pid=ImgDet&rs=1"
              />
            </Link>
            <Link to="/cart">
              <Box pos="absolute" ml="15px" mt="-10px" bgColor={"pink.400"} p="1px 4px" borderRadius="60%" color="white" >{cartItems? cartItems.length : 0}</Box>
              <Image
                // width="120px"
                height="25px"
                objectFit="cover"
                src="https://img.icons8.com/external-obivous-color-kerismaker/48/null/external-cart-ecommerce-color-obivous-color-kerismaker.png"
              />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Input display={searchBar? "block":"none"} value={searchInput} onChange={(e)=>{
                  setSearchInput(e.target.value)
                  debFunction()
                }} placeholder="Try Saree, Kurti or Search by Product Code"></Input>
      <VStack h="300px" zIndex={1} mt="5px" ml="10px" w="95%" pl="5px" display={searchData.length>0 && searchInput.length>0?"block":"none"} overflowY={"auto"} bgColor={"white"} pos="absolute">
              {searchData.length>0 && searchData.map((e)=> <SearchCard key={e.id} inputs={handleInput} data={e}/>)}
      </VStack>
    </div>
  );
};

export default SmallNavbar;
