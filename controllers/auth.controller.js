import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    const data = req.body;
    console.log(data);
    const password = await bcrypt.hash(data.password, 10);
    const user = new User({ ...data, password });
    await user.save();
    return res.json({ message: "signup Successfully" }).status(201);
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
        return res.status(401).json({ message: "Invalid Credentials" });

    const { password: userPassword, ...userData } = user;
    const accessToken = jwt.sign(userData._doc, process.env.JWT_SECRET);

    return res
        .json({ message: "login Successfully", data: { accessToken } })
        .status(201);
}