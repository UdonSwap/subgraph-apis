const fetchGraphQLData = require("./utils/fetchGraphQLData");

const getTransactions = async (network) => {
  const query = `
  query MyQuery {
    transactions(first: 100, orderBy: timestamp, orderDirection: desc) {
      burns {
        amount0
        amount1
        amountUSD
        token0 {
          symbol
          id
        }
        token1 {
          symbol
          id
        }
        timestamp
        origin
        id
      }
      mints {
        amount0
        amount1
        amountUSD
        token0 {
          symbol
          id
        }
        token1 {
          symbol
          id
        }
        timestamp
        origin
        id
      }
      swaps {
        amount0
        amount1
        amountUSD
        token0 {
          symbol
          id
        }
        token1 {
          symbol
          id
        }
        timestamp
        origin
        id
      }
    }
  }
  `;
  return fetchGraphQLData(network, query);
};

module.exports = {
  getTransactions,
};
