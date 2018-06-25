import { BASE_URL } from './constants';

export const buildSearchURI = ({ language, stars }) => {
  const encodedURI = window.encodeURI(
    `${BASE_URL}stars:>${stars}+language:${language}&sort=created&order=desc&type=Repositories`
  );

  return encodedURI;
}
