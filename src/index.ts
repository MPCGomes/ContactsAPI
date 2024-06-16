import express from "express";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contactRoutes";
import { setupSwagger } from "./utils/swagger";

const app = express();
const PORT = 5500;

app.use(bodyParser.json());

app.use("/contacts", contactRoutes);
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
