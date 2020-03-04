// We are importing our reducers and creating our store here
import { createStore } from 'redux';
import cleaningApp from './reducers';

const store = createStore(cleaningApp);

export default store;
