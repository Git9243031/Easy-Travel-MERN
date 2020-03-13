const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");
const products = require("../mockData");
// const { auth } = require("../middleware/auth");

//=================================
//             Product
//=================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png" || ext !== ".mp4") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  }
});

const upload = multer({ storage: storage }).single("file");

router.post("/uploadImage", (req, res) => {
  console.log("uploading...");
  upload(req, res, err => {
    if (err) return res.json({ success: false, err });
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename
    });
  });
});

router.post("/", (req, res) => {
console.log("tut: " , req.body)
  const {
    title,
    description,
    price,
    images,
    continent,
    stars,
    features
  } = req.body;

  const newProduct = new Product({
    title,
    description,
    continent,
    price,
    images,
    stars,
    features
  });

  newProduct
    .save()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get("/", (req, res) => {
  res.status(400).send(products);
});

module.exports = router;
