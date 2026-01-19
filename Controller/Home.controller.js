const ClothModel = require("../Database/Cloth.model");

const menSection = async (req, res) => {
  const Cloth = ClothModel.aggregate([
    {
      $match: { gender: "male" },
    }
  ]);
  res.send("Mens Section");
};

const womenSection = async (req, res) => {
    const Cloth = ClothModel.aggregate([
    {
      $match: { gender: "female" },
    }
  ]);
  res.send("Womens Section");
};

const otherSection = async (req, res) => {
  res.send("Others Section");
};

const heroSection = async (req, res) => {
  res.send("Hero Section");
};
module.exports = { menSection, womenSection, otherSection, heroSection };
