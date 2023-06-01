import axios from 'axios';

jest.mock('axios');

describe('Index', () => {
  it('test axios', async () => {
    axios.get.mockResolvedValue({ data: { name: 'bulbasaur' } });
    console.log('testeee', process.env.TEST)

    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
  })
});