import express from "express";
import morgan from "morgan";
import { getEmployees, insertEmployee } from "./controllers.js";

const app = express();
app.use(morgan("dev"));

app.use(express.json());

app.get("/employees", async (req, res) => {
  res.send(await getEmployees());
});

app.post("/employees", async (req, res) => {
  res.send(await insertEmployee(req.body));
});

app.listen(3000, () => console.log(`listening on port ${3000}`));

// // Using placeholders
// try {
//   const [results] = await connection.query(
//     "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
//     ["Page", 45]
//   );

//   console.log(results);
// } catch (err) {
//   console.log(err);
// }
