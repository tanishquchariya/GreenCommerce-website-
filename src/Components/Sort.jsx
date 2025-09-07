import React from 'react'
import { Radio, RadioGroup,VStack,Text,Stack } from "@chakra-ui/react";
import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSortValues = searchParams.get("sort");
  const [sortValues, setSortValues] = useState(initialSortValues || "");

  const handleSortChange = (value) => {
    setSortValues(value);
  };

  useEffect(() => {
    let params = {};

    if (sortValues) params.sort = sortValues;
   

    setSearchParams(params);
  }, [sortValues]);
  return (
    <>
     <VStack
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
          Sort by
        </Text>
        <Text
          pb="15px"
          borderBottom="1px solid #718096"
          textAlign="left"
          fontSize="20px"
          fontWeight="400"
        >
          Price
        </Text>
        <RadioGroup value={sortValues} onChange={handleSortChange}>
          <Stack spacing={5} direction="column">
            <Radio color="green" value="asc">
              Low to High
            </Radio>
            <Radio color="green" value="desc">
              High to Low
            </Radio>
          </Stack>
        </RadioGroup>
      </VStack>
    </>
  )
}

export default Sort