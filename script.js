const loanData = {
    "kreditbee": {
        status: "Safe",
        className: "safe",
        nbfc: "KrazyBee Services",
        reviews: "Mostly positive reviews",
        complaints: "Some users reported high interest rates"
    },

    "cashbean": {
        status: "Risky",
        className: "risky",
        nbfc: "Not clearly mentioned",
        reviews: "Mixed reviews",
        complaints: "Recovery harassment complaints reported"
    }
};

function scanLoan() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const resultDiv = document.getElementById("result");

    if (loanData[input]) {

        const loan = loanData[input];

        resultDiv.innerHTML = `
        
        <div class="card">
            <h2>${input.toUpperCase()}</h2>

            <p>Status:
                <span class="${loan.className}">
                    ${loan.status}
                </span>
            </p>

            <p><strong>NBFC Partner:</strong> ${loan.nbfc}</p>

            <p><strong>Reviews:</strong> ${loan.reviews}</p>

            <p><strong>Complaints:</strong> ${loan.complaints}</p>
        </div>
        `;

    } else {

        resultDiv.innerHTML = `
        
        <div class="card">
            <h2>Not Found ⚠️</h2>

            <p>
                We currently don't have data for this loan app.
            </p>
        </div>
        `;
    }
}