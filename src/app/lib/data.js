import { User } from "./models";
import { connectToDb } from "./utils";

export const getAllMentors = async () => {
  try {
    connectToDb();
    const mentors = await User.find({ role: "mentor" });
    return mentors;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getMentor = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
