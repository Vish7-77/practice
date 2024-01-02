import Counter from "./app/components/Counter";
import Footer from "./app/components/Footer";
import Navbar from "./app/components/Navbar";
import Products from "./app/screens/Products";
import Todo from "./app/screens/Todo";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
