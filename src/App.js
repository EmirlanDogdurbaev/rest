import axios from "axios";
import "./App.css";
import Nav from "./components/Navigation/Nav";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Notes from "./components/Notes/Notes";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/pages/About";
function App() {
  // let test = fetch("http://127.0.0.1:8000/api")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  axios
    .get("http://127.0.0.1:8000/api")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/notes" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
