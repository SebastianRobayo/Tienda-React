exports.postLogin = (req, res) => {
  const username = req.body.user;
  const password = req.body.pass;

  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "usuario o contraseña incorresctos" });
        }
      }
    );
  });
};

// const routes = express.Router();

// routes.post("/register", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   req.getConnection((conn) => {
//     conn.query(
//       "INSERT INTO users (username, password) VALUES (?, ?)",
//       [username, password],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         }
//         if (result) {
//           res.send({ message: "registro creado satisfactoriamente" });
//         }
//       }
//     );
//   });
// });

// routes.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   req.getConnection((conn) => {
//     conn.query(
//       "SELECT * FROM users WHERE username = ? AND password = ?",
//       [username, password],
//       (err, result) => {
//         if (err) {
//           res.send({ err: err });
//         }
//         if (result.length > 0) {
//           res.send(result);
//         } else {
//           res.send({ message: "usuario o contraseña incorresctos" });
//         }
//       }
//     );
//   });
// });

// module.exports = routes;
