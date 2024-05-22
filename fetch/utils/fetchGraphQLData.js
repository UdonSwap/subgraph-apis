const fetch = require("isomorphic-fetch");
const config = require("../../config");

const fetchGraphQLData = async (network, query) => {
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
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(
        `UDONSWAP: Network request failed with status ${response.status}`
      );
    }

    const result = await response.json();
    if (result.errors) {
      throw new Error(
        `UDONSWAP: GraphQL query failed with errors: ${JSON.stringify(
          result.errors
        )}`
      );
    }

    return result.data;
  } catch (error) {
    console.error("UDONSWAP: Error fetching data:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

module.exports = fetchGraphQLData;
