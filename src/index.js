import axios from "axios";

export const handler = async (event, context) => {
  console.log("test", process.env.TEST)
  await axios.get("https://pokeapi.co/api/v2/pokemon/1")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world!",
    }),
  }
};