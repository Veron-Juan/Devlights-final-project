import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Register from "./pages/register/Register";
import PostPage from "./pages/post/PostPage"

function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200">
      <Navbar />
      <PostPage />
    </div>
  );
}

export default App;
