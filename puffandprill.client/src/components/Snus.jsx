import { useEffect, useMemo, useState } from "react";
import "./Snus.css";

// Snus XQS images
import elderImg from "../assets/snus/xqs-elder-flower.png";
import orangeAppleXQS from "../assets/snus/xqs-orange-apple.png";
import cactusSourXQS from "../assets/snus/xqs-cactus-sour.png";
import tropicalXQS from "../assets/snus/xqs-tropical.png";
import blueberrymintXQS from "../assets/snus/xqs-blueberry-mint.png";
import fizzycolaXQS from "../assets/snus/xqs-fizzy-cola.png";
import hallonsodaXQS from "../assets/snus/xqs-hallon-soda.png";
import darkbananaXQS from "../assets/snus/xqs-dark-banana.png";
import strawberrykiwiXQS from "../assets/snus/xqs-strawberry-kiwi.png";

// Snus VELO images
import icycherryVELO from "../assets/snus/velo-icy-cherry.png";
import hotpeatchVELO from "../assets/snus/velo-hot-peatch.png";

// ZYN
import applemintZYN from "../assets/snus/zyn-apple-mint.png";

// LOOP
import redchiliLOOP from "../assets/snus/loop-red-chili-melon.png";
import smothMintLOOP from "../assets/snus/loop-smooth-mint.png";

function Snus() {
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
            brand: "XQS",
            name: "XQS Elder Flower",
            strength: "Strong 8mg",
            flavor: "Elderflower",
            category: "Blommig",
            feeling: "Mjuk",
            format: "Slim",
            freshness: 3,
            sweetness: 3,
            image: elderImg,
            description: "En blommig och fräsch smak med tydliga toner av fläder och en lätt söt avslutning.",
            info: "XQS Elder Flower har en mjuk och elegant smakprofil där fläder står i centrum. Smaken känns lätt blommig, frisk och något söt utan att bli tung. Prillan ger en ren och uppfriskande känsla under hela användningen, vilket gör den till ett bra val för dig som gillar mildare men ändå tydliga smaker med lite karaktär.",
        },
        {
            brand: "XQS",
            name: "XQS Orange Apple",
            strength: "Strong 8mg",
            flavor: "Orange / Apple",
            category: "Fruktig",
            feeling: "Fräsch",
            format: "Slim",
            freshness: 4,
            sweetness: 3,
            image: orangeAppleXQS,
            description: "En frisk kombination där söt apelsin möter krispigt grönt äpple i en livlig smakmix.",
            info: "XQS Orange Apple bjuder på en balanserad smak där saftig apelsin möter friskt grönt äpple. Först kommer en tydlig citruston som snabbt rundas av av en lätt syrlig och krispig äppelsmak. Kombinationen känns fräsch, fruktig och pigg, med en ren eftersmak som håller smaken levande länge.",
        },
        {
            brand: "XQS",
            name: "XQS Cactus Sour",
            strength: "Strong",
            flavor: "Cactus Sour",
            category: "Sour",
            feeling: "Pigg",
            format: "Slim",
            freshness: 5,
            sweetness: 2,
            image: cactusSourXQS,
            description: "En unik och syrlig smakprofil med gröna toner av kaktus och en frisk sour-kick.",
            info: "XQS Cactus Sour bjuder på en annorlunda och uppfriskande smak där kaktusens gröna, lätt blommiga ton möter en tydlig syrlighet. Smaken öppnar friskt med en syrlig känsla som för tankarna till citrus och gröna äpplen, innan den rundas av med en mjukare sötma. Resultatet är en livlig och modern smak som passar dig som gillar fräscha prillor med tydlig sour-karaktär.",
        },
        {
            brand: "XQS",
            name: "XQS Tropical",
            strength: "Strong",
            flavor: "Tropical",
            category: "Fruktig",
            feeling: "Exotisk",
            format: "Slim",
            freshness: 3,
            sweetness: 4,
            image: tropicalXQS,
            description: "En fruktig och exotisk blandning med tropiska toner och en söt, uppfriskande känsla.",
            info: "XQS Tropical levererar en rund och somrig smakprofil med tydliga inslag av tropiska frukter. Smaken känns söt, saftig och lätt exotisk, med en frisk avslutning som gör att den aldrig blir för tung. Det här är ett bra val för dig som gillar mjukare fruktsmaker med en lekfull och uppiggande karaktär.",
        },
        {
            brand: "XQS",
            name: "XQS Blueberry Mint",
            strength: "Strong",
            flavor: "Blueberry / Mint",
            category: "Mint",
            feeling: "Kall",
            format: "Slim",
            freshness: 5,
            sweetness: 3,
            image: blueberrymintXQS,
            description: "En sval och bärig kombination där söt blåbärssmak möter frisk mint.",
            info: "XQS Blueberry Mint kombinerar den söta och fylliga smaken av blåbär med en svalkande mintton. Först kommer en mjuk bärsötma som sedan lyfts upp av en frisk och ren mintkänsla. Balansen mellan fruktighet och kyla gör smaken både tydlig och lättanvänd, perfekt för dig som vill ha något fräscht med lite mer personlighet.",
        },
        {
            brand: "XQS",
            name: "XQS Fizzy Cola",
            strength: "Strong",
            flavor: "Fizzy Cola",
            category: "Godis",
            feeling: "Lekfull",
            format: "Slim",
            freshness: 2,
            sweetness: 5,
            image: fizzycolaXQS,
            description: "En söt och lekfull colasmak med känsla av läskig friskhet och lätt syrlig avslutning.",
            info: "XQS Fizzy Cola har en tydlig smak av klassisk cola med en lätt bubblig och smått syrlig känsla som påminner om kolsyrad läsk. Smaken är söt, fyllig och direkt igenkännbar, men får extra liv av den friska avslutningen. Ett perfekt alternativ för dig som gillar godisinspirerade smaker med en modern twist.",
        },
        {
            brand: "XQS",
            name: "XQS Hallon Soda",
            strength: "Strong",
            flavor: "Hallon Soda",
            category: "Bär",
            feeling: "Söt",
            format: "Slim",
            freshness: 3,
            sweetness: 4,
            image: hallonsodaXQS,
            description: "En söt och frisk smak av hallonläsk med bärig karaktär och lätt sodakänsla.",
            info: "XQS Hallon Soda bjuder på en tydlig smak av söta hallon med en frisk och läskliknande känsla. Den bäriga sötman kommer först, följt av en lätt syrlig ton som ger smaken mer liv och fräschör. Kombinationen känns ungdomlig, lekfull och lätt att tycka om för dig som gillar fruktiga prillor med lite godiskänsla.",
        },
        {
            brand: "XQS",
            name: "XQS Dark Banana",
            strength: "Strong",
            flavor: "Dark Banana",
            category: "Fruktig",
            feeling: "Fyllig",
            format: "Slim",
            freshness: 1,
            sweetness: 4,
            image: darkbananaXQS,
            description: "En djup och söt banansmak med rund karaktär och lite mörkare ton än klassiska fruktsmaker.",
            info: "XQS Dark Banana har en fyllig och mogen banansmak med en något djupare och mer intensiv karaktär. Smaken känns söt och rund, men med ett mörkare uttryck som gör den mer vuxen än många andra fruktalternativ. Ett spännande val för dig som vill testa något annorlunda och gillar tydliga, mjuka smaker.",
        },
        {
            brand: "XQS",
            name: "XQS Strawberry Kiwi",
            strength: "Strong",
            flavor: "Strawberry / Kiwi",
            category: "Fruktig",
            feeling: "Pigg",
            format: "Slim",
            freshness: 4,
            sweetness: 4,
            image: strawberrykiwiXQS,
            description: "En fruktig mix där söt jordgubbe möter frisk kiwi i en balanserad och somrig smak.",
            info: "XQS Strawberry Kiwi kombinerar söt jordgubbe med frisk och lätt syrlig kiwi. Smaken känns saftig och livlig från start, där jordgubben ger rund sötma medan kiwin tillför fräschör och ett lätt syrligt lyft. Resultatet är en välbalanserad prilla som passar dig som gillar fruktiga smaker med både sötma och pigghet.",
        },
        {
            brand: "VELO",
            name: "VELO Icy Cherry",
            strength: "Strong",
            flavor: "Icy Cherry",
            category: "Mint",
            feeling: "Kall",
            format: "Slim",
            freshness: 5,
            sweetness: 3,
            image: icycherryVELO,
            description: "En tydlig körsbärssmak med svalkande känsla och frisk avslutning.",
            info: "VELO Icy Cherry levererar en fyllig smak av mogna körsbär tillsammans med en tydlig kylande effekt. Den söta bärigheten balanseras av en frisk mentolkänsla som gör smaken ren och uppiggande utan att ta över helt. Eftersmaken är sval och lätt fruktig, vilket gör den till ett bra val för dig som gillar bärsmaker med extra isande känsla.",
        },
        {
            brand: "VELO",
            name: "VELO Hot Peach",
            strength: "Strong",
            flavor: "Hot Peach",
            category: "Fruktig",
            feeling: "Livlig",
            format: "Slim",
            freshness: 2,
            sweetness: 4,
            image: hotpeatchVELO,
            description: "En saftig persikosmak med varm karaktär och fruktig sötma.",
            info: "VELO Hot Peach bjuder på en tydlig och mjuk smak av mogen persika med en varm och livlig karaktär. Smaken är söt, rund och fruktig, men har samtidigt ett extra sting som ger den mer personlighet än en vanlig persikosmak. Ett bra alternativ för dig som vill ha något fruktigt men ändå lite djärvare och mer uttrycksfullt.",
        },
        {
            brand: "ZYN",
            name: "ZYN Apple Mint",
            strength: "Strong",
            flavor: "Apple Mint",
            category: "Mint",
            feeling: "Fräsch",
            format: "Slim",
            freshness: 5,
            sweetness: 2,
            image: applemintZYN,
            description: "En frisk kombination av grönt äpple och sval mint med ren och krispig känsla.",
            info: "ZYN Apple Mint kombinerar den krispiga smaken av grönt äpple med en uppfriskande mintton. Äpplet ger en lätt syrlig och fruktig öppning medan minten skapar en ren och sval avslutning. Smaken känns fräsch, tydlig och balanserad, vilket gör den till ett säkert val för dig som gillar klassiska smaker med lite extra fruktighet.",
        },
        {
            brand: "LOOP",
            name: "LOOP Red Chili Melon",
            strength: "Strong",
            flavor: "Red Chili / Melon",
            category: "Unik",
            feeling: "Kryddig",
            format: "Slim",
            freshness: 2,
            sweetness: 3,
            image: redchiliLOOP,
            description: "En ovanlig mix där söt melon möter ett lätt kryddigt sting av röd chili.",
            info: "LOOP Red Chili Melon är en smak som sticker ut genom att kombinera söt och saftig melon med ett lätt kryddigt inslag av röd chili. Melonen ger en mjuk och fruktig bas medan chilin tillför ett diskret sting som gör smaken mer spännande och minnesvärd. Ett bra val för dig som vill testa något annorlunda och mer vågat.",
        },
        {
            brand: "LOOP",
            name: "LOOP Smooth Mint",
            strength: "Strong",
            flavor: "Smooth Mint",
            category: "Mint",
            feeling: "Mjuk",
            format: "Slim",
            freshness: 4,
            sweetness: 1,
            image: smothMintLOOP,
            description: "En mjuk och ren mintsmak med sval känsla och klassisk fräschör.",
            info: "LOOP Smooth Mint har en behaglig och balanserad mintsmak som känns sval utan att bli för skarp. Smaken är ren, klassisk och lätt att använda under längre stunder tack vare sin mjuka karaktär. Passar dig som gillar fräscha mintprodukter men vill ha en mer avrundad och mindre aggressiv känsla.",
        },
    ];

    const filters = ["Alla", "Fruktig", "Bär", "Mint", "Godis", "Blommig", "Sour", "Unik"];

    const filteredProducts = useMemo(() => {
        if (activeFilter === "Alla") return allProducts;
        return allProducts.filter((product) => product.category === activeFilter);
    }, [activeFilter]);

    const groupedProducts = useMemo(() => {
        return {
            XQS: filteredProducts.filter((product) => product.brand === "XQS"),
            VELO: filteredProducts.filter((product) => product.brand === "VELO"),
            ZYN: filteredProducts.filter((product) => product.brand === "ZYN"),
            LOOP: filteredProducts.filter((product) => product.brand === "LOOP"),
        };
    }, [filteredProducts]);

    const renderBars = (value) => "●".repeat(value) + "○".repeat(5 - value);

    return (
        <section className="snus-page">
            <div className="snus-container">
                <div className="snus-header">
                    <h1>Snus</h1>
                    <p>
                        Utforska olika smaker, styrkor och känslor. Klicka på en
                        produkt för att läsa mer.
                    </p>
                </div>

                <div className="vape-filter-bar">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`vape-filter-btn ${activeFilter === filter ? "active" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {Object.entries(groupedProducts).map(([brand, products]) =>
                    products.length > 0 ? (
                        <div className="snus-products-section" key={brand}>
                            <h2 className="snus-brand-title">{brand}</h2>

                            <div className="snus-products-grid">
                                {products.map((product, index) => (
                                    <div
                                        className="snus-product-card"
                                        key={index}
                                    >
                                        <div className="vape-card-top">
                                            <span className="vape-brand-badge">
                                                {product.brand}
                                            </span>
                                            <span className="vape-flavor-badge">
                                                {product.category}
                                            </span>
                                        </div>

                                        <img
                                            className="product-image-preview"
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <h3>{product.name}</h3>

                                        <div className="vape-meta">
                                            <p><strong>Styrka:</strong> {product.strength}</p>
                                            <p><strong>Smak:</strong> {product.flavor}</p>
                                            <p><strong>Känsla:</strong> {product.feeling}</p>
                                            <p><strong>Format:</strong> {product.format}</p>
                                        </div>

                                        <div className="vape-stats">
                                            <p><strong>Friskhet:</strong> {renderBars(product.freshness)}</p>
                                            <p><strong>Sötma:</strong> {renderBars(product.sweetness)}</p>
                                        </div>

                                        <p className="vape-description">
                                            {product.description}
                                        </p>

                                        <button
                                            className="snus-read-more-btn"
                                            onClick={() => setSelectedProduct(product)}
                                        >
                                            Läs mer
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null
                )}

                {filteredProducts.length === 0 && (
                    <div className="snus-empty-state">
                        <p>Inga produkter hittades i den här kategorin.</p>
                    </div>
                )}
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
                            <span className="vape-brand-badge">{selectedProduct.brand}</span>
                            <span className="vape-flavor-badge">{selectedProduct.category}</span>
                            <span className="vape-feeling-badge">{selectedProduct.feeling}</span>
                        </div>

                        <div className="vape-stats">
                            <p><strong>Styrka:</strong> {selectedProduct.strength}</p>
                            <p><strong>Smak:</strong> {selectedProduct.flavor}</p>
                            <p><strong>Format:</strong> {selectedProduct.format}</p>
                            <p><strong>Friskhet:</strong> {renderBars(selectedProduct.freshness)}</p>
                            <p><strong>Sötma:</strong> {renderBars(selectedProduct.sweetness)}</p>
                        </div>

                        <p className="vape-modal-description">
                            {selectedProduct.info}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Snus;