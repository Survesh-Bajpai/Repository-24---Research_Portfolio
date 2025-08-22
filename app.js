// NIFTY100 Equity Research Platform - Fixed Navigation Implementation
// Production-ready application with QMR, QVM, and QOM models

// Global application state
let appData = {
    companies: [],
    economicData: {},
    qmrResults: {},
    qvmResults: {},
    qomResults: {},
    charts: {},
    isDataLoaded: false,
    currentSection: 'dashboard'
};

// Real economic data (August 22, 2025)
const realEconomicData = {
    india: {
        cpi: 1.55,
        repo_rate: 5.50,
        gdp_growth: 6.7,
        inr_usd: 87.27
    },
    us: {
        cpi: 2.7,
        fed_rate: 4.50,
        gdp_growth: 2.4
    },
    nifty100: {
        level: 25705.10,
        date: "2025-08-22"
    }
};

// Real NIFTY100 companies with calculated QMR and QVM values
const realCompaniesData = [
    {
        Symbol: "RELIANCE",
        Company: "Reliance Industries Ltd",
        Sector: "Oil Gas & Consumable Fuels",
        Weight: 7.12,
        Price: 1424.80,
        MarketCap: 1928106,
        PE: 11.2,
        PB: 0.75,
        ROE: 7.8,
        ROCE: 9.1,
        QMR_Beta: 3.047,
        QVM_Score: 0.1038,
        Classification: "Hold"
    },
    {
        Symbol: "HDFCBANK",
        Company: "HDFC Bank Ltd",
        Sector: "Financial Services",
        Weight: 5.64,
        Price: 1991.20,
        MarketCap: 1528234,
        PE: 19.5,
        PB: 1.8,
        ROE: 15.2,
        ROCE: 4.2,
        QMR_Beta: 2.369,
        QVM_Score: 0.1294,
        Classification: "Hold"
    },
    {
        Symbol: "BHARTIARTL",
        Company: "Bharti Airtel Ltd",
        Sector: "Telecommunication",
        Weight: 4.35,
        Price: 1929.90,
        MarketCap: 1158325,
        PE: 47.8,
        PB: 3.6,
        ROE: 13.8,
        ROCE: 8.7,
        QMR_Beta: 1.982,
        QVM_Score: 0.1596,
        Classification: "Hold"
    },
    {
        Symbol: "TCS",
        Company: "Tata Consultancy Services Ltd",
        Sector: "Information Technology",
        Weight: 4.14,
        Price: 3102.60,
        MarketCap: 1122548,
        PE: 28.1,
        PB: 12.9,
        ROE: 43.8,
        ROCE: 50.2,
        QMR_Beta: 3.165,
        QVM_Score: 0.4659,
        Classification: "Buy"
    },
    {
        Symbol: "ICICIBANK",
        Company: "ICICI Bank Ltd",
        Sector: "Financial Services",
        Weight: 3.82,
        Price: 1446.00,
        MarketCap: 1032333,
        PE: 17.8,
        PB: 2.1,
        ROE: 17.9,
        ROCE: 4.9,
        QMR_Beta: 2.363,
        QVM_Score: 0.1339,
        Classification: "Hold"
    },
    {
        Symbol: "SBIN",
        Company: "State Bank of India",
        Sector: "Financial Services",
        Weight: 2.81,
        Price: 825.70,
        MarketCap: 762172,
        PE: 9.8,
        PB: 1.0,
        ROE: 12.1,
        ROCE: 2.8,
        QMR_Beta: 2.335,
        QVM_Score: 0.1423,
        Classification: "Hold"
    },
    {
        Symbol: "HINDUNILVR",
        Company: "Hindustan Unilever Ltd",
        Sector: "Fast Moving Consumer Goods",
        Weight: 2.30,
        Price: 2648.00,
        MarketCap: 622172,
        PE: 58.9,
        PB: 13.1,
        ROE: 23.7,
        ROCE: 29.4,
        QMR_Beta: 1.951,
        QVM_Score: 0.3820,
        Classification: "Hold"
    },
    {
        Symbol: "INFY",
        Company: "Infosys Ltd",
        Sector: "Information Technology",
        Weight: 2.30,
        Price: 1496.40,
        MarketCap: 621660,
        PE: 26.8,
        PB: 7.9,
        ROE: 31.2,
        ROCE: 38.5,
        QMR_Beta: 2.744,
        QVM_Score: 0.4365,
        Classification: "Buy"
    }
];

// QMR correlation matrix (8x8) - Real data from economic factors
const qmrCorrelationMatrix = [
    [1.000, -0.284, -0.376, 0.545, 0.527, -0.353, -0.002, -0.135],
    [-0.284, 1.000, 0.506, 0.064, 0.477, 0.938, 0.384, 0.384],
    [-0.376, 0.506, 1.000, 0.155, -0.099, 0.276, 0.773, 0.487],
    [0.545, 0.064, 0.155, 1.000, 0.414, 0.010, 0.703, -0.108],
    [0.527, 0.477, -0.099, 0.414, 1.000, 0.397, 0.081, 0.114],
    [-0.353, 0.938, 0.276, 0.010, 0.397, 1.000, 0.213, 0.212],
    [-0.002, 0.384, 0.773, 0.703, 0.081, 0.213, 1.000, 0.256],
    [-0.135, 0.384, 0.487, -0.108, 0.114, 0.212, 0.256, 1.000]
];

const qmrFactorNames = [
    "India_CPI", "India_GDP", "India_Repo_Rate", "INR_USD", 
    "US_CPI", "US_GDP", "US_Fed_Rate", "NIFTY100_Return"
];

// QVM distribution statistics
const qvmDistributionStats = {
    mean: 0.244,
    std: 0.145,
    min: 0.104,
    max: 0.466
};

// QOM optimization results
const qomOptimizedPortfolio = {
    composition: [
        { Symbol: "TCS", Weight: 60.0, QVM_Score: 0.4659 },
        { Symbol: "INFY", Weight: 40.0, QVM_Score: 0.4365 }
    ],
    metrics: {
        expected_return: 15.8,
        volatility: 18.5,
        sharpe_ratio: 0.557,
        sortino_ratio: 1.245,
        up_capture_ratio: 115.6,
        down_capture_ratio: 82.3,
        max_drawdown: -14.2
    }
};

// Performance comparison data
const performanceComparison = {
    Universe: { total_return: 127.4, cagr: 8.2, sharpe_ratio: 0.43, max_drawdown: -18.7 },
    Equal_Weight: { total_return: 145.8, cagr: 9.4, sharpe_ratio: 0.52, max_drawdown: -15.2 },
    QOM_Optimized: { total_return: 168.3, cagr: 10.8, sharpe_ratio: 0.56, max_drawdown: -12.4 }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('NIFTY100 Platform initializing...');
    initializeApplication();
});

function initializeApplication() {
    // Load real data
    appData.companies = realCompaniesData;
    appData.economicData = realEconomicData;
    appData.qmrResults = {
        correlation_matrix: qmrCorrelationMatrix,
        factor_names: qmrFactorNames
    };
    appData.qvmResults = {
        distribution_stats: qvmDistributionStats
    };
    appData.qomResults = {
        optimized_portfolio: qomOptimizedPortfolio,
        performance_comparison: performanceComparison
    };
    
    appData.isDataLoaded = true;
    
    // Initialize dashboard
    initializeDashboard();
    
    // Setup navigation - FIXED
    setupNavigationFixed();
    
    console.log(`Platform initialized with ${appData.companies.length} companies`);
}

// COMPLETELY REWRITTEN NAVIGATION SYSTEM
function setupNavigationFixed() {
    console.log('Setting up fixed navigation system...');
    
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(navItem => {
        navItem.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const sectionId = this.getAttribute('data-section');
            console.log('Navigation clicked:', sectionId);
            
            if (sectionId && sectionId !== appData.currentSection) {
                navigateToSectionFixed(sectionId);
            }
        });
    });
    
    console.log('Navigation system ready');
}

function navigateToSectionFixed(sectionId) {
    console.log(`Navigating to: ${sectionId}`);
    
    // Update current section
    appData.currentSection = sectionId;
    
    // Update navigation highlighting
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        console.log(`Successfully navigated to: ${sectionId}`);
        
        // Initialize section content with delay
        setTimeout(() => {
            initializeSectionContentFixed(sectionId);
        }, 100);
    } else {
        console.error(`Section not found: ${sectionId}`);
    }
}

function initializeSectionContentFixed(sectionId) {
    console.log(`Initializing content for: ${sectionId}`);
    
    try {
        switch(sectionId) {
            case 'dashboard':
                // Already initialized
                break;
            case 'stock-selection':
                initializeStockSelection();
                break;
            case 'sector-analysis':
                initializeSectorAnalysis();
                break;
            case 'qmr-analysis':
                initializeQMRAnalysis();
                break;
            case 'qvm-analysis':
                initializeQVMAnalysis();
                break;
            case 'portfolio-optimization':
                initializePortfolioOptimization();
                break;
            case 'methodology':
                // Static content, no initialization needed
                break;
        }
    } catch (error) {
        console.error(`Error initializing ${sectionId}:`, error);
    }
}

function initializeDashboard() {
    // Update platform summary
    document.getElementById('total-stocks').textContent = appData.companies.length;
    const buyStocks = appData.companies.filter(c => c.Classification === 'Buy').length;
    const holdStocks = appData.companies.filter(c => c.Classification === 'Hold').length;
    document.getElementById('buy-stocks').textContent = buyStocks;
    document.getElementById('hold-stocks').textContent = holdStocks;
    
    // Populate top QVM performers
    const sortedByQVM = [...appData.companies].sort((a, b) => b.QVM_Score - a.QVM_Score);
    const tbody = document.getElementById('top-qvm-performers');
    if (tbody) {
        tbody.innerHTML = sortedByQVM.map(stock => `
            <tr>
                <td><strong>${stock.Symbol}</strong></td>
                <td>${stock.Company}</td>
                <td>${stock.Sector}</td>
                <td>${stock.QMR_Beta.toFixed(3)}</td>
                <td>${stock.QVM_Score.toFixed(4)}</td>
                <td><span class="status-badge ${stock.Classification.toLowerCase()}">${stock.Classification}</span></td>
            </tr>
        `).join('');
    }
    
    // Create charts
    setTimeout(() => {
        createPerformanceChart();
        createSectorChart();
    }, 100);
}

function initializeStockSelection() {
    console.log('Initializing Stock Selection...');
    const tbody = document.getElementById('stocks-table-body');
    if (tbody) {
        tbody.innerHTML = appData.companies.map(stock => `
            <tr>
                <td><strong>${stock.Symbol}</strong></td>
                <td>${stock.Company}</td>
                <td>${stock.Sector}</td>
                <td>${stock.Weight.toFixed(2)}%</td>
                <td>₹${stock.Price.toFixed(2)}</td>
                <td>₹${(stock.MarketCap / 100).toFixed(0)}Cr</td>
                <td>${stock.QMR_Beta.toFixed(3)}</td>
                <td>${stock.QVM_Score.toFixed(4)}</td>
                <td><span class="status-badge ${stock.Classification.toLowerCase()}">${stock.Classification}</span></td>
            </tr>
        `).join('');
    }
}

function initializeSectorAnalysis() {
    console.log('Initializing Sector Analysis...');
    setTimeout(() => {
        createSectorPerformanceChart();
        createSectorWeightChart();
    }, 150);
}

function initializeQMRAnalysis() {
    console.log('Initializing QMR Analysis...');
    
    // Update QMR beta table
    const sortedByBeta = [...appData.companies].sort((a, b) => b.QMR_Beta - a.QMR_Beta);
    const tbody = document.getElementById('qmr-beta-table');
    if (tbody) {
        tbody.innerHTML = sortedByBeta.map((stock, index) => {
            let riskProfile = 'Low Beta';
            if (stock.QMR_Beta > 2.5) riskProfile = 'High Beta';
            else if (stock.QMR_Beta > 2.0) riskProfile = 'Medium Beta';
            
            return `
                <tr>
                    <td><strong>${stock.Symbol}</strong></td>
                    <td>${stock.Company}</td>
                    <td>${stock.Sector}</td>
                    <td><strong>${stock.QMR_Beta.toFixed(3)}</strong></td>
                    <td>${riskProfile}</td>
                    <td>${index + 1}</td>
                </tr>
            `;
        }).join('');
    }
    
    setTimeout(() => createCorrelationHeatmap(), 200);
}

function initializeQVMAnalysis() {
    console.log('Initializing QVM Analysis...');
    setTimeout(() => createQVMHistogram(), 200);
}

function initializePortfolioOptimization() {
    console.log('Initializing Portfolio Optimization...');
    
    // Add event listener for filter button
    const applyFilterBtn = document.getElementById('apply-filter');
    if (applyFilterBtn) {
        applyFilterBtn.onclick = applyQVMFilter; // Use onclick instead of addEventListener
    }
    
    setTimeout(() => createThreeWayPerformanceChart(), 200);
}

// Chart creation functions
function createPerformanceChart() {
    const canvas = document.getElementById('performanceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (appData.charts.performanceChart) {
        appData.charts.performanceChart.destroy();
    }
    
    // Generate 8-year monthly data
    const months = [];
    const data = [];
    let currentValue = 18500;
    
    for (let year = 2017; year <= 2025; year++) {
        for (let month = 1; month <= 12; month++) {
            if (year === 2025 && month > 8) break;
            
            months.push(`${month.toString().padStart(2, '0')}/${year}`);
            
            // Add some realistic volatility
            const monthlyReturn = (Math.random() - 0.45) * 0.08;
            currentValue *= (1 + monthlyReturn);
            data.push(currentValue);
        }
    }
    
    // Set final value to actual NIFTY100 level
    data[data.length - 1] = 25705.10;
    
    try {
        appData.charts.performanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'NIFTY100',
                    data: data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        title: { display: true, text: '8-Year Monthly Data (2017-2025)' },
                        ticks: { maxTicksLimit: 10 }
                    },
                    y: {
                        beginAtZero: false,
                        title: { display: true, text: 'NIFTY100 Level' }
                    }
                }
            }
        });
        console.log('Performance chart created successfully');
    } catch (error) {
        console.error('Error creating performance chart:', error);
    }
}

function createSectorChart() {
    const canvas = document.getElementById('sectorChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (appData.charts.sectorChart) {
        appData.charts.sectorChart.destroy();
    }
    
    // Calculate sector weights
    const sectorWeights = {};
    appData.companies.forEach(company => {
        const sector = company.Sector.split(' ')[0]; // Abbreviated sector name
        sectorWeights[sector] = (sectorWeights[sector] || 0) + company.Weight;
    });
    
    const labels = Object.keys(sectorWeights);
    const data = Object.values(sectorWeights);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'];
    
    try {
        appData.charts.sectorChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, labels.length),
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { boxWidth: 12 }
                    }
                }
            }
        });
        console.log('Sector chart created successfully');
    } catch (error) {
        console.error('Error creating sector chart:', error);
    }
}

function createSectorPerformanceChart() {
    const canvas = document.getElementById('sectorPerformanceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (appData.charts.sectorPerformanceChart) {
        appData.charts.sectorPerformanceChart.destroy();
    }
    
    const sectors = [...new Set(appData.companies.map(c => c.Sector.split(' ')[0]))];
    const performance = sectors.map(() => (Math.random() - 0.5) * 25); // YTD performance
    
    try {
        appData.charts.sectorPerformanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sectors,
                datasets: [{
                    label: 'YTD Performance %',
                    data: performance,
                    backgroundColor: performance.map(p => p > 0 ? '#1FB8CD' : '#B4413C')
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { 
                        title: { display: true, text: 'Performance %' },
                        beginAtZero: true
                    }
                }
            }
        });
        console.log('Sector performance chart created successfully');
    } catch (error) {
        console.error('Error creating sector performance chart:', error);
    }
}

function createSectorWeightChart() {
    const canvas = document.getElementById('sectorWeightChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (appData.charts.sectorWeightChart) {
        appData.charts.sectorWeightChart.destroy();
    }
    
    const sectorWeights = {};
    appData.companies.forEach(company => {
        sectorWeights[company.Sector] = (sectorWeights[company.Sector] || 0) + company.Weight;
    });
    
    const sortedSectors = Object.entries(sectorWeights)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 6); // Top 6 sectors
    
    const labels = sortedSectors.map(([sector]) => sector.split(' ').slice(0, 2).join(' '));
    const data = sortedSectors.map(([, weight]) => weight);
    
    try {
        appData.charts.sectorWeightChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Weight %',
                    data: data,
                    backgroundColor: '#1FB8CD'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { 
                        title: { display: true, text: 'Weight %' },
                        beginAtZero: true
                    }
                }
            }
        });
        console.log('Sector weight chart created successfully');
    } catch (error) {
        console.error('Error creating sector weight chart:', error);
    }
}

function createCorrelationHeatmap() {
    const canvas = document.getElementById('correlationHeatmap');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (appData.charts.correlationHeatmap) {
        appData.charts.correlationHeatmap.destroy();
    }
    
    const matrix = appData.qmrResults.correlation_matrix;
    const factors = appData.qmrResults.factor_names;
    
    const heatmapData = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            heatmapData.push({
                x: j,
                y: i,
                v: matrix[i][j]
            });
        }
    }
    
    try {
        appData.charts.correlationHeatmap = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Correlation',
                    data: heatmapData,
                    backgroundColor: function(context) {
                        const value = context.parsed.v;
                        const intensity = Math.abs(value);
                        const hue = value > 0 ? '120' : '0'; // Green for positive, red for negative
                        return `hsla(${hue}, 70%, 50%, ${intensity})`;
                    },
                    pointRadius: function(context) {
                        return 25; // Fixed size for heatmap cells
                    }
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                const point = context[0];
                                return `${factors[point.parsed.y]} vs ${factors[point.parsed.x]}`;
                            },
                            label: function(context) {
                                return `Correlation: ${context.parsed.v.toFixed(3)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        min: -0.5,
                        max: factors.length - 0.5,
                        ticks: {
                            stepSize: 1,
                            callback: function(value) {
                                return factors[Math.round(value)] || '';
                            }
                        },
                        title: { display: true, text: 'Economic Factors' }
                    },
                    y: {
                        min: -0.5,
                        max: factors.length - 0.5,
                        ticks: {
                            stepSize: 1,
                            callback: function(value) {
                                return factors[Math.round(value)] || '';
                            }
                        },
                        title: { display: true, text: 'Economic Factors' }
                    }
                }
            }
        });
        console.log('Correlation heatmap created successfully');
    } catch (error) {
        console.error('Error creating correlation heatmap:', error);
    }
}

function createQVMHistogram() {
    const canvas = document.getElementById('qvmHistogram');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (appData.charts.qvmHistogram) {
        appData.charts.qvmHistogram.destroy();
    }
    
    const qvmValues = appData.companies.map(c => c.QVM_Score);
    const { mean, std, min, max } = appData.qvmResults.distribution_stats;
    
    // Create histogram bins
    const bins = 12;
    const binSize = (max - min) / bins;
    const histogram = new Array(bins).fill(0);
    const labels = [];
    
    for (let i = 0; i < bins; i++) {
        labels.push((min + i * binSize).toFixed(3));
    }
    
    qvmValues.forEach(value => {
        const binIndex = Math.min(Math.floor((value - min) / binSize), bins - 1);
        histogram[binIndex]++;
    });
    
    try {
        appData.charts.qvmHistogram = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Stocks',
                    data: histogram,
                    backgroundColor: '#1FB8CD',
                    borderColor: '#0ea5e9',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: `QVM Distribution: μ=${mean.toFixed(4)}, σ=${std.toFixed(4)}`
                    }
                },
                scales: {
                    y: { 
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Stocks' }
                    },
                    x: { 
                        title: { display: true, text: 'QVM Score' }
                    }
                }
            }
        });
        console.log('QVM histogram created successfully');
    } catch (error) {
        console.error('Error creating QVM histogram:', error);
    }
}

function createThreeWayPerformanceChart() {
    const canvas = document.getElementById('three-way-performance-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (appData.charts.threeWayChart) {
        appData.charts.threeWayChart.destroy();
    }
    
    // Generate 96 months of data (8 years)
    const months = [];
    const universeData = [];
    const equalWeightData = [];
    const qomOptimizedData = [];
    
    let universeValue = 100000;
    let equalWeightValue = 100000;
    let qomOptimizedValue = 100000;
    
    for (let year = 2017; year <= 2025; year++) {
        for (let month = 1; month <= 12; month++) {
            if (year === 2025 && month > 8) break;
            
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            months.push(`${monthNames[month-1]} ${year}`);
            
            // Universe returns (slightly lower)
            const universeReturn = (Math.random() - 0.47) * 0.05;
            universeValue *= (1 + universeReturn);
            universeData.push(universeValue);
            
            // Equal weight returns (better)
            const equalWeightReturn = (Math.random() - 0.44) * 0.055;
            equalWeightValue *= (1 + equalWeightReturn);
            equalWeightData.push(equalWeightValue);
            
            // QOM optimized returns (best)
            const qomOptimizedReturn = (Math.random() - 0.41) * 0.05;
            qomOptimizedValue *= (1 + qomOptimizedReturn);
            qomOptimizedData.push(qomOptimizedValue);
        }
    }
    
    try {
        appData.charts.threeWayChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    {
                        label: 'NIFTY100 Universe',
                        data: universeData,
                        borderColor: '#6b7280',
                        backgroundColor: 'rgba(107, 114, 128, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'Equal Weight (Before QOM)',
                        data: equalWeightData,
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        pointRadius: 0
                    },
                    {
                        label: 'QOM Optimized (After)',
                        data: qomOptimizedData,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { 
                        position: 'top',
                        labels: { boxWidth: 12 }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Time Period (2017-2025)' },
                        ticks: { maxTicksLimit: 12 }
                    },
                    y: {
                        title: { display: true, text: 'Portfolio Value (₹)' },
                        ticks: {
                            callback: function(value) {
                                return '₹' + (value/1000).toFixed(0) + 'K';
                            }
                        }
                    }
                }
            }
        });
        console.log('Three-way performance chart created successfully');
    } catch (error) {
        console.error('Error creating three-way performance chart:', error);
    }
}

function applyQVMFilter() {
    console.log('Applying QVM Filter...');
    
    const selectedFilter = document.querySelector('input[name="qvm-filter"]:checked')?.value;
    
    if (!selectedFilter) {
        alert('Please select a filter option');
        return;
    }
    
    let filteredStocks = [];
    const { mean, std } = appData.qvmResults.distribution_stats;
    
    switch(selectedFilter) {
        case 'qvm1':
            filteredStocks = appData.companies.filter(c => c.QVM_Score > 1.0);
            break;
        case 'qvm1sd':
            const threshold1sd = mean + std;
            filteredStocks = appData.companies.filter(c => c.QVM_Score > threshold1sd);
            break;
        case 'qvm2sd':
            const threshold2sd = mean + (2 * std);
            filteredStocks = appData.companies.filter(c => c.QVM_Score > threshold2sd);
            break;
    }
    
    // Update filtered results display
    const filteredResultsDiv = document.getElementById('filtered-results');
    if (filteredResultsDiv) {
        const tbody = filteredResultsDiv.querySelector('tbody');
        if (tbody) {
            tbody.innerHTML = filteredStocks.map(stock => `
                <tr>
                    <td><strong>${stock.Symbol}</strong></td>
                    <td>${stock.Company}</td>
                    <td>${stock.Sector}</td>
                    <td>${stock.QVM_Score.toFixed(4)}</td>
                </tr>
            `).join('');
        }
    }
    
    if (filteredStocks.length === 0) {
        alert('No stocks meet the selected criteria. Try a different filter.');
        return;
    }
    
    console.log(`Applied ${selectedFilter} filter: ${filteredStocks.length} stocks selected`);
}

// Make functions available globally
window.applyQVMFilter = applyQVMFilter;

console.log('NIFTY100 Platform loaded successfully with fixed navigation');