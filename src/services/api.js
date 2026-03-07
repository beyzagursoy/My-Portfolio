import axios from "axios";

export const sendData = async (data) => {
  try {
    const response = await axios.post(
      "https://reqres.in/api/workintech",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};