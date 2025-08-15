const express = require("express");
const router = express.Router();
const db = require("../db"); 

router.get("/counts", async (req, res) => {
  try {
    const [empResult] = await db.promise().query("SELECT COUNT(*) AS count FROM employee");
    const [deptResult] = await db.promise().query("SELECT COUNT(DISTINCT department) AS count FROM employee");

    res.json({
      employees: empResult[0].count,
      departments: deptResult[0].count,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching counts" });
  }
});

module.exports = router;