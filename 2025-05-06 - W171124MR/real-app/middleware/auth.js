const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["x-auth-token"];
  if (!token) {
    res.status(400).send("Access denied. No token provided.");
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    req.user = payload;
    next();
  } catch {
    res.status(400).send("Invalid token.");
  }
};
