// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const User = require("../models/User")

// module.exports = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) return res.status(401).json({ error: "Token required" });

//   try {
//     req.user = jwt.verify(token, process.env.JWT_SECRET);

//     next();
//   } catch (err) {
//     res.status(403).json({ error: "You are not Authorized plese login " });
//   }
// };

const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ error: "Token required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { email: decoded.email } });
    if (!user) return res.status(401).json({ error: "Invalid user" });

    req.user = user; 
    next();
  } catch (err) {
    res.status(403).json({ error: "Unauthorized" });
  }
};

