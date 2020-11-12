const { lastIndexOf } = require("lodash");

let lastId = 0;

// when we start application redux is calling the reducer and pass the initail state. 
function reducer(state = [], action){ // reducer is a pure function. 

    if( action.type === 'bugAdded'){

        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    }
    else if( action.type === 'bugRemoved'){

        return state.filter( bug => bug.id !== action.payload.id);
    }
    else if( action.type === 'bugResolved'){

        return state.filter( bug => bug.id !== action.payload.id ? bug : {...state, resolved: true});
    }
    return state;
}

export default reducer;