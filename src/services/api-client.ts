import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '320c0b1bc06f4589a7640762170e4e85',
  },
});
