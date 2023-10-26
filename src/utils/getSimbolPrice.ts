const getSymbolPrice = async (symbol: string) => {
  const url = `https://api.bybit.com/v2/public/tickers?symbol=${symbol}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    const ticker = data.result[0];
    return ticker.last_price;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default getSymbolPrice