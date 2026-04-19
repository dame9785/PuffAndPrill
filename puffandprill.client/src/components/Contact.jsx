import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
    const [state, handleSubmit] = useForm("mzdyrwop");
    const [showPopup, setShowPopup] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            setShowPopup(true);

            if (formRef.current) {
                formRef.current.reset();
            }
        }
    }, [state.succeeded]);

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2>Kontakta oss</h2>
                <p>Har du frågor, tips eller vill samarbeta? Skicka ett meddelande till oss.</p>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    <input type="text" placeholder="Ditt namn" name="name" required />
                    <input type="email" placeholder="Din e-post" name="email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <input type="text" placeholder="Ämne" name="subject" required />
                    <textarea
                        placeholder="Skriv ditt meddelande här..."
                        rows="6"
                        name="message"
                        required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Skickar..." : "Skicka"}
                    </button>
                </form>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Tack!</h3>
                        <p>Ditt meddelande har skickats.</p>
                        <button onClick={() => setShowPopup(false)}>Stäng</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Contact;