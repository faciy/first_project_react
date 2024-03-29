import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Blog from "./components/blog";

const App = () =>{
  return (
      <>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Products />
        <Blog />
        <MyFooter />
      </>
  )
}

export default App;
