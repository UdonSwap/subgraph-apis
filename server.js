const express = require("express");
const { getTopPools } = require("./fetch/topPools");
const { getTvlAndVolume } = require("./fetch/tvlAndVolume");
const { getTransactions } = require("./fetch/transactions");

const app = express();
const PORT = process.env.PORT || 3003;

app.get("/:network/getTopPools", async (req, res) => {
  const network = req.params.network; // Capture network from the URL

  try {
    const data = await getTopPools(network);
    res.json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "UDONSWAP: Failed to fetch historical values" });
  }
});
app.get("/:network/getTvlAndVolume", async (req, res) => {
  const network = req.params.network; // Capture network from the URL

  try {
    const data = await getTvlAndVolume(network);
    res.json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "UDONSWAP: Failed to fetch protocol' TVL and Volume" });
  }
});
app.get("/:network/getTransactions", async (req, res) => {
  const network = req.params.network;

  try {
    const data = await getTransactions(network);
    res.json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "UDONSWAP: Failed to fetch protocol' transactions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
