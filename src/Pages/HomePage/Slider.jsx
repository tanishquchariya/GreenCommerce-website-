import React from "react";
import Carousel from "better-react-carousel";
import header1 from "../../Images/header1.png";
import { Stack, useBreakpointValue } from "@chakra-ui/react";

const CarouselHomepage = () => {
  return (
    <Stack
      w={useBreakpointValue({ base: "99%", lg: "75%" })}
      //   border="1px solid"
      margin="auto"
      marginTop={10}
    >
      <Carousel
        hideArrow
        showDots
        autoplay={2000}
        cols={1}
        rows={1}
        height={"300px"}
        loop
      >
        <Carousel.Item>
          <img alt="." width="100%" height={"300px"} src={header1} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1672290419954.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674044135107.jpg?crsl_pos=0"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="."
            width="100%"
            src="https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0"
          />
        </Carousel.Item>
      </Carousel>
    </Stack>
  );
};

export default CarouselHomepage;
