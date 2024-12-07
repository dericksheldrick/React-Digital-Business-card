import { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Profile />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
