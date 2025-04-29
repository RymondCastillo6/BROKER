function createChart(symbol) {
    if (document.getElementById("tradingview-chart")) {
        new TradingView.widget({
            "container_id": "tradingview-chart", // id del div donde se va a cargar el gráfico
            "autosize": true,
            "symbol": symbol,
            "interval": "1D", // Puedes cambiar el intervalo si lo deseas
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "es",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_top_toolbar": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "details": true,
            "studies": ["MACD", "RSI"]
        });
    }
}

// Llamamos a la función para crear el gráfico inicial con el activo por defecto (Google)
window.onload = function() {
    createChart('NASDAQ:GOOG'); // Activo por defecto Google
};

// Actualizar el gráfico cuando el usuario seleccione un activo diferente
function updateChart() {
    const selectedAsset = document.getElementById('asset-select').value;
    createChart(selectedAsset);
}
