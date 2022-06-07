import { Home, Chat } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductTable from "./Components/ProductTable";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductTable />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
