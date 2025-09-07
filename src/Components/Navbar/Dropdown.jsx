import { Flex, Box } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
export const Dropdown = ({ setdropdown }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown(true)}
      onMouseLeave={() => setdropdown(false)}
      color="black"
      p="20px"
      rounded="md"
      left={"10%"}
      bg="#fff"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>All Women Ethnic</a>
          </li>
          <li>
            <a href={"/products"}>View All</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Sarees</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Sarees</a>
          </li>
          <li>
            {" "}
            <a href={""}>Silk Sarees</a>
          </li>
          <li>
            {" "}
            <a href={""}>Cotton Silk Sarees</a>
          </li>
          <li>
            <a href={""}>Cotton Sarees</a>
          </li>

          <li>
            <a href={""}>Georgette Sarees</a>
          </li>
          <li>
            <a href={""}>Chiffon Sarees</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Kurtis</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Kurtis</a>
          </li>
          <li>
            <a href={""}>Anarkali Kurtis</a>
          </li>
          <li>
            {" "}
            <a href={""}>Rayon Kurtis</a>
          </li>
          <li>
            <a href={""}>Cotton Kurtis</a>
          </li>

          <li>
            <a href={""}>Embroidered Kurtis</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Kurta Set</a>
          </li>
          <li>
            <a href={""}>All Kurta Sets</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Suits & Dress Material</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Suits & Dress Material</a>
          </li>
          <li>
            {" "}
            <a href={""}>Cotton Suits</a>
          </li>
          <li>
            {" "}
            <a href={""}>Embroidered Suits</a>
          </li>
          <li>
            {" "}
            <a href={""}>Chanderi Suits</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Other Ethnic</a>
          </li>
          <li>
            <a href={""}>Blouses</a>
          </li>
          <li>
            <a href={""}>Dupattas</a>
          </li>
          <li>
            <a href={""}>Lehanga</a>
          </li>
          <li>
            {" "}
            <a href={""}>Gown</a>
          </li>
          <li>
            <a href={""}> Bottomwear</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown1 = ({ setdropdown1 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      zIndex={1000}
      width={"80%"}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown1(true)}
      onMouseLeave={() => setdropdown1(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
      left={"10%"}
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Topwear</a>
          </li>
          <li>
            {" "}
            <a href={""}>Tops</a>
          </li>
          <li>
            <a href={""}>Dresses</a>
          </li>
          <li>
            {" "}
            <a href={""}>Sweaters</a>
          </li>
          <li>
            {" "}
            <a href={""}>JumpSuits</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Bottomwear</a>
          </li>
          <li>
            {" "}
            <a href={""}>Jeans</a>
          </li>
          <li>
            <a href={""}>Jeggings</a>
          </li>

          <li>
            <a href={""}>Palazzos</a>
          </li>
          <li>
            <a href={""}>Shorts</a>
          </li>
          <li>
            {" "}
            <a href={""}>Skirts</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Innerwear</a>
          </li>
          <li>
            {" "}
            <a href={""}>Bra</a>
          </li>
          <li>
            <a href={""}>Briefs</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Sleepwear</a>
          </li>
          <li>
            <a href={""}>Nightsuits</a>
          </li>
          <li>
            <a href={""}>Babydolld</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown2 = ({ setdropdown2 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown2(true)}
      onMouseLeave={() => setdropdown2(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Topwear</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Top Wear</a>
          </li>
          <li>
            <a href={""}>Tshirts</a>
          </li>
          <li>
            {" "}
            <a href={""}>Shirts</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Bottomwear</a>
          </li>
          <li>
            {" "}
            <a href={""}>Track Pants</a>
          </li>
          <li>
            {" "}
            <a href={""}>Jeans</a>
          </li>
          <li>
            {" "}
            <a href={""}>Trousers</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Men Accessories</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Men Accessories</a>
          </li>
          <li>
            <a href={""}>Anarkali Kurtis</a>
          </li>
          <li>
            {" "}
            <a href={""}>Watches</a>
          </li>
          <li>
            <a href={""}>Belts</a>
          </li>
          <li>
            <a href={""}>Wallets</a>
          </li>
          <li>
            <a href={""}>Jewellery</a>
          </li>
          <li>
            <a href={""}>Sunglasses</a>
          </li>
          <li>
            <a href={""}>Bags</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Men Footwear</a>
          </li>
          <li>
            <a href={""}>Casual Shoes</a>
          </li>
          <li>
            {" "}
            <a href={""}>Sports Shoes</a>
          </li>
          <li>
            <a href={""}>Sandals</a>
          </li>
          <li>
            <a href={""}>Formal Shoes</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Ethnic Wear</a>
          </li>
          <li>
            {" "}
            <a href={""}>Men Kurtas</a>
          </li>
          <li>
            {" "}
            <a href={""}>Ethnic Jackets</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Inner & Sleep Wear</a>
          </li>
          <li>
            <a href={""}>All Inner & Sleep Wear</a>
          </li>
          <li>
            <a href={""}>Vests</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown3 = ({ setdropdown3 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown3(true)}
      onMouseLeave={() => setdropdown3(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Boys & Girls 2+ Years</a>
          </li>
          <li>
            {" "}
            <a href={""}>Dresses</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={""}>Infant 0-2 Years</a>
          </li>
          <li>
            {" "}
            <a href={""}>Rompers</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Toys and Accessories</a>
          </li>
          <li>
            {" "}
            <a href={""}>Soft Toys</a>
          </li>
          <li>
            <a href={""}>Footwear</a>
          </li>
          <li>
            {" "}
            <a href={""}>Stationery</a>
          </li>
          <li>
            <a href={""}>Watches</a>
          </li>

          <li>
            <a href={""}>Bags & Backpacks</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Baby Care</a>
          </li>
          <li>
            <a href={""}>All Baby Care</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown4 = ({ setdropdown4 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown4(true)}
      onMouseLeave={() => setdropdown4(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Home Furnishing</a>
          </li>
          <li>
            {" "}
            <a href={""}>Bedsheets</a>
          </li>
          <li>
            {" "}
            <a href={""}>Dormats</a>
          </li>
          <li>
            {" "}
            <a href={""}>Curtains & Cushion Covers</a>
          </li>
          <li>
            <a href={""}>Mattress Protectors</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Home Decor</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Home Decor</a>
          </li>
          <li>
            <a href={""}>Stickers</a>
          </li>
          <li>
            {" "}
            <a href={""}>Clocks</a>
          </li>
          <li>
            <a href={""}>Showpieces</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href={""}>Kitchen & Dining</a>
          </li>
          <li>
            {" "}
            <a href={""}>Kitchen Storage</a>
          </li>
          <li>
            {" "}
            <a href={""}>Cookware & Bakeware</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown5 = ({ setdropdown5 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown5(true)}
      onMouseLeave={() => setdropdown5(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Make up</a>
          </li>
          <li>
            {" "}
            <a href={""}>Face</a>
          </li>
          <li>
            {" "}
            <a href={""}>Eyes</a>
          </li>
          <li>
            {" "}
            <a href={""}>Lips</a>
          </li>
          <li>
            <a href={""}>Nails</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Wellness</a>
          </li>
          <li>
            {" "}
            <a href={""}>Sanitizers</a>
          </li>
          <li>
            <a href={""}>Oral Care</a>
          </li>
          <li>
            {" "}
            <a href={""}>Feminine Hygiene</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Skincare</a>
          </li>
          <li>
            <a href={""}>Deodorants</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown6 = ({ setdropdown6 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown6(true)}
      onMouseLeave={() => setdropdown6(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Jewellery</a>
          </li>
          <li>
            {" "}
            <a href={""}>Jewellery Set</a>
          </li>
          <li>
            {" "}
            <a href={""}>Earrings</a>
          </li>
          <li>
            {" "}
            <a href={""}>Mangalsutras</a>
          </li>
          <li>
            <a href={""}>Studs</a>
          </li>

          <li>
            <a href={""}>Bangles</a>
          </li>
          <li>
            <a href={""}>Necklaces</a>
          </li>
          <li>
            <a href={""}>Rings</a>
          </li>
          <li>
            <a href={""}>Anklets</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Women Accessories</a>
          </li>
          <li>
            {" "}
            <a href={""}>Bags</a>
          </li>
          <li>
            <a href={""}>Watches</a>
          </li>
          <li>
            {" "}
            <a href={""}>Hair Accessories</a>
          </li>
          <li>
            <a href={""}>Sunglasses</a>
          </li>

          <li>
            <a href={""}>Socks</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown7 = ({ setdropdown7 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown7(true)}
      onMouseLeave={() => setdropdown7(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Women Bags</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Women Bags</a>
          </li>
          <li>
            {" "}
            <a href={""}>Handbags</a>
          </li>
          <li>
            {" "}
            <a href={""}>Clutches</a>
          </li>
          <li>
            <a href={""}>Slingbags</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Men Bags</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Men Bags</a>
          </li>
          <li>
            <a href={""}>Men Wallets</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href={""}>Men Footwear</a>
          </li>
          <li>
            {" "}
            <a href={""}>Sport Shoes</a>
          </li>
          <li>
            {" "}
            <a href={""}>Casual Shoes</a>
          </li>
          <li>
            {" "}
            <a href={""}>Formal Shoes</a>
          </li>
          <li>
            {" "}
            <a href={""}>Sandals</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Women Footwear</a>
          </li>
          <li>
            <a href={""}>Flats</a>
          </li>
          <li>
            <a href={""}>Bellies</a>
          </li>
          <li>
            <a href={""}>Juttis</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
export const Dropdown8 = ({ setdropdown8 }) => {
  return (
    <Box
      position={"absolute"}
      backgroundColor={"white"}
      left={"10%"}
      zIndex={1000}
      width={"80%"}
      m="0px auto"
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      }
      onMouseEnter={() => setdropdown8(true)}
      onMouseLeave={() => setdropdown8(false)}
      color="black"
      p="20px"
      bg="white.500"
      rounded="md"
    >
      <Flex gap="10" className={styles.dropdown}>
        <ul>
          <li>
            <a href={""}>Mobile & Accessories</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Mobile & Accessories</a>
          </li>
          <li>
            {" "}
            <a href={""}>Smartwatches</a>
          </li>
          <li>
            {" "}
            <a href={""}>Mobile Holders</a>
          </li>
          <li>
            <a href={""}>Mobile cases and covers</a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <a href={""}>Appliances</a>
          </li>
          <li>
            {" "}
            <a href={""}>All Appliances</a>
          </li>
          <li>
            <a href={""}>Grooming</a>
          </li>

          <li>
            <a href={""}>Home Appliances</a>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};
