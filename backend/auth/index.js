import jwt from "jsonwebtoken"
import Admin from "../services/admin/model.js"
import { config } from "dotenv";

config();

export const generateJWT = (payload) => {
  return new Promise((res, rej) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          rej(err);
        } else {
          res(token);
        }
      }
    );
  });
};

export const verifyJWT = (token) => {
  return new Promise((res, rej) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
      if (err) {
        rej(err);
      } else {
        res(decoded);
      }
     }
    );
  });
};

export const authMidd = async (req, res, next) => {
  try {
    if (!req.headers.authorization){
      res.status(400).send("Effettua il login!");
    } else {
      const decoded = await verifyJWT(
        req.headers.authorization.replace("Bearer ", "")
      );
      if (decoded.exp) {
        delete decoded.iat;
        delete decoded.exp;
        //console.log("Token decodificato:", decoded);
        const me = await Admin.findOne({
          ...decoded,
        });
        //console.log("Utente trovato:", me);
        if (me) {
          req.user = me;
          next();
        } else {
          res.status(401).send("Utente non trovato!");
        }
      } else {
        res.status(401).send("Rieffettua il login!");
      }
    }
  } catch (err) {
      next(err);
  }
};