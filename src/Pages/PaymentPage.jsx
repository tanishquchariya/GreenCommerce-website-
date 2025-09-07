import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_SUCCESS } from "../Redux/Auth/auth.types";
import { useNavigate } from "react-router-dom";
import { Box, Text, HStack, VStack, Input, Button, useToast, Stack, Image, FormControl, FormLabel } from "@chakra-ui/react";
import { FaAddressCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import * as Yup from "yup";
import { useFormik } from 'formik';

const PaymentPage = () => {
  const userId = useSelector((state) => state.Auth.currentUser.id);
  const cartItems = useSelector((state) => state.Auth.currentUser.cart);
  const total = useSelector((state) => state.productReducer.totalPrice);

  const [page, setPage] = useState(false);
  const [pay, setPay] = useState("");
  const toast = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email"),
    name: Yup.string().min(2).required("Please Enter Your Name"),
    address: Yup.string().min(2).required("Please Enter Your Address"),
    city: Yup.string().min(2).required("Please Enter Your city"),
    zip: Yup.number().min(6).required("Please Enter Your zipcode"),
    cardHolderName: Yup.string().min(2).required("Please Enter Your Card holder name"),
    cardNumber: Yup.string().min(16).max(16).required("Please Enter Your Card number"),
    cvv: Yup.string().min(3).max(3).required("Enter CVV")
    
  });

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: { name: "", email: "", address: "", city: "", zip: "", cardHolderName: "", cardNumber: "", cvv: "" },
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      handlepayment();
      action.resetForm();
    }
  });

  const cartDetails = async () => {
    try {
      let r = await fetch(
        `https://onestoredata.onrender.com/login/${userId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            cart: [],
            order: [...cartItems],
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let d = await r.json();
      localStorage.setItem("user", JSON.stringify(d));
      dispatch({ type: AUTH_SUCCESS, payload: d });
    } catch (error) {
      console.log(error);
    }
  };

  const handlepayment = () => {
    toast({
      position: "top",
      title: 'Payment Successful',
      description: "Thank You for Shopping",
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
    cartDetails();
    navigate("/order");
  };

  return (
    <>
      <Box mt="30px" mb="30px">
        <HStack w={{ base: "60%", md: "60%", lg: "20%" }} m="auto" gap="0px">
          <Box h="50px" w="80px" border="3px solid teal" borderRadius={"20px"} onClick={() => setPage(false)}>
            <FaAddressCard
              style={{ margin: "auto", marginTop: "15%" }}
              color="teal"
              size="30px"
            />
          </Box>
          <Box w="70%" border="1px solid" borderColor={page ? "teal" : "gray.300"}></Box>
          <Box h="50px" w="80px" border="3px solid" borderColor={page ? "teal" : "gray.300"} onClick={() => setPage(true)} borderRadius={"20px"}>
            <MdPayment
              style={{ margin: "auto", marginTop: "15%" }}
              color={page ? "teal" : "gray"}
              size="30px"
            />
          </Box>
        </HStack>
        <HStack w={{ base: "60%", md: "60%", lg: "20%" }} m="auto" justifyContent={"space-between"} fontWeight={"600"}>
          <Text color="teal.500">Address</Text>
          <Text color={page ? "teal.500" : "gray"}>Payment</Text>
        </HStack>
        {page ? (
          <Stack direction={{ base: "column", md: "column", lg: "row" }} w={{ base: "95%", md: "90%", lg: "60%" }} m="auto" mt="30px">
            <VStack w={{ base: "100%", md: "100%", lg: "45%" }}>
              <VStack w="100%" h="150px" bgColor="pink.300" mt="20px" alignItems={"center"}>
                <Text mt="20px" fontSize={"18px"} color="white">Total to pay</Text>
                <Text fontSize={"35px"} fontWeight="bold" color="white">₹{total}</Text>
              </VStack>
              <Box p="20px 0px" w="100%">
                <Text fontWeight={"600"} color="#999">How would you like to pay?</Text>
                <VStack alignItems={"center"} p="30px 0px" w="100%">
                  <HStack border="1px solid #999" p="0px 10px" gap="30px" fontWeight={"600"} h="55px" w="80%" alignItems={"center"}>
                    <Box w="40%">Credit Card</Box>
                    <HStack w="40%" h="60%" alignItems={"center"}>
                      <Box w="50%" h="100%" border={pay === "visa" ? "2px solid teal" : ""} onClick={() => setPay("visa")}>
                        <Image src="https://www.learningcog.com/wp-content/uploads/Visa_Logo-600x184.png" h="100%"></Image>
                      </Box>
                      <Box w="50%" h="100%" border={pay === "master" ? "2px solid teal" : ""} onClick={() => setPay("master")}>
                        <Image src="https://logos-download.com/wp-content/uploads/2016/03/Mastercard_Logo_1979.png"></Image>
                      </Box>
                    </HStack>
                  </HStack>
                  <HStack border="1px solid #999" p="0px 20px" justifyContent={"space-between"} fontWeight={"600"} h="55px" w="80%" alignItems={"center"}>
                    <Box>PayPal</Box>
                    <Box color="#999" fontSize={"20px"} fontStyle="italic">PayPal</Box>
                  </HStack>
                  {/* Add UPI payment options */}
                  <HStack border="1px solid #999" p="0px 10px" gap="10px" fontWeight={"600"} h="55px" w="80%" alignItems={"center"}>
                    <Box w="40%">UPI</Box>
                    <HStack w="60%" h="60%" alignItems={"center"}>
                      <Box w="30%" h="100%" border={pay === "phonepe" ? "2px solid teal" : ""} onClick={() => setPay("phonepe")}>
                        <Image src="data:image/jpeg;base64,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" h="100%"></Image>
                      </Box>
                      <Box w="30%" h="100%" border={pay === "gpay" ? "2px solid teal" : ""} onClick={() => setPay("gpay")}>
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABaFBMVEX////u7u7t7e3z8/Pv7+/x8fH8/Pz5+fn29vZXWmFYW2Auo0vmPC87fvL5tQQuo0pPUllOUVgvefOVl5o6ffO0yvlAhPR6fICgoaSPkZSoqqy4ubuFh4v5swBwcnj39O7mMSKpv/DP0NH//vjd3d5oa3B8ovEYnj386+rmMCDY2drDxMb5uwCvsLJ2eX3u9vblJxPxmpXsxcLqYVft3971yGSo0LG2ye9BqVrs3dzpd2/nTUPnRDnnT0bpfnfqo5/vj4n52NXytbHnaWHnWlDpenT63tvszMnmIAj2vT3taxrlLzD+7cryjRf2pA3oSCvsYiT73Jzx16LzkhX2pwbv6tr1xlTL1u/70nWStPf704lynfXz1JeXtfC+tDmGqjPH3Mzh6ffmtA5ZpkB6vIjKsRuarC7Y5fxRpUK+4MbNy4qUx59mtXjd598ijpQwm3E4iM01kKoymYEvn1w5hNk2jLospToylo8TExX1AAAU1klEQVR4nO1djX/bxnkGcHf4IBULEBWLkqgP06RpSqYk24miOLbTyFpar2m7Zk3SJusqt+46zdbabV327w/3iTvgDjiQ1Ict3O9nmY9AEroH7733Pvfeh+OQEnpuWrygCIBLgF8BEAVOEUAZuDLwKJIBlAEqAp8CUAECWoOwAtCKsj+g4aDhoOGg4cCGA0+utgKuBweeBtTkICQFQFxcQACqBcIigEbgVgBoBKgIQC0ApIqqwPFI4Q+DFCgDJANOeQXglFcAbnUVgJtgBWAmaARQBp4MmHXOtx1OYZC6Znjhfol7goaDhoO5c+DbVfu6cWDnE30N0PjEQAOqHKTZJwIN0PhEpAGs2jJwzT4xIIV9aVgBkAYERQBl4BqBVwSuDKAMUBGEGgDqAKVHaeLEhoOGg4aD2TSTDJB3sRx4Mgc6maQD9TQTogVYAVgLQArCGgBQgGoBVB+w141mcppYueGg4aAeB85FaKaqal+9ZtLJJI1m0smkKs0UaoClZtIIKJ1mosBWM/mkcGVkBwICkBFAGbB7+0XA6C8CrplkgOwAICCsBRgTTZzYcNBw0HBwQZpJBlNz4Gk0kzNXzRQwDgApiEsjEwDTAwxBTTDjTSurowD6ZDz3Cvi3jZGqTBAYTVC1Rxm4Mmhi5YaDhoNaHFylZqqq9tw0kxy0QxmgIlBCc0vAZVIFUASJJeAyqQhghVRhoEQzWd5b84dAI7DTTOZnYZZJlfSbnwWzhiZObDhoOGg4mINmYtW2jFHLOfCuVDPJ/9UCyAym/s7LvQFQo4VL5f+yNZOxTU4TK5uDxvc6VvYh2t/fdz+6j0sI09cI3jQOnE8fPXxy8tnTBVyePnv8/PNH3v5N4iB49JOFg/H29kJWtscHB589/MK/RppJU+35aCYXoS+eLxzI1c/KOKXhS6YHLOP0KgE1c3pHl+ux00wix0WAuF1K0fEzAwGMhvGLn+JclSNrJhXwhBcBrgwY/TKAjvwsZICKQGT2rEDoSBVVALMGg0EeL4xLCKCt4uDxF/VsEPfI1IhZ95wBZB66uJI4ETqPnh1UMUBZeH6/Bgeo2+2ukdKlRYC19f7gWnGw7z2vtAHBwsLxPrTmIIlNJUmize7OdeEA7j9aKPMD+XLwxEO2HMRRK4rwv1aL/IjoD/IiiuJkuM6+4Go5gOihVTOQTOGzT/dtNJNHOCgrUSsZ7gJ4mZqJplogdU9istuTmhTg8ii0yvwESUSfeElJerDsyyoB1ABoBLoYCQSPrV1BVsYnlvwnvC1E4oUC8I946M1DM5W1yQxoOIAfndRxBaxsPw4sY+WkygpoGVxhrAy9Z9NQcOI78+UgGgRXxQF0H09lBb5U0yoOcC+gcQpp5xixtkAuk67mCjiAqDQs2MZFR4EypbrSHxD/H9N7+og4r7QK4WB3Jc56jXjTgzbVnp9mYitl9j839Qjb458tnDx5/vwfXjwbH4xzFNRYQ5NxEOCbZsooFStO0F9JOAlR3CXXzGuKKpYR+QrgmokATwIBY0LMC/zSQMF4/OT4vg/wSArygi8/fzweSxT4NRZW8fggigDTTNKzSO1xPSMh8ZzLWE4mOKBNz/9My8DBybGfmZ2LX99/+JSxMH7h17HBlANWgGyQnmiTffGGeDW7cmlxovNQ5wzGz46Zv1DaofdwvM0pqMkB8XomDpzdhAUKUYIunQP4pY6Cg4fevqvzRfufnowXxrRHqMUBbwsGDpxOzN3i5NI52H9R9PnbT3+aakK9P0boJz97UbdPqmwLaX1Ev7l5qRxgt/Oo6BC3H3+EMmeXXz/i7h+LGFVyL2U+UdKNwNX5RFzWYi4t0SWsp3Fgtt1C8PIff56n4MQLpN0S+DqiDASh6YoWgPQTPE6Mw+KuDHQrCTTgtpL0gXLFElTuRSHVOgzlGOmrjQe/KFBgTKtMrVlFfOBLBpkbSt5j/WO8DmpqJus2mQGZg483bj345a9kU3j6EZr/nCxhB2YOnFVmCPEa0MXK6XOU/ZJ0ZcZYeWvjVlo2/ikj4eDR/gXMS7PhoMs56EocQIQHYIE3SIuHl+k5c+fg14SDWw9+wUkYP9y/iLl5U3IAgbcz6Q0TVqLNzi7QWAgZFankgLxLw8HLW7Q8+GfWHp5izTL/uXkW/kBECJgD+rZg0B0mcUzGHWl4ESdxr+9Lmmmt0+ms4tIxc+AGnQ572wTkNFMQ0KZASPgNaQ8Hx7iP02xCoNt3oGoTAiCAn2mm3JUMBCvcJ04QkUkO6kTFcUg8ALvrCNG1zkesk13ftA8D2s3ehNgVxkTowa8FBykLuJM8oVaTCwkMoFZ8wGMkzxQfDHiQlOzgKxBNEvGpXEn2PG6C3pD/sodMIYEj3jMsaib0scRB2h4WxsfF1jaPsQuLOBFrR1bSz3nI65WMPcXRDuMArImwYoAMbXLAvynZLcaJ6JZSHvzmV/e11SYT/knZ2kISQAqAs3EgP6zUkIYmI2DV6VMOoCfcbRcYOOiIr/ILHLjfbKgk3PpWLxE+uXPnzoek3KFFC7A3nV4zrSdcM3XxoxvGihNgKZmolY0z7FB3HK7G/D04gNBwAFrsg8nEKXLwVY6Dja+1HGzdW7Ip36EZOBiIUZRkkFZuU6Ig9YKtzZXeyl5LdRCQcIB2hKWvAy0HWSODGg6+znPwjdYNbt1b/qC6LH0Cy3xii7cFrU/0RKKByMZVyRfEUac/8AAInHDQjTMW4hUik1y0wn+3h1ydT9zjH+hIV3jEFHyfbwsBvcA3ryMFhXftOLhzF+9XRyMHqowEEHmmOMhdIQIK9EXCJfVbyEWTSNQ16eDeDCsjHDN6HWnUbZcquL7oeHfS9zETFDVA2eU+8ds5zfTbHAcvDesX7Dj4Xd4XafJMuhjJ97p06B2/Je5hfoBHLCF1DsN+KI/lwLAvXEJrk/2de9yT4Aed759AjzervVBuBZyDj1UONn5rGLu4t2TDwb0yDqgZtGLeDunDwK8G3VZm4K0W7eF8pz9MPxMPByA/nO61eCAR9x1HbfBhgYOs38AGpuHg2xwH35s4sLGD5VIO+F+5mSvDSHF0yS7gFuJ3k5gwkg9NxEADbeBptcWn1wscgAm/9RC5Wg5uWXJgYwfLP1RyYMg9t0TeNVn3pVYy2OsDVxOeiec+ZC2Lq62oVeAA8bCD9Bq1OajpDyo4qMy90+eo5J2pgyuGqEPGZ0L/UEADwRYJs1UOEBm0J76Iect8ninXFm59LzZuI82VKyO7fmH5B9wvcDGEHXZRM5WWCMsevkMd8fgG4E+Ym0v65D4Q8Dgp7vFumX4m84hpu+F71wlXRFjO+8Rv4QzxwfIPW6XxQRUDaRcAcsOoAjB7dOjIKdxhMSVWmJhkEWGl3aMSHwQiOIt3YCBfERzk+8YHUJvvteTg3lZpnFjeDOKkS1LOuol6IESZvEyvQMiqTCUCZkc87i6vKa0Bj8DjXqgfW4f/ko8T9TlvyzixgoPSVpCsegAWXBHJOO12V4ZD/K7hZq+7OwAAQcRHGjqcAxEItZDEgesPW7zVIAMHBb3wlUEvWHHw+1IO+PPWzM5r7a0D3dw8BNLYIZH6TjKTb7XvhrQnkTjAbpIMNmF5LDhAuwmVS9EwNORYCrpx43uTZkpNnRZs9B+IlwoHH1Zrpla02iOFDH/h16vdSR8UzR9bPNhdSTT2Eyeb6yxWlDjY5bJzU+Ig7HEzSDtGU67tVo6DfzX4xA9ua0qeg+/KNROhIArMc3VVNwjIIIpoLS05wOAZ3JQD6hPTwi8nA8oB9iAimmp5Lt9iiPtE1jcG/kuVgz+MTiHtG9VRw7tp2aLl7l0OXuUDp1fl44n0rzePJ6rTLpx+XD6IQr6t4/MhRCBGpVfJV5AxwzVKVhSvOUFuK9dsXPnXUmPY+OOf2ouvkS5GcjRDyeiOysHy7cwGpxpXVgeZ+8WIIpL+0RdkuIWGhmjAHEIUDfhYjj+M2HA0ZG1SagWCA8kpbvx5sd1uL55D1y6/sPWD6hBImFg1J8uWA0DnZAhFHbMEQ842JA5cINJUE8A46CfcNKRaF/MLmRn8G2agPXoN7DiA+aawdKfKDkzauQjoQ2UPPW39e2v9gTfY6e9OVlONpecAiaksQw9SDnrsN9RFGDlgUdLGgz+1CQft0Smy4mDr93kO/lJpB5GtHYRsaIiYQGuN+lY81xank9aHiY4DF6yw32KRjD8iVPOmXOsiB7QxbPz539usLB6V5ZlEqhm+yncLy/lqT+8PUD8RPgAHT/SvyVLNuxFr+woH5FMkGOgB8jY8oYFMB9/VcSBl4l+SLrGdlbQ1WBwEsZWX08v37tIr2oMggizPJM0/cEER4LkEoRj6SZVkiArHX/hexOMDX5plkLpA6gFxpiH9NQsi0rYh14CPpTmM8rQXxOHyH3ArWFykjWFxdMhzMeY8k/NdvmOkI6qzzEPJ4oNADLDSR8g6UmaC6adBTF2FHB84Ppok1IfgrtBD6zElIRXkrFNkxqloJmxc32z8kbSDlALMA2ZidEaHVs15JvgqHyUu3/bkRS1T5BekOFGMs1OHXvBL0ONKKIsT08q5Hn/yLT/wwAoHoGpOFvqPEam6XEaHoJQDVHAGVCyUchBxO6jmgIwTEX/oaTnAMoDFSDIHWZyUmg/cEZn8ynlp0FtsF8roDU6cmTjY+u52QUMtv5p1bp7EwRrPHK2IaiscAJGlVzlgXSr+oJ/ywaSCVz03Dx2OChwsjt6eIwMHEHxYkEt4THnmnGvGQRb2ajmAnhhYVjlINRI3hB3Ib9irnpuXuoqjoiWkDeIQaQeV0Pnb/1wqcvDKYr5yZJ6vnAHGAXvMrNqqTwR4KI3GyrJPTJ0d6x7xJ1MdSd6C05La+cpcM9FJC6dFQ8CmcHTm4dyVNNMi7VzO34wWf/zr7Xx89Lut8nnrPk+iqJpJf/wFadak4fSAdIWPJ/oe7fYjQpI67YLk1ci1IX1PtAmFTDJoJsI/eKMjAbPw5hQBxLpSCMD54dsRfuvo6G8KCbhTsFzPZBMjpc+Z+cShdjGDiB7UGIlJBOZKomzgwGoNB9K0BsrC6Ojt4dnp+fn56dnh66PFEXvf4o//JbeHpU+QxToW6zgxCxNpTkDhwHU6IojUcMDiJBFmDqUJAaUcwPO2ngTsGEa84NBhkcQQ6b8f/zvrG+hAosVaHks7gINstZuXyzMhtyOJ6iIH2TQG9gbg2nHgotORiQQaQop/4sXof/6+JIdHc7QDKU0abXpKvhEMVmKligUOeIRMP54MoC0HLjozk0AiyDb/sSh+jP6XtIfl5b+Y5gHVm5+oaCahDIf9EDEOIEDrrViMoug5yNYAtMiIupvngEfJbC0om8pMVrlqooSKsvjj/32wjIcRt/hC2dB49kMgUh30nnyZqgEEe1lFkl7fJYug3MFai8eHIj4Isi9gE7gH0vhCsgPyFeWAMaHscx4cllgCtYF2WzIIQsJf/7609MkW47UkPqipmdLX7P1UOLVWVjud3pBM1iRZxUk2tq6qKXzPHh+CakV7ikxS5+5zDmQbNDaHvJqQS/tvH27ZrmOxjxPTMlEn5sVkEC2zcKGd1TiRVEcorlQ2KEmn6nXvLjhtM/ncFt2EYMVEzxmotZanZcsB6BqztHHqJwt5JrmmfL5ra1h//4M0DK7nFEZH51laZY56AQNMgrbEQw/xSRd6DoSqXAP198GA6E1JH1kwgtHbWntAEDOw5sAF67GSZIqo3kj20psiCgx2sBbTy7EH7dYzqSc8YFOwZGHUPlOGm0oPgkCibzRqpsKyzjQWSGKWLmSxb+oXJiD9bsR6hiSnmYjnk5yFKpO0mqm4P1KQSukjGxZGo9fnqMbZDyus7Cl7tFbsj+T0e5ItYM+4OgDkC3rs2yZOYX8ksMa6j8Qr3R/JLbFB5B22K1hYJAzAmvtk0V681j5ZIRpMehFfwbE3GQAkNDzp6zXNEIjeQ9MmpVZQxgGeoX2W6kOjgkiF1JtzMlmg3n5p9KZyo7TYLw1nFAaDnX5/x8MbhegHtxQO1hMWROzMwgGu3PkbTMNijgisoI5en/IvuKQ949hfbbmGgAnHaM+ZjQMC9s9eH43UcvT68Bzf9hrvm8dytWxUfnoO+CSAtMGdnx0evsHl8PDsPG0ltArXeB/NPT6i7hg4UDSTxUEQ+EfIxsXkPUnndRDE3I+/CEWquRsU6yYDxsRF7mMqA+XsB/r6ovbVDXmczAYOjPb4/u6vjMTExVVgapOV++a94xyALL+AbigHeOk89YgrvntDORA5uKRv7qw4B75xU9PreP6C7VkYrkg3DsVeosWKVmqmyrMfqv4Qy21kK/eUneZZiJ008OYBRvptNFMBzGXN95QxUp026TrcGyQerLP2fy7tkNznymNlsC7NzLiZHECXp9niHXRDOQDrPCfRy9KsVRy8b+e1bbK9CckaPm3MLhNieQbFhZz9cFFHVYR88n60Gdp8DWOixAbtHsa1OotkL+FbXdjY43sZJ3orPVZM1b4JsTJr4f5N5mCW/RNvKAe+MU6vCtqnOfthCs00L6lScmYdu3edsx/EJEH53lOc/WAGubMwTIAqnsrjL5gwYhUmwJPAu6CZrsWZNLXb4VXHyg0HDQdTc/C+aSa7PIeYjcU0xEwpHT2odxAElL8A1rnPzKegMybmrJkqbHCKGOlC7LGJExsOGg4aDvIcWCyoyYD57AcZaM9+UIB8EIQ4/qIAoAxQUA5sjr8wbMogNBOlnN5bBsrZD3M6CEI3STAoAqABmrVl9sdfZMCTwXzjxEYzvduxcsPBjefAzideyNkPGjeoA7olthrAqm0EioNUfWIobaowzXEPKmCrhewOgnDlz5iB5iiLmYG84wTkTMysmerY4KwxUqVmauLEhoOGg4aDS9RMZsC2UZCBawReEbgygEVQefyF/VkYtTWTTkC9Y/HBJWumdy1OnCsH72is3HDQcEBqWscnvteaia2cy58XgcWQBoQmwHalg0bgyp9RAIsPjADJn9EAUAU0dVPWC06nmaa2wbnGSI1m0oOGg4aDi+DA6AKuIwfT+QPiIIWUKAKbgyDyQD37gXV3RcC65SJgnSI0AlQB5OMvDGdhSKCJD5wmTmw4aDhoOGg4kDj4f0klI00ojAzRAAAAAElFTkSuQmCC"></Image>
                      </Box>
                      <Box w="30%" h="100%" border={pay === "paytm" ? "2px solid teal" : ""} onClick={() => setPay("paytm")}>
                        <Image src="data:image/png;base64,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"></Image>
                      </Box>
                    </HStack>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
            <VStack w={{ base: "100%", md: "100%", lg: "55%" }} m="auto" mt="30px" p={{ base: "20px 20px", md: "20px 20px", lg: "30px 50px" }} alignItems={"left"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <Text textAlign="center" fontSize="2xl" fontWeight="bold">Payment Details</Text>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <FormControl isInvalid={errors.cardHolderName && touched.cardHolderName} mb="4">
                  
                </FormControl>
                <FormControl isInvalid={errors.cardNumber && touched.cardNumber} mb="4">
                  
                </FormControl>
                <FormControl isInvalid={errors.cvv && touched.cvv} mb="4">
                  
                </FormControl>
                <Button type="submit" colorScheme="teal" mt="4" width="100%" ><a href="upi://pay?pa=mab.037323049680010@axisbank&am=1&tn=flipkart&cu=INR">Pay Now</a>
</Button>
              </form>
            </VStack>
          </Stack>
        ) : (
          <Stack direction="column" w={{ base: "95%", md: "90%", lg: "60%" }} m="auto" mt="30px" p={{ base: "20px 20px", md: "20px 20px", lg: "30px 50px" }} alignItems={"left"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Text textAlign="center" fontSize="2xl" fontWeight="bold">Shipping Details</Text>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormControl isInvalid={errors.name && touched.name} mb="4">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" name="name" type="text" onChange={handleChange} value={values.name} />
                {errors.name && touched.name ? <Text color="red.500">{errors.name}</Text> : null}
              </FormControl>
              <FormControl isInvalid={errors.email && touched.email} mb="4">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" name="email" type="email" onChange={handleChange} value={values.email} />
                {errors.email && touched.email ? <Text color="red.500">{errors.email}</Text> : null}
              </FormControl>
              <FormControl isInvalid={errors.address && touched.address} mb="4">
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input id="address" name="address" type="text" onChange={handleChange} value={values.address} />
                {errors.address && touched.address ? <Text color="red.500">{errors.address}</Text> : null}
              </FormControl>
              <FormControl isInvalid={errors.city && touched.city} mb="4">
                <FormLabel htmlFor="city">City</FormLabel>
                <Input id="city" name="city" type="text" onChange={handleChange} value={values.city} />
                {errors.city && touched.city ? <Text color="red.500">{errors.city}</Text> : null}
              </FormControl>
              <FormControl isInvalid={errors.zip && touched.zip} mb="4">
                <FormLabel htmlFor="zip">Zip Code</FormLabel>
                <Input id="zip" name="zip" type="text" onChange={handleChange} value={values.zip} />
                {errors.zip && touched.zip ? <Text color="red.500">{errors.zip}</Text> : null}
              </FormControl>
              <Button type="submit" colorScheme="teal" mt="4" width="100%">Save and Continue</Button>
            </form>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default PaymentPage;
