import axios from "axios";

export const login = async ({ email, password }) => {
  const URL = `${process.env.EXPO_PUBLIC_BASE_URL}/users/login`;

  try {
    const res = await axios.post(
      URL,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("User does not exists with this email.");
    }
  } catch (err) {
    throw err;
  }
};
