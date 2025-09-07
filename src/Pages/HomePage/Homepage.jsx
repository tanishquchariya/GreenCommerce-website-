import React, { useEffect, useState } from "react";
import header2 from "../../Images/header2.png";
import header3 from "../../Images/header3.png";
import header4 from "../../Images/header4.png";
import headerlast from "../../Images/headerlast.png";
import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import styles from "../HomePage/Homepage.module.css";
import Card from "../../Components/Card";
import axios from "axios";
import Slider from "./Slider";

const Homepage = () => {
  const [homeData, setHomeData] = useState([]);

  const getHomeData = async () => {
    try {
      let res = await axios.get("https://onestoredata.onrender.com/homepage");

      setHomeData(res.data);
     
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <>
      <Slider />
      <header className={styles.header}>
        {/* <Image alt="" src={header1} /> */}
        <p>Top Categories to choose from</p>
        <Image alt="" src={header2} />
        <Image alt="" src={header3} />
        <Image alt="" src={header4} />
        <Image alt="" src={headerlast} />
      </header>

      <Heading p="10px">Products For You</Heading>
      <SimpleGrid
        w="100%"
        p={{base:"2px",md:"3px",lg:"30px"}}
        margin="auto"
        gap={{base:"0",md:"10px",lg:"15px"}}
        // templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        templateColumns={{base:"repeat(2,50%)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}}
      >
        {homeData &&
          homeData.map((item) => (
            <Card key={item.id}
              // id={item.id}
              {...item}
              // title={item.title}
              // price={item.price}
              // rating={item.rating}
              // reviews={item.reviews}
              // image={item.image}
            />
          ))}
      </SimpleGrid>
    </>
  );
};

export default Homepage;
