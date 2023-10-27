export const getSymbolPrice = async (symbol: string) => {
  
  const BASE_URL = 'https://api.bybit.com/v2/public/tickers'
  const url = `${BASE_URL}?symbol=${symbol}`;
  

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    const ticker = data.result[0];
    console.log('ticker', ticker)
    return ticker.last_price;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
