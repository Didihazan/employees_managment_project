import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
    return (
        <Router>
            <div className="App">
               <Navbar/>
<Home/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
