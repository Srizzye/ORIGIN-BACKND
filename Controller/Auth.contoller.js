const { hash, compare } = require("bcryptjs");
const JWT = require("jsonwebtoken");
const UserDetails = require("../Database/UserDetails.model.js");
const UserConf = require("../Confidentials/UserConf.js");

const RegisterController = async (req, res) => {
  console.log("Register POST HIT");
  try {
    const pass = req.body.password;
    const hashpass = await hash(pass, 12);
    const conf = await UserConf.create({ password: hashpass });
    const user = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      pass_id: conf._id,
      created_on: new Date(),
    };
    await UserDetails.create(user);
    const Access_Token = await GenerateAccessToken(user);
    if (Access_Token) {
      res.cookie("accessToken", Access_Token, {
        httpOnly: true,
      });
    }
    console.log("Details Added");
    res.send("Thanks For Registering --- ");
  } catch (error) {
    console.log("Error In Register Post :", error.message);
    res.send("Error");
  }
};

const GenerateAccessToken = async (payload) => {
  try {
    const token = JWT.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });
    console.log("Token Generated");
    return token;
  } catch (error) {
    console.log(`Error In Generating Token : ${error}`);
  }
};

const LoginController = async (req, res) => {
  console.log("Login HIT");
  try {
    const email = req.body.email;
    const mobile = req.body.mobile;
    const password = req.body.password;
    let user;
    if (email) {
      user = await UserDetails.findOne({ email: email });
    } else if (mobile) {
      user = await UserDetails.findOne({ mobile: mobile });
    }
    if (!user) {
      res.status(401).send("No User Exists");
    }
    const userC = await UserConf.findById(user.pass_id);
    if (!compare(password, userC.password)) {
      res.send("Password Incorrect");
    }
    const payload = {
      mobile: req.body.mobile,
      email: req.body.email,
      pass_id: user._id,
    };
    const Access_Token = await GenerateAccessToken(payload);
    if (Access_Token) {
      res.cookie("accessToken", Access_Token);
    }
    res.status(200).send(["Logged In Successfully"]);
  } catch (error) {
    console.log("Error In Logging", error);
  }
};

const Authenticate_Token = async (res, req, next) => {
  const headers = req.headers["authorization"];
  const token = headers.split(" ")[1];
  try {
    var decoded = JWT.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.send("Token Expired");
    }
  }
  req.useremail = decoded.email;
  console.log("Token Authenticated");
  next();
};

module.exports = { RegisterController, LoginController, Authenticate_Token };
