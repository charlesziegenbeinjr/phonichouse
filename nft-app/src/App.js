import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Explore from "./pages/Explore/Explore";
import MainChat from "./components/Messages/mainchat/mainchat";
import Connect from "./pages/Connect/Connect";
import ArtistPage from './pages/artistPage/artistPage';
import ExistingArtistPage from './pages/existingArtistPage/existingArtistAPage';
import OrderDetailsSecond from "./components/OrderDetails/orderdetailssecond";
import OrderDetails from "./components/OrderDetails/orderdetails"
import CongratulationBox from "./components/CongratulationBox/CongratulationsBox"
import Messages from './pages/Messages/Messages';
// import CongratulationBox from './components/CongratulationBox/CongratulationsBox';
import ConfirmOrder from './components/ConfrimOrder/ConfirmOrder';
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/confirmOrder" element={<ConfirmOrder />} />
            <Route path="/congrats" element={<CongratulationBox />} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            {/* <Route
              path="/ramishPage"
              element={
                <MainChat
                  status="Online"
                  name="Kanye East"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEcVoNaAvb7SUBGVZwsHIzbu9ly34q_INRg&usqp=CAU"
                />
              }
            /> */}
            <Route path="/ramishPage" element={<OrderDetailsSecond />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/newArtist" element={<ArtistPage />} />
            <Route path="/existingArtist" element={<ExistingArtistPage />} />
            <Route path="/placeOrder" element={<OrderDetails />} />
            <Route path="/artistData" element={<OrderDetailsSecond />} />
            <Route path="/congratulationBox" element={<CongratulationBox />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
