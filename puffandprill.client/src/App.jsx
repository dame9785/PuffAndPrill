import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Reviews from "./components/Review";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Faq from "./components/Faq";
import Colab from "./components/Colab";
import Snus from "./components/Snus";
import Vape from "./components/Vape";

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
    },
    popup: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
    },
};

function App() {
    const [showAgeGate, setShowAgeGate] = useState(false);

    useEffect(() => {
        const verified = localStorage.getItem("ageVerified");
        if (verified !== "true") {
            setShowAgeGate(true);
        }
    }, []);

    const handleConfirmAge = () => {
        localStorage.setItem("ageVerified", "true");
        setShowAgeGate(false);
    };

    const handleUnderAge = () => {
        window.location.href = "https://www.google.com";
    };

    return (
        <>
            {showAgeGate && (
                <div className="age-overlay">
                    <div className="age-modal">
                        <h2>Ålderskontroll</h2>
                        <p>Är du 18 år eller äldre?</p>

                        <div className="age-buttons">
                            <button className="confirm-btn" onClick={handleConfirmAge}>
                                Ja
                            </button>
                            <button className="deny-btn" onClick={handleUnderAge}>
                                Nej
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/colab" element={<Colab />} />
                    <Route path="/snus" element={<Snus />} />
                    <Route path="/vape" element={<Vape />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;