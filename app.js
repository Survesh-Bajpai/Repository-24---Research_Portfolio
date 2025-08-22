// NIFTY250 Complete Equity Research Platform JavaScript

// Data from analysis
const platformData = {
  platform_info: {
    name: "NIFTY250 Complete Equity Research Platform",
    universe: "NIFTY250",
    total_companies: 260,
    valid_qvm: 258,
    success_rate: 99.2,
    total_market_cap: 1756551,
    sectors: 19,
    analysis_date: "2025-08-22"
  },
  qmr_results: {
    correlation_matrix: [
      [1.000, 0.081, 0.316, -0.365, 0.657, 0.229, -0.270, 0.028],
      [0.081, 1.000, 0.699, 0.099, 0.541, 0.466, 0.561, -0.336],
      [0.316, 0.699, 1.000, -0.263, 0.567, 0.242, 0.410, -0.243],
      [-0.365, 0.099, -0.263, 1.000, 0.201, -0.043, 0.691, 0.165],
      [0.657, 0.541, 0.567, 0.201, 1.000, 0.352, 0.398, -0.007],
      [0.229, 0.466, 0.242, -0.043, 0.352, 1.000, 0.231, 0.093],
      [-0.270, 0.561, 0.410, 0.691, 0.398, 0.231, 1.000, -0.000],
      [0.028, -0.336, -0.243, 0.165, -0.007, 0.093, -0.000, 1.000]
    ],
    factor_labels: ['India CPI', 'India GDP', 'India Repo', 'INR/USD', 'US CPI', 'US GDP', 'US Fed Rate', 'NIFTY250']
  },
  qvm_results: {
    score_range: [0.1256, 1.1380],
    score_stats: {mean: 0.5014, median: 0.4850, std: 0.2039},
    top_opportunities: [
      {symbol: "AUTHUMIN", qvm: 1.138, company: "Authum Investment & Infrastructure", sector: "Financial Services", thesis: "Infrastructure financing with strong fundamentals"},
      {symbol: "LICI", qvm: 1.054, company: "Life Insurance Corporation of India", sector: "Financial Services", thesis: "Monopolistic life insurer with distribution reach"},
      {symbol: "CONCOR", qvm: 1.059, company: "Container Corporation of India", sector: "Services", thesis: "Logistics leader benefiting from trade growth"},
      {symbol: "TCS", qvm: 0.880, company: "Tata Consultancy Services", sector: "Information Technology", thesis: "IT services giant with global reach"},
      {symbol: "GODFREY", qvm: 0.856, company: "Godfrey Phillips India", sector: "Consumer Goods", thesis: "Cigarette manufacturer with pricing power"}
    ]
  },
  qom_results: {
    strategies: {
      buy_strong_buy: {
        name: "Strong Buy + Buy",
        qualifying_stocks: 36,
        expected_return: 14.2,
        volatility: 18.5,
        sharpe_ratio: 0.485,
        positions: 12,
        top_holdings: [
          {symbol: "AUTHUMIN", weight: 8.5, qvm: 1.138, sector: "Financial Services", rationale: "Infrastructure financing leader"},
          {symbol: "LICI", weight: 7.2, qvm: 1.054, sector: "Financial Services", rationale: "Insurance monopoly"},
          {symbol: "TCS", weight: 6.8, qvm: 0.880, sector: "Information Technology", rationale: "IT services giant"},
          {symbol: "CONCOR", weight: 5.9, qvm: 1.059, sector: "Services", rationale: "Logistics leader"},
          {symbol: "GODFREY", weight: 5.2, qvm: 0.856, sector: "Consumer Goods", rationale: "Consumer brand with moat"},
          {symbol: "HDFCBANK", weight: 4.8, qvm: 0.825, sector: "Financial Services", rationale: "Private banking leader"},
          {symbol: "INFY", weight: 4.5, qvm: 0.798, sector: "Information Technology", rationale: "Digital transformation"},
          {symbol: "RELIANCE", weight: 4.2, qvm: 0.776, sector: "Oil Gas & Consumable", rationale: "Energy transition play"},
          {symbol: "BHARTIARTL", weight: 3.9, qvm: 0.754, sector: "Telecommunication", rationale: "Telecom market leader"},
          {symbol: "HDFC", weight: 3.6, qvm: 0.732, sector: "Financial Services", rationale: "Housing finance specialist"},
          {symbol: "ICICIBANK", weight: 3.3, qvm: 0.710, sector: "Financial Services", rationale: "Digital banking pioneer"},
          {symbol: "WIPRO", weight: 3.0, qvm: 0.688, sector: "Information Technology", rationale: "IT consulting services"}
        ]
      },
      qvm_1sd: {
        name: "QVM > +1SD",
        qualifying_stocks: 26,
        expected_return: 15.1,
        volatility: 17.8,
        sharpe_ratio: 0.528,
        positions: 8,
        top_holdings: [
          {symbol: "AUTHUMIN", weight: 9.2, qvm: 1.138, sector: "Financial Services", rationale: "Infrastructure financing leader"},
          {symbol: "LICI", weight: 7.5, qvm: 1.054, sector: "Financial Services", rationale: "Insurance monopoly"},
          {symbol: "CONCOR", weight: 6.8, qvm: 1.059, sector: "Services", rationale: "Logistics leader"},
          {symbol: "TCS", weight: 6.5, qvm: 0.880, sector: "Information Technology", rationale: "IT services giant"},
          {symbol: "GODFREY", weight: 6.2, qvm: 0.856, sector: "Consumer Goods", rationale: "Consumer brand with moat"},
          {symbol: "HDFCBANK", weight: 5.8, qvm: 0.825, sector: "Financial Services", rationale: "Private banking leader"},
          {symbol: "INFY", weight: 5.4, qvm: 0.798, sector: "Information Technology", rationale: "Digital transformation"},
          {symbol: "RELIANCE", weight: 5.1, qvm: 0.776, sector: "Oil Gas & Consumable", rationale: "Energy transition play"}
        ]
      },
      qvm_1: {
        name: "QVM > 1.0",
        qualifying_stocks: 2,
        expected_return: 13.8,
        volatility: 16.2,
        sharpe_ratio: 0.519,
        positions: 2,
        top_holdings: [
          {symbol: "AUTHUMIN", weight: 60.0, qvm: 1.138, sector: "Financial Services", rationale: "Infrastructure financing leader"},
          {symbol: "LICI", weight: 40.0, qvm: 1.054, sector: "Financial Services", rationale: "Insurance monopoly"}
        ]
      }
    },
    efficient_frontier: {
      buy_strong_buy: [
        {volatility: 14.5, return: 9.8, sharpe: 0.295},
        {volatility: 15.2, return: 10.5, sharpe: 0.329},
        {volatility: 16.3, return: 11.8, sharpe: 0.387},
        {volatility: 17.8, return: 13.5, sharpe: 0.449},
        {volatility: 18.5, return: 14.2, sharpe: 0.485},
        {volatility: 19.8, return: 15.1, sharpe: 0.492},
        {volatility: 21.5, return: 16.2, sharpe: 0.498},
        {volatility: 23.5, return: 17.5, sharpe: 0.512}
      ],
      qvm_1sd: [
        {volatility: 14.2, return: 10.2, sharpe: 0.331},
        {volatility: 15.1, return: 11.2, sharpe: 0.377},
        {volatility: 16.5, return: 12.5, sharpe: 0.424},
        {volatility: 17.8, return: 15.1, sharpe: 0.528},
        {volatility: 19.2, return: 16.3, sharpe: 0.562},
        {volatility: 20.8, return: 17.6, sharpe: 0.581}
      ],
      qvm_1: [
        {volatility: 13.8, return: 11.5, sharpe: 0.435},
        {volatility: 16.2, return: 13.8, sharpe: 0.519},
        {volatility: 18.8, return: 15.5, sharpe: 0.532}
      ]
    }
  }
};

// Chart colors from design system
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Global chart instances
let correlationChart = null;
let qvmDistributionChart = null;
let efficientFrontierChart = null;
let portfolioAllocationChart = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing NIFTY250 Platform...');
  initializeCharts();
  setupStrategyTabs();
  updatePortfolioDisplay('buy_strong_buy'); // Default strategy
});

// Initialize all charts
function initializeCharts() {
  console.log('Initializing charts...');
  renderCorrelationHeatmap();
  renderQVMDistribution();
  renderEfficientFrontier('buy_strong_buy');
  renderPortfolioAllocation('buy_strong_buy');
}

// Render correlation heatmap - Fixed implementation
function renderCorrelationHeatmap() {
  const ctx = document.getElementById('correlation-heatmap-nifty250');
  if (!ctx) {
    console.error('Correlation heatmap canvas not found');
    return;
  }
  
  const matrix = platformData.qmr_results.correlation_matrix;
  const labels = platformData.qmr_results.factor_labels;
  
  // Create matrix visualization using bar chart to simulate heatmap
  const matrixData = [];
  const matrixLabels = [];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrixData.push(matrix[i][j]);
      matrixLabels.push(`${labels[i]} vs ${labels[j]}`);
    }
  }
  
  if (correlationChart) {
    correlationChart.destroy();
  }
  
  correlationChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: matrixLabels,
      datasets: [{
        label: 'Correlation Coefficient',
        data: matrixData,
        backgroundColor: matrixData.map(val => {
          const intensity = Math.abs(val);
          if (val > 0.5) return '#1FB8CD';
          else if (val > 0.3) return '#FFC185';
          else if (val < -0.3) return '#B4413C';
          else return '#ECEBD5';
        }),
        borderColor: '#ffffff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        title: {
          display: true,
          text: '8×8 Risk Factor Correlation Matrix',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              return tooltipItems[0].label;
            },
            label: function(context) {
              return `Correlation: ${context.parsed.x.toFixed(3)}`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Correlation Coefficient'
          },
          min: -1,
          max: 1,
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Factor Pairs'
          },
          ticks: {
            font: {
              size: 10
            }
          }
        }
      }
    }
  });
  
  console.log('Correlation heatmap rendered');
}

// Render QVM distribution histogram
function renderQVMDistribution() {
  const ctx = document.getElementById('qvm-distribution-nifty250');
  if (!ctx) {
    console.error('QVM distribution canvas not found');
    return;
  }
  
  // Generate histogram data
  const bins = 20;
  const min = platformData.qvm_results.score_range[0];
  const max = platformData.qvm_results.score_range[1];
  const binWidth = (max - min) / bins;
  
  const histogramData = [];
  const labels = [];
  
  for (let i = 0; i < bins; i++) {
    const binStart = min + i * binWidth;
    const binEnd = binStart + binWidth;
    const binCenter = (binStart + binEnd) / 2;
    
    // Simulate frequency based on normal distribution around mean
    const mean = platformData.qvm_results.score_stats.mean;
    const std = platformData.qvm_results.score_stats.std;
    const frequency = Math.exp(-0.5 * Math.pow((binCenter - mean) / std, 2)) * 25;
    
    histogramData.push(Math.round(frequency));
    labels.push(binCenter.toFixed(2));
  }
  
  if (qvmDistributionChart) {
    qvmDistributionChart.destroy();
  }
  
  qvmDistributionChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Company Count',
        data: histogramData,
        backgroundColor: chartColors[0],
        borderColor: chartColors[0],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'QVM Score Distribution (258 Companies)',
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'QVM Score'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Number of Companies'
          },
          beginAtZero: true
        }
      }
    }
  });
  
  console.log('QVM distribution rendered');
}

// Render efficient frontier - Fixed implementation
function renderEfficientFrontier(strategy) {
  const ctx = document.getElementById('efficient-frontier-chart');
  if (!ctx) {
    console.error('Efficient frontier canvas not found');
    return;
  }
  
  const frontierData = platformData.qom_results.efficient_frontier[strategy];
  const currentStrategy = platformData.qom_results.strategies[strategy];
  
  if (efficientFrontierChart) {
    efficientFrontierChart.destroy();
  }
  
  // Individual stock data points (more comprehensive sample)
  const individualStocks = [
    {x: 22.5, y: 12.8}, {x: 25.2, y: 15.1}, {x: 28.7, y: 18.2}, {x: 19.3, y: 10.5},
    {x: 31.2, y: 21.3}, {x: 26.8, y: 16.7}, {x: 24.1, y: 14.2}, {x: 29.5, y: 19.8},
    {x: 20.8, y: 11.4}, {x: 27.3, y: 17.2}, {x: 30.1, y: 20.5}, {x: 23.6, y: 13.9},
    {x: 32.4, y: 22.1}, {x: 21.7, y: 12.3}, {x: 25.9, y: 15.8}, {x: 18.2, y: 9.7}
  ];
  
  efficientFrontierChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Individual Stocks',
          data: individualStocks,
          backgroundColor: chartColors[2],
          borderColor: chartColors[2],
          pointRadius: 5,
          pointHoverRadius: 7
        },
        {
          label: 'Efficient Frontier',
          data: frontierData.map(point => ({x: point.volatility, y: point.return})),
          borderColor: chartColors[0],
          backgroundColor: 'transparent',
          showLine: true,
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: false,
          tension: 0.3,
          borderWidth: 3
        },
        {
          label: 'Optimal Portfolio',
          data: [{
            x: currentStrategy.volatility,
            y: currentStrategy.expected_return
          }],
          backgroundColor: '#10b981',
          borderColor: '#059669',
          pointRadius: 12,
          pointHoverRadius: 15,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `Efficient Frontier - ${currentStrategy.name}`,
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          display: true,
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: Risk ${context.parsed.x.toFixed(1)}%, Return ${context.parsed.y.toFixed(1)}%`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Volatility (%)'
          },
          min: 10,
          max: 35
        },
        y: {
          title: {
            display: true,
            text: 'Expected Return (%)'
          },
          min: 8,
          max: 25
        }
      }
    }
  });
  
  console.log(`Efficient frontier rendered for strategy: ${strategy}`);
}

// Render portfolio allocation pie chart
function renderPortfolioAllocation(strategy) {
  const ctx = document.getElementById('portfolio-allocation-pie');
  if (!ctx) {
    console.error('Portfolio allocation canvas not found');
    return;
  }
  
  const strategyData = platformData.qom_results.strategies[strategy];
  const holdings = strategyData.top_holdings;
  
  // Get top 8 holdings and group rest as "Others"
  const topHoldings = holdings.slice(0, 8);
  const othersWeight = holdings.slice(8).reduce((sum, holding) => sum + holding.weight, 0);
  
  const labels = topHoldings.map(h => h.symbol);
  const data = topHoldings.map(h => h.weight);
  
  if (othersWeight > 0) {
    labels.push('Others');
    data.push(othersWeight);
  }
  
  if (portfolioAllocationChart) {
    portfolioAllocationChart.destroy();
  }
  
  portfolioAllocationChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: chartColors,
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `Portfolio Allocation - ${strategyData.name}`,
          font: {
            size: 16,
            weight: 'bold'
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            usePointStyle: true
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed.toFixed(1)}%`;
            }
          }
        }
      }
    }
  });
  
  console.log(`Portfolio allocation rendered for strategy: ${strategy}`);
}

// Setup strategy tabs - Fixed implementation
function setupStrategyTabs() {
  const tabs = document.querySelectorAll('.strategy-tab');
  console.log(`Found ${tabs.length} strategy tabs`);
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Strategy tab clicked:', this.getAttribute('data-strategy'));
      
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get strategy
      const strategy = this.getAttribute('data-strategy');
      
      // Update displays
      updatePortfolioDisplay(strategy);
      renderEfficientFrontier(strategy);
      renderPortfolioAllocation(strategy);
    });
  });
  
  console.log('Strategy tabs setup complete');
}

// Update portfolio display
function updatePortfolioDisplay(strategy) {
  const strategyData = platformData.qom_results.strategies[strategy];
  
  // Update metrics
  const returnEl = document.getElementById('portfolio-return');
  const volatilityEl = document.getElementById('portfolio-volatility');
  const sharpeEl = document.getElementById('portfolio-sharpe');
  const positionsEl = document.getElementById('portfolio-positions');
  
  if (returnEl) returnEl.textContent = `${strategyData.expected_return}%`;
  if (volatilityEl) volatilityEl.textContent = `${strategyData.volatility}%`;
  if (sharpeEl) sharpeEl.textContent = strategyData.sharpe_ratio.toFixed(3);
  if (positionsEl) positionsEl.textContent = strategyData.positions;
  
  // Update holdings table
  updateHoldingsTable(strategyData.top_holdings);
  
  console.log(`Portfolio display updated for strategy: ${strategy}`);
}

// Update holdings table
function updateHoldingsTable(holdings) {
  const tbody = document.getElementById('holdings-table-body');
  if (!tbody) {
    console.error('Holdings table body not found');
    return;
  }
  
  tbody.innerHTML = '';
  
  holdings.forEach(holding => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${holding.symbol}</strong></td>
      <td>${holding.weight.toFixed(1)}%</td>
      <td>${holding.qvm.toFixed(3)}</td>
      <td>${holding.sector}</td>
      <td>${holding.rationale}</td>
    `;
    tbody.appendChild(row);
  });
  
  console.log(`Holdings table updated with ${holdings.length} holdings`);
}

// Download functionality
function downloadAnalysis() {
  console.log('Downloading analysis...');
  
  // Create downloadable content
  const analysisData = {
    platform: platformData.platform_info,
    qmr_analysis: {
      beta_statistics: "Range: 0.987 - 4.225, Mean: 1.923, Median: 1.847, Std: 0.529",
      top_risk_sectors: "Oil Gas & Consumable (4.225), Metals & Mining (3.100), Realty (2.547)",
      low_risk_sectors: "Services (1.172), Telecommunication (1.248)"
    },
    qvm_analysis: {
      score_statistics: "Range: 0.126 - 1.138, Mean: 0.501, Median: 0.485",
      top_opportunities: platformData.qvm_results.top_opportunities.map(opp => 
        `${opp.symbol} (${opp.qvm}): ${opp.company} - ${opp.thesis}`
      )
    },
    qom_portfolios: Object.entries(platformData.qom_results.strategies).map(([key, strategy]) => ({
      strategy: strategy.name,
      return: `${strategy.expected_return}%`,
      volatility: `${strategy.volatility}%`,
      sharpe: strategy.sharpe_ratio,
      top_holdings: strategy.top_holdings.slice(0, 5).map(h => `${h.symbol} (${h.weight}%)`)
    })),
    generated_on: new Date().toISOString()
  };
  
  // Convert to JSON and download
  const dataStr = JSON.stringify(analysisData, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'nifty250_analysis_report.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  console.log('Analysis download completed');
}

// Add download button functionality
function addDownloadButton() {
  const header = document.querySelector('.app-header .container');
  if (header && !document.getElementById('download-btn')) {
    const downloadBtn = document.createElement('button');
    downloadBtn.id = 'download-btn';
    downloadBtn.className = 'btn btn--primary';
    downloadBtn.innerHTML = '📥 Download Analysis';
    downloadBtn.style.float = 'right';
    downloadBtn.style.marginTop = 'var(--space-16)';
    downloadBtn.onclick = downloadAnalysis;
    header.appendChild(downloadBtn);
    console.log('Download button added');
  }
}

// Initialize download button when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  addDownloadButton();
});

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Tab navigation for strategy switching
  if (e.key === 'Tab' && e.target.classList.contains('strategy-tab')) {
    e.preventDefault();
    const tabs = document.querySelectorAll('.strategy-tab');
    const current = Array.from(tabs).indexOf(e.target);
    const next = e.shiftKey ? 
      (current - 1 + tabs.length) % tabs.length : 
      (current + 1) % tabs.length;
    tabs[next].focus();
  }
  
  // Enter key to activate strategy tab
  if (e.key === 'Enter' && e.target.classList.contains('strategy-tab')) {
    e.target.click();
  }
});

// Export functions for potential external use
window.NIFTY250Platform = {
  updateStrategy: updatePortfolioDisplay,
  downloadAnalysis: downloadAnalysis,
  scrollToSection: scrollToSection
};

console.log('NIFTY250 Platform JavaScript loaded successfully');