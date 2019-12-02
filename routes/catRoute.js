"use strict";

const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const catController = require("../controllers/catController");

router.get("/", catController.cat_list_get);

router.get("/:id", catController.cat_get);

router.post("/", upload.single("cat"), catController.upload_cat);

router.put("/", catController.cat_update_get);

router.delete("/:id", catController.cat_delete);

module.exports = router;
