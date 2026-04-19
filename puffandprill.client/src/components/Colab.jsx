import { useState } from "react";
import "./Colab.css";

function Colab() {
    return (
        <section className="collab-page">
            <div className="collab-overlay"></div>

            <div className="collab-container">
                <span className="collab-badge">Samarbeta med oss</span>

                <h1>Vill du samarbeta med Puff & Prill?</h1>

                <p className="collab-intro">
                    Vi är alltid öppna för samarbeten med varumärken, butiker och aktörer
                    inom snus, vape och lifestyle. Har du en produkt, kampanj eller idé som
                    passar vår målgrupp? Då vill vi gärna höra från dig.
                </p>

                <div className="collab-grid">
                    <div className="collab-card">
                        <h3>Vad vi erbjuder</h3>
                        <p>
                            Exponering via vår plattform, artiklar, recensioner, guider,
                            kampanjer och content som är anpassat för vår publik.
                        </p>
                    </div>

                    <div className="collab-card">
                        <h3>Vi söker</h3>
                        <p>
                            Seriösa samarbeten med relevanta företag, produkter och tjänster
                            som matchar vår stil och våra läsares intressen.
                        </p>
                    </div>

                    <div className="collab-card">
                        <h3>För företag</h3>
                        <p>
                            Oavsett om du vill synas genom sponsrat innehåll, produktlansering
                            eller långsiktigt samarbete kan vi hitta en lösning tillsammans.
                        </p>
                    </div>

                    <div className="collab-card">
                        <h3>Kontakt</h3>
                        <p>
                            Skicka ett meddelande till oss via kontaktformuläret eller maila
                            direkt så återkommer vi så snabbt vi kan.
                        </p>
                    </div>
                </div>

                <div className="collab-cta">
                    <h2>Låt oss skapa något tillsammans</h2>
                    <p>
                        Vi gillar moderna, kreativa och genuina samarbeten som känns rätt för
                        både oss och våra besökare.
                    </p>
                    <a href="/contact" className="collab-btn">Kontakta oss</a>
                </div>
            </div>
        </section>
    );
}

export default Colab;