"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import s3Client from "./awsConfig";
import bcrypt from "bcryptjs";
import { Upload } from "@aws-sdk/lib-storage";
import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";
import EmailTemplate from "@/email/welcome";

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { firstName, lastName, email, password, img, role } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const user = await User.findOne({ email });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      role,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const updateUserProfile = async (previousState, formData) => {
  const { email, career, about, img, available, industry, mentoringTopics } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const user = await User.findOne({ email });
    if (!user) {
      return { error: "User not found" };
    }

    let img = user.img;

    if (formData.get("img")) {
      const file = formData.get("img");
      const fileName = `${uuidv4()}-${file.name}`;

      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: file,
        ContentType: file.type,
      };

      const parallelUploads3 = new Upload({
        client: s3Client,
        params: uploadParams,
      });

      const uploadResult = await parallelUploads3.done();
      img = uploadResult.Location;
    }
    user.career = career;
    user.about = about;
    user.img = img;

    user.industry = industry;
    user.mentoringTopics = mentoringTopics;
    user.available = available === "true";

    await user.save();
    console.log("Mentor profile updated");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    console.log("Attempting to sign in:", email);
    await signIn("credentials", { email, password });
    return { success: true };
  } catch (err) {
    console.log("Error during signIn:", err);
    if (err.name === "CredentialsSignin") {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const sendEmail = async (prevState, formData) => {
  const name = formData.get("firstName");
  const email = formData.get("email");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Support <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Welcome to Mentors Club",
      react: EmailTemplate({ name, email }),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: error.message,
      success: false,
    };
  }
};

export const UpdateMenteeProfile = async (previousState, formData) => {
  const { email, goals, img, industry, career, about } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const user = await User.findOne({ email });
    if (!user) {
      return { error: "User not found" };
    }

    let img = user.img;

    if (formData.get("img")) {
      const file = formData.get("img");
      const fileName = `${uuidv4()}-${file.name}`;

      const uploadParams = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: file,
        ContentType: file.type,
      };

      const parallelUploads3 = new Upload({
        client: s3Client,
        params: uploadParams,
      });

      const uploadResult = await parallelUploads3.done();
      img = uploadResult.Location;
    }
    user.goals = goals;
    user.about = about;
    user.img = img;
    user.career = career;
    user.industry = industry;

    await user.save();
    console.log("Mentee profile updated");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
