import NavBar from "./components/nav-bar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Publications from "./pages/publications/Publications";
import Pictures from "./pages/pictures/Pictures";
import Contacts from "./pages/contacts/Contacts";
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="/publications" element={<Publications/>}/>
          <Route path="/pictures" element={<Pictures/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
