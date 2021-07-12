const express = require("express");
const app = express();
const fs = require("fs");

//cors
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:8080",
  credentials: true,
};

app.use(cors(corsOption));

app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(3000, () => {
  console.log("Server stared. port 3000.");
});

const dbPool = require("mysql").createPool({
  database: "dev", // dev
  host: "localhost", // ip주소
  user: "root",
  password: "mariadb", // 비밀번호
});

app.get("/api/getUserList", async (req, res) => {
  const userList = { data: [{ name: "Jason Jung", gender: "Male" }] };
  res.send(userList);
});

app.get("/api/getList", async (req, res) => {
  try {
    res.send(await sys.db("list"));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

//////

app.get("/api/getList2", async (req, res) => {
  try {
    res.send(await sys.db("list2"));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

app.post("/api/:alias", async (req, res) => {
  try {
    res.send(await sys.db(req.params.alias, req.body.param, req.body.where));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const sys = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
