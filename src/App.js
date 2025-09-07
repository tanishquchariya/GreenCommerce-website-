import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer/Footer";

import SmallNavbar from "./Components/Navbar/SmallNavbar";
import GoOnTop from "./Components/GoOnTop";
import LoginAdmin from "./Pages/Admin Page/LoginAdmin";

function App() {
  return (
    <div className="App">
      <div className="big">
        <Navbar />
      </div>
      <div className="small">
        <SmallNavbar />
      </div>
      {/* <GoOnTop /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
