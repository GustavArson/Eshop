import { Routes, Route } from "react-router-dom";

import Header from './components/UI/Header';
import Home from "./containers/Pages/Home";



function App() {
    return (
        <>

            <Header />

            <Routes>

                <Route index element={<Home />} />

            </Routes>

        </>
    );
}

export default App;
