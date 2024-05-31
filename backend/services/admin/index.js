import { Router } from "express"
import Admin from "./model.js"
import bcrypt from "bcryptjs"
import { authMidd, generateJWT } from "../../auth/index.js"

export const adminRoute = Router();

adminRoute.get("/", async (req, res, next) => {
  try {
    let authors = await Admin.find()
    res.send(authors)
  } catch (error) {
    next(error)
  }
})

// creo l'account di amministrazione tramite Postman
adminRoute.post("/addNewAdmin", async (req, res, next) => {
  try {
    let admin = await Admin.create({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    })
    res.send(admin)
  } catch (error) {
    next(error)
  }
})

adminRoute.post("/login", async (req, res, next) => {
    try {
      let foundAdmin = await Admin.findOne({
        username: req.body.username,
      });
      if (foundAdmin) {
        const PasswordMatching = await bcrypt.compare(
          req.body.password,
          foundAdmin.password);
        if (PasswordMatching) {
          const token = await generateJWT({
            _id: foundAdmin._id,
          });
          res.send({token});
        } else {
          res.status(400).send("Password errata!")
        }
      } else {
        res.status(400).send("Utente non autorizzato!")
      };
    } catch (error) {
      next(error);
    }
  });