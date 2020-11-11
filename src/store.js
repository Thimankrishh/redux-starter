import { createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer); // pass the reducer to the createStore function. 

export default store;