import './App.css';
import axios from 'axios'
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import {
    Route,
    Routes
} from "react-router-dom";
import NewsFull from "./pages/NewsFull";
import WeatherFull from "./pages/WeatherFull";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <div className="wrapper">
        <Header />
        <div className={'content'}>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/weather'} element={<WeatherFull/>}/>
                <Route path={'/news/:index'} element={<NewsFull/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>

    </div>
  );
}

export default App;
