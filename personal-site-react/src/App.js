
import HomePage from "./pages/HomePage";
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
