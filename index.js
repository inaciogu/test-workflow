import axios from "axios";

const start = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
  console.log(process.env.TEST)
  return data
};

start()