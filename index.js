import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import usersRouter from './routes/users.js';
import mainRouter from './routes/urls.js'


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", function (request, response) {
  response.send("API working Good");
});


const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("MongoDb connected successfully");

app.use('/users',usersRouter) ;

app.use('/',mainRouter) ;

app.listen(PORT, () => console.log(`The server started in: ${PORT}`));

export { client };