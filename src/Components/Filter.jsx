import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box, VStack, Stack, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../Redux/Products/product.action";
import CheckBoxes from "./CheckBoxes";

const Filter = ({ handlesort }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const protype = useSelector((state) => state.productReducer.protypes);
  const initialFilterValues = searchParams.getAll("filter");
 
  const [filterValues, setFilterValues] = useState(initialFilterValues || []);
  let arr1 = ["saree", "Kurtis", "Dupattas", "Blouse", "Patticoats", "Pants"];
  let arr2 = [
    "topwear",
    "bottomwear",
    "menaccessories",
    "menfootwear",
    "Kurtas",
  ];
  let arr3 = ["MakeUp", "oral care", "Lips", "Eyes", "Sanitizers"];
  // const dispatch = useDispatch();

  const handleFilterChange = (value) => {
    setFilterValues(value);
  };

  
  useEffect(() => {
    let params = {};

    
    if (filterValues) params.filter = filterValues;

    setSearchParams(params);
  }, [filterValues]);
  return (
    <>
     
      <VStack
        mt="20px"
        border="1px solid #718096"
        borderRadius="10px"
        p="10px 20px"
        alignItems="left"
      >
        <Text
          pb="15px"
          borderBottom="1px solid #718096"
          textAlign="left"
          fontSize="25px"
          fontWeight="600"
        >
          Filter
        </Text>
        <Text pb="15px" textAlign="left" fontSize="20px" fontWeight="400">
          Category
        </Text>
        <CheckboxGroup
          color="green"
          value={filterValues}
          onChange={handleFilterChange}
        >
          <Stack
            spacing={[1, 5]}
            direction={["column"]}
            borderBottom="1px solid #999"
            pb="20px"
          >
            {protype &&
              protype === "women" &&
              arr1.map((e) => <CheckBoxes key={e} data={e} />)}
            {protype &&
              protype === "men" &&
              arr2.map((e) => <CheckBoxes key={e}  data={e} />)}
            {protype &&
              protype === "health" &&
              arr3.map((e) => <CheckBoxes key={e}  data={e} />)}
          </Stack>
        </CheckboxGroup>
        {/* checking */}
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="400"
                >
                  Gender
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup color="green" defaultValue={[]}>
                <Stack
                  spacing={[1, 5]}
                  direction={["column"]}
                  borderBottom="1px solid #999"
                  pb="20px"
                >
                  <Checkbox value="saree">Men</Checkbox>
                  <Checkbox value="Kurtis">Women</Checkbox>
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* checking */}
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="400"
                >
                  Fabric
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup
                color="green"
                defaultValue={["naruto", "kakashi"]}
              >
                <Stack
                  spacing={[1, 5]}
                  direction={["column"]}
                  borderBottom="1px solid #999"
                  pb="20px"
                >
                  <Checkbox value="saree">Acrylic</Checkbox>
                  <Checkbox value="Kurtis">Art Silk</Checkbox>
                  <Checkbox value="Dupattas">Bamboo</Checkbox>
                  <Checkbox value="Blouse">Chambray</Checkbox>
                  <Checkbox value="Petticoats">Chiffon</Checkbox>
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="400"
                >
                  Color
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup
                color="green"
                defaultValue={["naruto", "kakashi"]}
              >
                <Stack
                  spacing={[1, 5]}
                  direction={["column"]}
                  borderBottom="1px solid #999"
                  pb="20px"
                >
                  <Checkbox value="saree">Pink</Checkbox>
                  <Checkbox value="Kurtis">Black</Checkbox>
                  <Checkbox value="Dupattas">Blue</Checkbox>
                  <Checkbox value="Blouse">Red</Checkbox>
                  <Checkbox value="Petticoats">Yellow</Checkbox>
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="400"
                >
                  Meesho Mall
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup
                color="green"
                defaultValue={["naruto", "kakashi"]}
              >
                <Stack
                  spacing={[1, 5]}
                  direction={["column"]}
                  borderBottom="1px solid #999"
                  pb="20px"
                >
                  <Checkbox value="saree">Mall brands</Checkbox>
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="400"
                >
                  Discount
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup
                color="green"
                defaultValue={["naruto", "kakashi"]}
              >
                <Stack
                  spacing={[1, 5]}
                  direction={["column"]}
                  borderBottom="1px solid #999"
                  pb="20px"
                >
                  <Checkbox value="saree">10% and above</Checkbox>
                  <Checkbox value="Kurtis">20% and above</Checkbox>
                  <Checkbox value="Dupattas">All Discounts</Checkbox>
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="400"
                >
                  Size
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <CheckboxGroup
                color="green"
                defaultValue={["naruto", "kakashi"]}
              >
                <Stack
                  spacing={[1, 5]}
                  direction={["column"]}
                  borderBottom="1px solid #999"
                  pb="20px"
                >
                  <Checkbox value="saree">10 XL</Checkbox>
                  <Checkbox value="Kurtis">2 mtr</Checkbox>
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </>
  );
};

export default Filter;
