import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutesV1";
import { setupSwagger } from "./utils/swagger";

const app = express();
const PORT = 5500;

mongoose
  .connect("mongodb://localhost:27017/contacts")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });

app.use(bodyParser.json());

app.use("/api/v1/contacts", contactRoutes);
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
