import { FETCH_WEATHER } from '../actions/index';

//Middleware unwraps Promise object and resolves our request
//Shouldn't manipulate state directly | Should always return a new instance of state
export default function(state = [], action) {
  switch(action.type) {

    case FETCH_WEATHER:
      // return state.push( action.payload.data );
      // return state.concat([action.payload.data]); // creates a new array that contains old + new
      return [ action.payload.data, ...state] //ES6 syntax | create new array with data + flatten out state array
  }

  return state;
}
