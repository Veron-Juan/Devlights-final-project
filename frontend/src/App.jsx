import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Register from "./pages/register/Register";
import Footer from "../src/components/Footer/Footer";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className=" mx-auto  bg-gradient-to-r from-yellow-100 via-white to-teal-800 w-full">
      <header class=" row row-cols-1 row-cols-md-3 g-4">
      <Navbar />
      </header>
      <content class=" flex-justify-center flex-grow p-4"  >
      < Register/>
      </content>
      <footer class="bg-gradient-to-r from-yellow-200 via-white to-teal-900 p-6">
      <Footer />
      <center>Copy right by +Cotas.com</center>
      </footer>
    </div>
  );
}

export default App;
