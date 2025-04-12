const express = require("express");
const router = express.Router();
// const requireAuth = require("../middleware/requireAuth");

// router.post("/", requireAuth, async (req, res) => {
  router.post("/", async (req, res) => {
  try {
    const { email, role } = req.body;
    console.log("Datos recibidos:", { email, role });

    // Aquí podrías guardar en MongoDB, etc.
    res.status(200).json({ message: "Usuario guardado correctamente" });
  } catch (err) {
    console.error("Error guardando usuario:", err);
    res.status(500).json({ error: "Error guardando usuario" });
  }
});

module.exports = router;

