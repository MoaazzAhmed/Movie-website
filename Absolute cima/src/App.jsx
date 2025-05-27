import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Upcoming from "./components/Upcoming";
import New from "./components/New";
import Details from "./components/details";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="new" element={<New />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;