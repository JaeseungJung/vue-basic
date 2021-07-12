const express = require("express");
const app = express();

//cors
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8080",
  credentials: true,
};

app.use(cors(corsOption));

const server = app.listen(3000, () => {
  console.log("Server stared. port 3000.");
});

const dbPool = require("mysql").createPool({
  database: "dev_class", // dev
  host: "183.99.251.75", // ip주소
  user: "root",
  password: "mariadb", // 비밀번호
});

app.get("/api/getUserList", async (req, res) => {
  const userList = { data: [{ name: "Jason Jung", gender: "Male" }] };
  res.send(userList);
});
