import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import passport from "passport";

const router = Router();

router.get("/login", (req, res) => res.render("login"));
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/products",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/register", (req, res) => res.render("register"));
router.post("/register", register);
router.post("/logout", logout);

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/products");
  }
);

export default router;
