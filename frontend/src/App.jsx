import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200 ">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
