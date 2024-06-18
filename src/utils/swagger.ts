import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import { Express } from "express";

const swaggerDocument = yaml.load("./swagger.yaml");

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
