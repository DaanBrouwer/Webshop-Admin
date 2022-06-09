import { Home, Chat } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductTable from "./Components/ProductTable";
import UpdateProducts from "./Components/UpdateProducts";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductTable />} />
          <Route path="/products/:id" element={<UpdateProducts />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
