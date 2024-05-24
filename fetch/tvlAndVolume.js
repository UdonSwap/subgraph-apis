const fetchGraphQLData = require("./utils/fetchGraphQLData");

const getTvlAndVolume = async (network) => {
  const query = `
  query MyQuery {
    uniswapDayDatas{
      tvlUSD
      volumeUSD
      date
    }
  }
`;
  return fetchGraphQLData(network, query);
};

module.exports = {
  getTvlAndVolume,
};
