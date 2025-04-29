// api.js - Usando CoinGecko API como ejemplo
async function getPrice(symbol) {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
    const data = await response.json();
    return data[symbol].usd;
}
