const express = require("express");
const getHistoricalValues = require("./historicValues");

const app = express();
const PORT = process.env.PORT || 3003;

app.get("/historicalValue", async (req, res) => {
  try {
    const data = await getHistoricalValues();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "UDONSWAP: Failed to fetch historical values" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
