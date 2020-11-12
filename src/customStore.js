import reducer from './reducer';


function createStore( reducer ){ // in redux, createStore func get reducer as arg. 

    let state; // this should store internal state of app. 
    let listners = []; // when subscribe put the new listner to the listner array. 

    function subscribe(listner){ // lisner is a func. it is called inside here.
        listners.push(listners); // put new listner to listner list.
       listner(); // but this func should be called when state is changed. 
    }
    
    function getState(){
        return state; // we can access vars declared inside the main func. 
    }

    function dispatch(action){
       state =  reducer( state, action); 

       for( let i; i< listners.length; i++ ){ // notify the subscribers by lisners and execute it. 

        listners[i](); // 
       }
    }

   

    return {
        subscribe,
        getState, // now expose the function that returns the state. 
        dispatch
    };
}

export default createStore(reducer);