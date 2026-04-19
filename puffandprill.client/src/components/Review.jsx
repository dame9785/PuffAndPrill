function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "XQS",
            rating: 5,
            text: "Riktigt bra sida med snygg design och enkla recensioner att läsa."
        },
        {
            id: 2,
            name: "VONT",
            rating: 4,
            text: "Jag gillar upplägget mycket. Det känns modernt och tydligt."
        },
        {
            id: 3,
            name: "Velo",
            rating: 5,
            text: "Favoritsidan för att läsa om produkter och nyheter."
        },
        {
            id: 1,
            name: "XQS",
            rating: 5,
            text: "Riktigt bra sida med snygg design och enkla recensioner att läsa."
        },
        {
            id: 4,
            name: "VONT",
            rating: 4,
            text: "Jag gillar upplägget mycket. Det känns modernt och tydligt."
        },
        {
            id: 5,
            name: "Velo",
            rating: 5,
            text: "Favoritsidan för att läsa om produkter och nyheter."
        },
        {
            id: 4,
            name: "VONT",
            rating: 4,
            text: "Jag gillar upplägget mycket. Det känns modernt och tydligt."
        },
        {
            id: 5,
            name: "Velo",
            rating: 5,
            text: "Favoritsidan för att läsa om produkter och nyheter."
        },
        {
            id: 4,
            name: "VONT",
            rating: 4,
            text: "Jag gillar upplägget mycket. Det känns modernt och tydligt."
        },
        {
            id: 5,
            name: "Velo",
            rating: 5,
            text: "Favoritsidan för att läsa om produkter och nyheter."
        },
        {
            id: 5,
            name: "Megan",
            rating: 5,
            text: "Favoritsidan för att läsa om produkter och nyheter."
        },

    ];

    return (
        <section className="reviews-page" id="reviews">
            <div className="reviews-header">
                <h1>Recensioner</h1>
                <p>Här hittar du vad våra besökare tycker om Puff & Prill.</p>
            </div>

            <div className="reviews-grid">
                {reviews.map((review) => (
                    <div className="review-card" key={review.id}>
                        <h3>{review.name}</h3>
                        <div className="stars">
                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}
                        </div>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;