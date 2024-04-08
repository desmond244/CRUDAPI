const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("./models/productmodel.js");
const { User } = require("./models/usermodel.js");
const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(201).json({ message: "Successfully Created", product });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "error.message",
    });
  }
});

app.get("/product/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      message: "Product  not found",
    });
  } else {
    res.status(200).json({
      message: "product  updated successfully",
      product,
    });
  }
});

app.put("/product/:id", async (req, res) => {
  let productExist = await Product.findById(req.params.id);
  if (!productExist) {
    res.status(404).json({
      message: "product not found",
    });
  } else {
    await productExist.updateOne(req.body);
    res.status(200).json({
      message: "product Updated  successfully",
      productExist,
    });
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    let deleteproduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "product  deleted successfully",
      deleteproduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    user.save();
    res.status(201).json({ message: "Successfully Created", user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "error.mesaage",
    });
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "users fetched successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
});

app.get("/user/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  } else {
    res.status(200).json({
      message: "user fetched successfully",
      user,
    });
  }
});

app.put("/user/:id", async (req, res) => {
  let userExist = await User.findById(req.params.id);
  if (!userExist) {
    res.status(404).json({
      message: "User not found",
    });
  } else {
    await userExist.updateOne(req.body);
    res.status(200).json({
      message: "user Updated  successfully",
      userExist,
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    product.save();
    res.status(201).json({ message: "Successfully Created", user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "error.mesaage",
    });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    let deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "user deleted successfully",
      deleteUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
  }
});

async function main() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/api");
    console.log("database connection established");
  } catch (error) {
    console.log(error);
  }
}

app.listen(7000, (req, res) => {
  try {
    console.log("NODE API IS RUNING ON PORT 7000");
    main();
  } catch (error) {
    console.log(error);
  }
});
