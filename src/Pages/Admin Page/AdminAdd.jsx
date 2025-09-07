import React from "react";
import AdminNavbar from "./AdminNavbar";
import {
  FormLabel,
  Box,
  Heading,
  Button,
  Input,
  Center,
  FormControl,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postAdminData } from "../../Redux/Admin/admin.action";
import "../../CSS/AdminLoginPage.css";
import { useNavigate } from "react-router";
const initialState = {
  title: "",
  image: "",
  image2: "",
  price: "",
  rating: 4.2,
  reviews: "",
  category: "",
  tag: "",
};

const AdminAdd = () => {
  const [val, setVal] = React.useState(initialState);
  const dispatch = useDispatch();
  const handleToast = useToast();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const addProduct = () => {
    if (
      val.title &&
      val.image &&
      val.image2 &&
      val.price &&
      val.rating &&
      val.reviews &&
      val.category &&
      val.tag
    ) {
      dispatch(postAdminData(val));
      setVal(initialState);
      handleToast({
        title: "Data SuccessFull Added.",
        description: "Data Added Successfull.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/AdminDashboard");
    } else {
      handleToast({
        title: "input dont fill .",
        description: "Please fill all the data.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <AdminNavbar />
      <Box width="80%" margin="auto" p={4}>
        <Heading margin="10px">
          <Center
            fontSize={{ base: "10px", sm: "18px", md: "20px", lg: "25px" }}
          >
            ADD PRODUCTS
          </Center>
        </Heading>
        <FormControl
          shadow="xl"
          width="60%"
          margin="auto"
          p={10}
          marginBottom="20px"
        >
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Title
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product title"
            name="title"
            value={val.title}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Image
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product Image"
            name="image"
            value={val.image}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Image2
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product Image"
            name="image2"
            value={val.image2}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            ₹Price
          </FormLabel>
          <Input
            type="url"
            marginBottom="10px"
            placeholder="Product Price"
            name="price"
            value={val.price}
            onChange={handleChange}
          />

          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Reviews
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product Reviews"
            name="reviews"
            value={val.reviews}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Category
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="Product Category"
            name="category"
            value={val.category}
            onChange={handleChange}
          />
          <FormLabel
            fontSize={{ base: "10px", sm: "14px", md: "16px", lg: "18px" }}
            margin="-1px"
          >
            Tag
          </FormLabel>
          <Input
            type="text"
            marginBottom="10px"
            placeholder="tag"
            name="tag"
            value={val.tag}
            onChange={handleChange}
          />
        </FormControl>
        <Center>
          <Button color="blue" onClick={addProduct}>
            ADD PRODUCT
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default AdminAdd;
