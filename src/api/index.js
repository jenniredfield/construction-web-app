import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const callService = async (url, method, data) => {
  try {
    const response = await axios({
      method,
      baseURL: BASE_URL,
      url: url,
      params: method === "GET" ? data || {} : {},
      data: method !== "GET" ? data || {} : {},
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 90000,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = (data) => callService("/register", "POST", data);

export const login = (data) => callService("/login", "POST", data);

export const logout = () => callService("/logout", "POST");
