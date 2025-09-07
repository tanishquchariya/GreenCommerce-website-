import { CiSearch } from "react-icons/ci";
import SearchCard from "../SearchCard"

import { AiOutlineShoppingCart, AiOutlineMobile } from "react-icons/ai";
import Logo from "../../Images/Logo1.png";
import {
  Dropdown,
  Dropdown1,
  Dropdown2,
  Dropdown4,
  Dropdown5,
  Dropdown6,
  Dropdown7,
  Dropdown8,
  Dropdown3,
} from "./Dropdown";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Center,
  ButtonGroup,
  
  InputLeftElement,
  InputGroup,
  Input,
  Tooltip,
  Text,
  Menu,
 
  VStack,
 
} from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { protypes } from "../../Redux/Products/product.action";
import Avatars from "../Avatars";
import Authbuttons from "../Authbuttons";
import { PRODUCTS_PAGE } from "../../Redux/Products/product.type";

export const Profile = () => {
  return (
    <div className={styles.download}>
      <h1>Download from</h1>
      <Image
        width="200px"
        src="	https://images.meesho.com/images/pow/playstore-icon-big.png"
      />
      <Image
        width="200px"
        src="https://images.meesho.com/images/pow/appstore-icon-big.png"
      />
    </div>
  );
};

const Navbar = ({ display = "flex" }) => {
  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  const [dropdown4, setdropdown4] = useState(false);
  const [dropdown5, setdropdown5] = useState(false);
  const [dropdown6, setdropdown6] = useState(false);
  const [dropdown7, setdropdown7] = useState(false);
  const [dropdown8, setdropdown8] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.Auth.currentUser.name);
  const cartItems = useSelector((state) => state.Auth.currentUser.cart);
  const login = useSelector((state) => state.Auth.isAuth);
  const [searchData,setSearchData]= useState([])
  
  
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
  const handleCate = (category, type) => {
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
      {/* <nav className={styles.nav_1}> */}
        <Flex  alignItems="center" justifyContent={"space-between"} p="20px 10px" w="100%" h="80px">
          <Flex w="50%">
          <Box w="25%" h="95%">
          <Link to="/">
            <Image width="100%" height="100%" src={Logo}  />
          </Link>
          </Box>
         
          <Box p="2" display={"flex"} w="75%">
            <InputGroup marginLeft={"20px"}>
              <InputLeftElement
                pointerEvents="none"
                children={<CiSearch color="gray.300" />}
              />
              <Input
                width={"90%"}
                type="text"
                value={searchInput}
                onChange={(e)=>{
                  setSearchInput(e.target.value)
                  debFunction()
                }}
                placeholder="Try Saree, Kurti or Search by Product Code"
              />
            </InputGroup>
            <VStack h="300px" zIndex={1} mt="45px" ml="10px" w="400px" pl="5px" display={searchData.length>0 && searchInput.length>0?"block":"none"} overflowY={"auto"} bgColor={"white"} pos="absolute">
              {searchData.length>0 && searchData.map((e)=> <SearchCard key={e.id} inputs={handleInput} data={e}/>)}
            </VStack>
          </Box>
          </Flex>
          
          <Flex w="40%">
            <Flex w="65%">
                <Box w="50%" borderRight="2px solid #999">
              
                  <Text mt="10px">Download App</Text>
                </Box>
                <Box borderRight="2px solid #999" w="50%">
                  <Text mt="10px">Become a Supplier</Text>
                </Box>
            </Flex>
            <Flex justifyContent={"space-evenly"} alignItems="center" w="35%">
              <Box w="40%">
              <Menu>
              <Flex direction="column" alignItems="center">
                
                {login? <Avatars name={name} /> : <Authbuttons />}
              </Flex>
            </Menu>
              </Box>
           
              <Box w="40%">
              <Link to={"/cart"}> <Flex direction="column" w="80px" alignItems="center">
             <AiOutlineShoppingCart fontSize="30px" />
             <Box pos="absolute" ml="20px" mt="-10px" bgColor={"pink.400"} p="1px 4px" borderRadius="60%" color="white" >{cartItems? cartItems.length : 0}</Box>
               <Text>Cart</Text>
                </Flex></Link>
              </Box>
            
            </Flex>
         
          </Flex>

          

          
            {/* <Tooltip label={<Profile />}>
              <Flex>
                <Center>
                  <AiOutlineMobile />
                </Center>{" "}
                <Text>Download App </Text>{" "}
              </Flex>
            </Tooltip>{" "} */}
            {/* <div className={styles.border}></div>
            <Text>Become a Supplier</Text> <div className={styles.border}></div>
            */}
           
             
          
        </Flex>
      {/* </nav> */}
      <nav className={styles.nav_2}>
        <Flex
          maxWidth="100%"
          alignItems="center"
          gap="10"
          justify={"center"}
          fontWeight={"semibold"}
          display={display}
        >
          <Link
            to="/products"
            onClick={() => {
              handleCate("women", "women");
            }}
          >
            {" "}
            <Text
              onMouseEnter={() => setdropdown(true)}
              onMouseLeave={() => setdropdown(false)}
            >
              Women Ethnic
            </Text>
          </Link>

          <Text
            onMouseEnter={() => setdropdown1(true)}
            onMouseLeave={() => setdropdown1(false)}
          >
            Women Western
          </Text>
          <Link
            to="/products"
            onClick={() => {
              handleCate("men", "men");
            }}
          >
            <Text
              onMouseEnter={() => setdropdown2(true)}
              onMouseLeave={() => setdropdown2(false)}
            >
              Men
            </Text>
          </Link>
          <Text
            onMouseEnter={() => setdropdown3(true)}
            onMouseLeave={() => setdropdown3(false)}
          >
            Kids
          </Text>
          <Text
            onMouseEnter={() => setdropdown4(true)}
            onMouseLeave={() => setdropdown4(false)}
          >
            Home & Kitchen
          </Text>
          <Link
            to="/products"
            onClick={() => {
              handleCate("Beauty & Health", "health");
            }}
          >
            <Text
              onMouseEnter={() => setdropdown5(true)}
              onMouseLeave={() => setdropdown5(false)}
            >
              Beauty & Health
            </Text>
          </Link>
          <Text
            onMouseEnter={() => setdropdown6(true)}
            onMouseLeave={() => setdropdown6(false)}
          >
            {" "}
            Jewellery & Accessories
          </Text>
          <Text
            onMouseEnter={() => setdropdown7(true)}
            onMouseLeave={() => setdropdown7(false)}
          >
            Bags & Footwear
          </Text>

          {/* <Text
            onMouseEnter={() => setdropdown8(true)}
            onMouseLeave={() => setdropdown8(false)}
          >
            Electronics
          </Text> */}
        </Flex>
      </nav>
      {dropdown ? <Dropdown setdropdown={setdropdown} /> : null}
      {dropdown1 ? <Dropdown1 setdropdown1={setdropdown1} /> : null}
      {dropdown2 ? <Dropdown2 setdropdown2={setdropdown2} /> : null}
      {dropdown3 ? <Dropdown3 setdropdown3={setdropdown3} /> : null}
      {dropdown4 ? <Dropdown4 setdropdown4={setdropdown4} /> : null}
      {dropdown5 ? <Dropdown5 setdropdown5={setdropdown5} /> : null}
      {dropdown6 ? <Dropdown6 setdropdown6={setdropdown6} /> : null}
      {dropdown7 ? <Dropdown7 setdropdown7={setdropdown7} /> : null}
      {dropdown8 ? <Dropdown8 setdropdown8={setdropdown8} /> : null}
    </div>
  );
};

export default Navbar;
