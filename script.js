const loanData = {
  kreditbee: {
    status: 'Safe',
    className: 'safe',
    trustScore: '88/100',
    nbfc: 'KrazyBee Services Pvt Ltd',
    interest: '17% – 29.9% p.a.',
    rbi: 'Yes'
  },

  mpokket: {
    status: 'Safe',
    className: 'safe',
    trustScore: '85/100',
    nbfc: 'mPokket Financial Services',
    interest: '2% – 4% per month',
    rbi: 'Yes'
  },

  cashbean: {
    status: 'Careful',
    className: 'careful',
    trustScore: '55/100',
    nbfc: 'Not clearly disclosed',
    interest: 'High charges reported',
    rbi: 'Unclear'
  },

  cashmama: {
    status: 'Avoid',
    className: 'avoid',
    trustScore: '12/100',
    nbfc: 'No registered NBFC found',
    interest: 'Very high effective rate',
    rbi: 'No'
  }
};

function scanLoan() {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');

  if (!input) {
    resultDiv.innerHTML = '';
    return;
  }

  const loan = loanData[input];

  if (loan) {
    resultDiv.innerHTML = `
      <div class="result-card">
        <h3>${input.toUpperCase()}</h3>
        <p>Status: <span class="${loan.className}">${loan.status}</span></p>
        <p><strong>Trust Score:</strong> ${loan.trustScore}</p>
        <p><strong>NBFC Partner:</strong> ${loan.nbfc}</p>
        <p><strong>RBI Licensed:</strong> ${loan.rbi}</p>
        <p><strong>Interest Rate:</strong> ${loan.interest}</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="result-card">
        <h3>Not Found</h3>
        <p>We currently do not have data for this loan app.</p>
      </div>
    `;
  }
}

// Enter key support
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      scanLoan();
    }
  });
}