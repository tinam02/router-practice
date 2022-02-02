import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//RUTE
//BrowserRouter: moze da ostane browserrouter ali je ovako lakse
//Routes: Sve rute idu ovde, nav bar moze van da bi bio na svakoj stranici!!
//Route: ocigledno + uz ovo moze da se koristi useParams
// NAVIGACIJA
// useHistory vise ne postoji! sada se koristi useNavigate!!
//useParams
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      {/* nav ce biti na svakoj stranici jer je van Routes */}
      <nav>
        {/* moze da se koristi a ili Link iz reacta */}
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        {/* error route mora da bude poslednja;  */}
        {/* kada neko pokusa da ode na stranicu koja ne postoji */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <div>Footer</div>
      {/* //ni ovo se ne menja */}
    </Router>
  );
}

export default App;
