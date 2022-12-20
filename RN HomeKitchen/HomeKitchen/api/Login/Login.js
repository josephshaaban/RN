import axios from "axios";

const Login = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const LoginAccount = async (Data) => {
  console.log("proceesss", process.env.REACT_APP_API_URL);
  console.log("Data", Data);
  return await Login.post(
    "https://aliaji72.pythonanywhere.com/core/user/login",
    Data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
