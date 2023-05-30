import axios from "axios";

export const handler = async (event, context) => {
  console.log("test", process.env.TEST)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world!",
    }),
  }
};