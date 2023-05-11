export const getMarketData = async () => {
  try {
    const res = await fetch(`https://localhost:7245/Marketplace`);

    if (!res.ok) {
      throw new Error(await res.json());
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
