
import * as actions from './actionTypes';

const { lastIndexOf } = require("lodash");

let lastId = 0;

// when we start application redux is calling the reducer and pass the initail state. 
export default function reducer(state = [], action){ // reducer is a pure function. 

    if( action.type === actions.BUG_ADDED){

        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    }
    if( action.type === actions.BUG_RESOLVED){

        return state.map( bug => bug.id !== action.payload.id ? bug : {...state, resolved: true});
    }
    else if( action.type === actions.BUG_REMOVED){

        return state.filter( bug => bug.id !== action.payload.id);
    }

    return state;
}