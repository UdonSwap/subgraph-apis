const fetchGraphQLData = require("./utils/fetchGraphQLData");

const getTopPools = async (network) => {
  const query = `
  query topPools {
    pools(orderBy: txCount, orderDirection: desc) {
      id
      totalValueLockedUSD
      txCount
      feeTier
      token0 {
        id
        name
        symbol
        decimals
      }
      token1 {
        id
        name
        symbol
        decimals
      }
      poolDayData(first: 7, orderBy: date, orderDirection: desc) {
        date
        liquidity
        volumeUSD
        feesUSD
      }
    }
  }
  `;
  return fetchGraphQLData(network, query);
};

module.exports = {
  getTopPools,
};
