import './App.css';
import Navbar from './Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Todobar from './Todobar';
import todoreducer from './todoreducer';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Todolist from './Todolist';
import { FaHeart } from 'react-icons/fa';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  const persistConfig={
    key:'root',
    storage
  }
  const persistedReducer=persistReducer(persistConfig,todoreducer);
  const store=createStore(persistedReducer)
  const persistor=persistStore(store)
  return (
    <div>
    <div className="App container">
      <Provider store={store}>
        <PersistGate persistor={persistor} >
      <Navbar/>
      <Todobar/>
      <Todolist/>
      </PersistGate>
      </Provider>
      </div>
      <h6 className="text-center">Made with <span className="Faheart"><FaHeart /></span> by Vijay</h6>
    </div>
  );
}

export default App;
