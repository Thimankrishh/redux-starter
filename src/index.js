import store from './store';
import { bugAdded, bugResolved } from './actions';

// const unsubscribe = store.subscribe( () => { // pass a function and this called evrytime the state of store gets change. 
//     console.log("Subscriber called..", store.getState()); // this is something we do in UI layer. 
// });

store.dispatch(bugAdded("Bug 1")); // call the action. 
store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload:{
//         id: 1
//     }
// });

console.log(store.getState()); // get the current state of the store. 