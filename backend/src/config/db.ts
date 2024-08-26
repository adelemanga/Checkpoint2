import { DataSource } from "typeorm";
import { Country } from "../entities/country";


export const dataSource = new DataSource({
  type: "sqlite",
  database: "countries.sqlite",
  synchronize: true,
  "logging": false,
  entities: [Country],
});
