import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import "typeface-lobster";
import "typeface-open-sans";
import HomePage from "./pages/HomePage";
import ContentBlock2 from "./components/ContentBlock2";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
