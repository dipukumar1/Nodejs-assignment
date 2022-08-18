const jwt = require("jsonwebtoken");

const authentication = async function (req, res, next) {
    try {
      let token = req.headers["x-Api-key"] || req.headers["x-api-key"];
      if (!token) {
        return res
          .status(404)
          .send({ status: false, message: "Warning Token Must Be present" });
      }
  
      let decodedToken = jwt.verify(token, "Secretkey");
    
      if (!decodedToken) {
        return res
          .status(401)
          .send({ status: false, message: "Warning unauthorized" });
      }
  
     

      next();
    } catch (err) {
      res.status(500).send({ status: false, message: err.message });
    }
  };
    module.exports= { authentication }