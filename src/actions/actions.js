import axios from 'axios';

export const SEARCH_FILM = 'SEARCH_FILM';
export const SELECT_FILM = 'SELECT_FILM';
export const CHANGE_TEXT = 'CHANGE_TEXT';

const apiKey = "AIzaSyD8Jb_7MER0e6WDoAAoGbzTQJQPAgMhU5k";



export function searchFilm(inputText){
  let text = inputText;
  let url = `https://www.googleapis.com/youtube/v3/search?type=video&maxResults=15&part=snippet&q=${text}&key=${apiKey}`;
  let films = [];
  const request = axios.get(url);
  
  return {
    type: SEARCH_FILM,
    payload: request
  }
}

export function changeInputText(text){

  return {
    type: CHANGE_TEXT,
    payload: text
  }
}


export function selectFilm(selectedFilm){
  return {
    type: SELECT_FILM,
    payload: selectedFilm
  }
}
