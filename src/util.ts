import axios from "axios";
import { Translations } from "./interface";

const translate = async (text: string): Promise<Translations[]> => {
  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: {
      "api-version": "3.0",
      to: "ar,ti", // If the API supports array params directly
      textType: "plain",
      profanityAction: "NoAction",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_HOST,
    },
    data: [
      {
        Text: text,
      },
    ],
  };
  try {
    const response = await axios.request(options);
    console.log("wtf", response.data);
    return response.data[0]["translations"];
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error after logging
  }
};

export default translate;
