const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kumarpurav59:puru__123@cluster0.f5dpn.mongodb.net/BagWebsite");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    mobile: String,
    productId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    inStock: Boolean,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    Product,
    User
};
