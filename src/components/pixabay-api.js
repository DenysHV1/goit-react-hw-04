import axios from 'axios';
const KEY = 'ayiTq2xqMmNRjaYVzGMsPHOmM11V9yKPIhrWLgg1ULI';
const BASE_URL = 'https://api.unsplash.com/search/photos/';

export function search(element = 'cat', page = 1) {
  const url = `${BASE_URL}?client_id=${KEY}&orientation=landscape&query=${element}&page=${page}&per_page=12`;
  return axios.get(url);
}

