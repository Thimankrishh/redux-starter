import * as actions from './actionTypes';


// export function bugAdded( description ){

//     return {
//         type: actions.BUG_ADDED,
//         payload:{
//             description: "bug1"
//         }
//     }
// }

export function bugResolved( id ){

    return {
        type: actions.BUG_RESOLVED,
        payload:{
            id: id
        }
    }
}

export const bugAdded = ( description) => ( { // to return an obj we need to wrap it with (). 
    type: actions.BUG_ADDED,
    payload:{
        description: description
    }
})