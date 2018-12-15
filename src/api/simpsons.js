import axios from 'axios';

export default axios.create({
  baseURL: 'https://thesimpsonsquoteapi.glitch.me/quotes?count=6'
});
