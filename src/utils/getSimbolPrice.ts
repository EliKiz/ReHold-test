export const getSymbolPrice = async (symbol: string) => {
  const url = `${process.env.BASE_URL}?symbol=${symbol}`;

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
