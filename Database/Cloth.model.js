const { default: mongoose } = require("mongoose");

const ClothSchema = mongoose.Schema({
    name: String,
    gender: String,
    size: String,
    description: String,
    release: Date,
    orginal_price: Number,
    current_price: Number,
    discount: Number,
    material: String,
    collar: String,
    sleeve: String,
    reviews: mongoose.Types.ObjectId,
    rating: Number,
})

const ClothModel = mongoose.model("clothInfo",ClothSchema);

module.exports = ClothModel;