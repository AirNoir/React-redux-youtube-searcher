import {SELECT_FILM,SEARCH_FILM,CHANGE_TEXT} from 'actions/actions'

const initState = {
  films: [],
  selectedFilm: null,
  inputText: ''
}

export default function FilmReducer(state=initState,action){

  switch (action.type) {
    case SEARCH_FILM:

      return Object.assign({},state,{
        films: action.payload.data.items.map(
        function(film){
          let id = film.id.videoId;
          return {
                  id: id,
                  name: film.snippet.title,
                  url: `https://www.youtube.com/embed/${id}`
                }
        })
      });
      break;
    case  SELECT_FILM:
        return Object.assign({},state,{
        selectedFilm: action.payload
      });

    case CHANGE_TEXT:
      return Object.assign({},state,{
        inputText: action.payload
      })
    default:
  }

  return state;
}
