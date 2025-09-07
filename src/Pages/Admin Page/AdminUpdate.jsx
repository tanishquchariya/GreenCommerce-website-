import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Box, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

const initialState = {
  price: "",
  title: "",
};

const AdminUpdate = () => {
  const [text, textVal] = React.useState({});

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;

    textVal({ ...text, [name]: value });
  };

  return (
    <div>
      <AdminNavbar />
      <br />
      <br />
      <br />
      <Box style={{ width: "50%", margin: "auto" }}>
        <FormControl>
          <FormLabel> ₹Price</FormLabel>
          <Input
            type="number"
            onChange={handleUpdateChange}
            value={text.price}
          />
          <FormHelperText>You can change Price.</FormHelperText>
          <FormLabel>Title</FormLabel>
          <Input type="text" onChange={handleUpdateChange} value={text.title} />
          <FormHelperText>Change title here of Product.</FormHelperText>
        </FormControl>
        <Button color={"pink"}>Update Data please</Button>
        <br />
        <br />
        <br />
      </Box>
    </div>
  );
};

export default AdminUpdate;
