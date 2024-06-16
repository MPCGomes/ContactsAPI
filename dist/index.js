"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const swagger_1 = require("./utils/swagger");
const app = (0, express_1.default)();
const PORT = 5500;
mongoose_1.default
    .connect("mongodb://localhost:27017/contacts")
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Could not connect to MongoDB", err);
});
app.use(body_parser_1.default.json());
app.use("/contacts", contactRoutes_1.default);
(0, swagger_1.setupSwagger)(app);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
