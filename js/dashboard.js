// /js/dashboard.js

// Inicializa el gráfico de TradingView
const widget = new TradingView.widget({
    container_id: "tv-chart",
    autosize: true,
    symbol: "BTCUSD",  // Ejemplo de símbolo
    interval: "1h",    // Intervalo de tiempo
    theme: "light",    // Tema del gráfico
    locale: "es",      // Idioma
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    withdateranges: true,
    studies: ["RSI", "MACD"], // Ejemplo de indicadores
});

// Funciones de compra y venta de activos
function buyAsset() {
    alert("Compraste un activo");
    // Aquí puedes agregar la lógica para realizar una compra
}

function sellAsset() {
    alert("Vendiste un activo");
    // Aquí puedes agregar la lógica para realizar una venta
}
