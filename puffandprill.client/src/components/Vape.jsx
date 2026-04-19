import { useEffect, useState } from "react";
import "./Vape.css";

// Vfeel vape
import love66Feel from "../assets/vape/vfeel-love66.png";
import trippleberryFeel from "../assets/vape/vfeel-tripple-berry.png";
import blueberryiceFeel from "../assets/vape/vfeel-blue-berry-ice.png";
import doubleappleiceFeel from "../assets/vape/vfeel-double-apple.png";

// Vont vape
import bonbonbananVont from "../assets/vape/vont-bonbon-banana.png";
import cherryberryVont from "../assets/vape/vont-cherry-berry.png";
import watermeloniceVont from "../assets/vape/vont-watermelon-ice.png";

// Lost vape
import lostVape from "../assets/vape/lost-vape.png";

function Vape() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeFilter, setActiveFilter] = useState("Alla");

    useEffect(() => {
        if (selectedProduct) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [selectedProduct]);

    const allProducts = [
        {
            brand: "Vfeel",
            name: "Vfeel Love 66",
            strength: "8 mg",
            flavor: "Melon / Mint",
            feeling: "Fräsch",
            nicotine: "Medium",
            image: love66Feel,
            description:
                "En populär smak med söt melon och en sval ton av mint. Ger en fräsch och balanserad känsla som passar dig som gillar klassiska och mjuka smaker.",
        },
        {
            brand: "Vfeel",
            name: "Vfeel Triple Berry",
            strength: "8 mg",
            flavor: "Bärmix",
            feeling: "Söt",
            nicotine: "Medium",
            image: trippleberryFeel,
            description:
                "En fruktig blandning av flera bär med tydlig sötma och rund smakprofil. Perfekt för dig som gillar fylliga och bäriga alternativ.",
        },
        {
            brand: "Vfeel",
            name: "Vfeel Blueberry Ice",
            strength: "8 mg",
            flavor: "Blåbär / Ice",
            feeling: "Kall",
            nicotine: "Medium",
            image: blueberryiceFeel,
            description:
                "Blåbärssmak med en kylande avslutning som ger en frisk och ren känsla. Ett bra val för dig som vill ha både sötma och isighet.",
        },
        {
            brand: "Vfeel",
            name: "Vfeel Double Apple",
            strength: "8 mg",
            flavor: "Äpple",
            feeling: "Fruktig",
            nicotine: "Medium",
            image: doubleappleiceFeel,
            description:
                "Dubbel äppelsmak med en tydlig fruktighet och mjuk sötma. En rund smak som känns både frisk och lätt att använda länge.",
        },
        {
            brand: "Vont",
            name: "Vont Bonbon Banana",
            strength: "10 mg",
            flavor: "Banan / Godis",
            feeling: "Söt",
            nicotine: "Strong",
            image: bonbonbananVont,
            description:
                "En lekfull smak med tydlig bananton och en söt känsla som påminner om godis. Passar dig som gillar mjuka och söta profiler.",
        },
        {
            brand: "Vont",
            name: "Vont Cherry Berry",
            strength: "10 mg",
            flavor: "Körsbär / Bär",
            feeling: "Fruktig",
            nicotine: "Strong",
            image: cherryberryVont,
            description:
                "En smakrik mix av körsbär och bär med både sötma och friskhet. Ger en fyllig upplevelse med tydlig fruktkaraktär.",
        },
        {
            brand: "Vont",
            name: "Vont Watermelon Ice",
            strength: "10 mg",
            flavor: "Vattenmelon / Ice",
            feeling: "Kall",
            nicotine: "Strong",
            image: watermeloniceVont,
            description:
                "Söt vattenmelon tillsammans med en kall avslutning. En frisk och somrig smak som känns lätt och uppiggande.",
        },
        {
            brand: "Lost Vape",
            name: "Lost Vape Original",
            strength: "12 mg",
            flavor: "Mixad smak",
            feeling: "Intensiv",
            nicotine: "Extra Strong",
            image: lostVape,
            description:
                "En kraftigare vape med tydlig karaktär och mer intensiv upplevelse. Passar dig som vill ha en starkare känsla och mer tryck i smaken.",
        },
    ];

    const filters = ["Alla", "Vfeel", "Vont", "Lost Vape"];

    const filteredProducts =
        activeFilter === "Alla"
            ? allProducts
            : allProducts.filter((product) => product.brand === activeFilter);

    return (
        <section className="vape-page">
            <div className="vape-container">
                <div className="vape-header">
                    <h1>Vapes</h1>
                    <p>
                        Utforska olika smaker, styrkor och känslor. Klicka på en
                        produkt för att läsa mer.
                    </p>
                </div>

                <div className="vape-filter-bar">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`vape-filter-btn ${activeFilter === filter ? "active" : ""
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="vape-grid">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={index}
                            className="vape-card"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="vape-card-top">
                                <span className="vape-brand-badge">
                                    {product.brand}
                                </span>
                                <span className="vape-feeling-badge">
                                    {product.feeling}
                                </span>
                            </div>

                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image-preview"
                            />

                            <h3>{product.name}</h3>
                            <p className="vape-flavor-text">{product.flavor}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <div
                    className="product-modal-overlay"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="product-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="product-modal-close"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ×
                        </button>

                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="product-modal-image"
                        />

                        <h2>{selectedProduct.name}</h2>

                        <div className="vape-modal-badges">
                            <span className="vape-brand-badge">
                                {selectedProduct.brand}
                            </span>
                            <span className="vape-flavor-badge">
                                {selectedProduct.flavor}
                            </span>
                            <span className="vape-feeling-badge">
                                {selectedProduct.feeling}
                            </span>
                        </div>

                        <div className="vape-stats">
                            <p>
                                <strong>Styrka:</strong>{" "}
                                {selectedProduct.strength}
                            </p>
                            <p>
                                <strong>Nikotinkänsla:</strong>{" "}
                                {selectedProduct.nicotine}
                            </p>
                        </div>

                        <p className="vape-modal-description">
                            {selectedProduct.description}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Vape;