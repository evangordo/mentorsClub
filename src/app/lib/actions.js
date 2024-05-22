"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleGoogleLogout = async () => {
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
