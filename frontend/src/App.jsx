import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Register from "./pages/register/Register";
import Card from './components/Card'
import Map from './components/MapComponent'


function App() {
  const lista = [
    {
    nombreUser: 'Juan',
    tituloPost: 'Perro perdido',
    ubicacionPost:  'Calle 123',
    descripcionPost: 'Hola, mi perro se perdió ayer en la calle 123, si lo ven por favor contactarme al 123456789',
    latitudPost: -27.465038847067884, 
    longitudPost: -58.84456631035704},
    {
    nombreUser: 'Pedro',
    tituloPost: 'Gato perdido',
    ubicacionPost:  'Calle 123',
    descripcionPost: 'Hola, mi gato se perdió ayer en la calle 123, si lo ven por favor contactarme al 123456789',
    latitudPost: -27.460374137170163, 
    longitudPost: -58.828945125378276},
  ]

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }  
  
        

  return (
    <>
    <div className="App flex flex-row">

    {lista.map((item) => (
      <Card nombreUser={item.nombreUser} 
      tituloPost={item.tituloPost} 
      ubicacionPost={item.ubicacionPost} 
      descripcionPost={item.descripcionPost}
      latitudPost={item.latitudPost}
      longitudPost={item.longitudPost} />
    ))}
      
    </div>
    </>
  );
}

export default App;
