import { Image } from "@chakra-ui/react";
import "../CSS/GoOnTop.css";
const GoOnTop = () => {
  const goToTop = () => {
    window.scrollTo({ top: "0px", behavior: "smooth" });
  };
  return (
    <div className="top-btn" onClick={goToTop}>
      <Image
        className="goToTop"
        width={"40px"}
        height={"40px"}
        src="https://user-images.githubusercontent.com/106021674/221265918-b3c50d52-6d28-4adb-95da-b24c62f4e8e3.png"
        alt="Top"
      />
    </div>
  );
};

export default GoOnTop;
