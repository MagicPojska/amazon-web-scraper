import express from "express";
import productRoutes from "./routes/products.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Amazon Scraper API");
});

app.use("/products", productRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
