import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import MealDetails from './pages/MealDetails';
import {AnimatePresence} from "framer-motion";
import Header from "./components/Header.jsx";
import Settings from "./pages/Settings.jsx";

const App = () => {
    return (
        <AnimatePresence>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meal/:id" element={<MealDetails />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App;
