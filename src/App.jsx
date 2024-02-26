import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav.jsx";
import { Items } from "./pages/Items.jsx";
import { Home } from "./pages/Home.jsx";
import { useWindowWidth } from "./hooks/useWindowWitdh.jsx";
import { MobileBasket } from "./components/MobileBasket.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Basket } from "./pages/Basket.jsx";
function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <Nav />
      {windowWidth < 770 ? <MobileBasket /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/:username/basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
