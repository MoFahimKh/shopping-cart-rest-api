const exress = require("express");
const router = exress.Router();
const Product = require("../models/product");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({ error: err });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Product created successfully",
        createProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log("from db", doc);
      if (doc) res.status(200).json({ doc });
      else res.status(404).json({ message: "Product not found" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: req.params.productId }, { $set: updateOps })
    .exec()
    .then((res) => res.status(200).json({ message: "Product updated" }))
    .catch(res.status(500).json({ error: err }));
});

router.delete("/:productId", (req, res, next) => {
  Product.remove({ _id: req.params.productId })
    .exec()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
