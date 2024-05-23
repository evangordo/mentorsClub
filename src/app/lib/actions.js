"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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
      img,
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
  const { email, career, about, img, available } = Object.fromEntries(formData);

  try {
    connectToDb();

    const user = await User.findOne({ email });
    if (!user) {
      return { error: "User not found" };
    }

    user.career = career;
    user.about = about;
    user.img = img;
    user.available = available === "true";

    await user.save();
    console.log("User profile updated");

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
