// config.js
const config = {
  networks: {
    local: "http://localhost:4000",
    production:
      "https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis?source=uniswap",
    testing:
      "https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis?source=uniswap",
  },
};

module.exports = config;
