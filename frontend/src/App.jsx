import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Register from "./pages/register/Register";
import Posts from "./pages/posts/Posts";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";



function App() {
  const lista = [
    {
    nombreUser: 'Juan',
    tituloPost: 'Perro perdido',
    ubicacionPost:  'Camba Cua Park',
    descripcionPost: 'Hola, mi perro se perdió ayer en la calle 123, si lo ven por favor contactarme al 123456789',
    latitudPost: -27.465038847067884, 
    longitudPost: -58.84456631035704,
    fechaPost: '12/12/2021'},
    {
    nombreUser: 'Pedro',
    tituloPost: 'Gato Perdido',
    ubicacionPost:  'Mitre Park',
    descripcionPost: 'Hola, mi gato se perdió ayer en la calle 123, si lo ven por favor contactarme al 123456789',
    latitudPost: -27.460374137170163, 
    longitudPost: -58.828945125378276,
    fechaPost: '12/12/2021'},
  ]

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }  
  
        

  return (
    <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200">
      <Provider store={store} >
      <Navbar />
      {/* <Register />
      <Posts/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/*" element={<h2>NOT FOUND</h2>}/>
      </Routes>

      </Provider>
    </div>
  );
}

export default App;
