import { useState } from "react";
import "./Faq.css";

const faqData = [
    {
        question: "Vad är skillnaden mellan snus och vape?",
        answer:
            "Snus är en nikotinprodukt som används under läppen, medan vape är en elektronisk produkt som förångar vätska för inhalering.",
    },
    {
        question: "Innehåller alla produkter nikotin?",
        answer:
            "Nej, vissa produkter kan vara nikotinfria. Läs alltid produktinformationen noggrant innan köp eller användning.",
    },
    {
        question: "Är det 18-årsgräns på produkterna?",
        answer:
            "Ja, du måste vara minst 18 år för att köpa produkter som innehåller nikotin eller andra åldersbegränsade varor.",
    },
    {
        question: "Hur länge håller en vape?",
        answer:
            "Det beror på modell och användning. Engångsvapes räcker olika länge beroende på antal puffar, medan påfyllningsbara modeller håller betydligt längre.",
    },
    {
        question: "Hur ska snus förvaras?",
        answer:
            "Snus bör förvaras svalt, gärna i kylskåp, för att behålla smak och kvalitet så länge som möjligt.",
    },
    {
        question: "Kan jag kontakta er om jag har fler frågor?",
        answer:
            "Ja, självklart. Om du inte hittar svaret här kan du använda vårt kontaktformulär så hjälper vi dig vidare.",
    },
];

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="faq-header">
                    <h1>Vanliga frågor</h1>
                    <p>
                        Här hittar du svar på de vanligaste frågorna om snus, vape och våra
                        produkter.
                    </p>
                </div>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                            key={index}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                            >
                                <span>{item.question}</span>
                                <span className="faq-icon">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <div className="faq-answer-wrapper">
                                <p className="faq-answer">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-footer">
                    <h3>Hittade du inte svaret?</h3>
                    <p>Kontakta oss så hjälper vi dig vidare.</p>
                    <a href="/contact" className="faq-contact-btn">
                        Kontakta oss
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Faq;