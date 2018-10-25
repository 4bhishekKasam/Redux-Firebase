import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';

import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import fbConfig from './config/fbConfig';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
    )
);

store.firebaseAuthIsReady.then(() => {

    ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>,
        document.getElementById('root'));

    serviceWorker.unregister();
})

