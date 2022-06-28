import { compareSync } from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

import os from 'os';
os.hostname = () => 'localhost';

import nodemailer from "nodemailer";

console.log(process.env.EMAIL_HOST);

let transporter = nodemailer.createTransport({
    service:"gmail",
    host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure: false,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },
})


export default transporter;