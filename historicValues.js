const fetch = require("isomorphic-fetch");
const config = require("./config");

const getHistoricalValues = async (network = "testing") => {
  const url = config.networks[network];

  if (!url) {
    throw new Error(
      `UDONSWAP: Network configuration for '${network}' not found.`
    );
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query MyQuery {
            uniswapDayDatas(first: 100) {
              tvlUSD
              volumeUSD
              date
            }
          }
        `,
      }),
    });

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("UDONSWAP: Error fetching historical values:", error);
  }
};

module.exports = getHistoricalValues;
