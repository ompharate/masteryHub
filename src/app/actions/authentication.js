"use server";
const { signOut } = require("@/auth");

export const logoutUser = async () => {
  await signOut({ redirectTo: "/login" });
};
