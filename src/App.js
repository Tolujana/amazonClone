import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./component/Cart";
import Header from "./component/Header";
import Checkout from "./page/Checkout";
import Home from "./page/Home";
import { Login } from "./page/Login";
import ProductDetails from "./page/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App  bg-[rgb(234,237,237)]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="product/:id"
            element={
              <>
                <div className="productPage flex">
                  <div className="main flex-1">
                    <Header />
                    <ProductDetails />
                  </div>
                  <Cart />
                </div>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <div className=" flex">
                  <div className="main">
                    <Header />
                    <Home />
                  </div>
                  <Cart />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
