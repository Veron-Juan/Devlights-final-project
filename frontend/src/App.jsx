import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200">
      {/* <Navbar /> */}
      <Posts/>
    </div>
  );
}

export default App;
