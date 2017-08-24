import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import store from './store';

import App from './components/AppContainer';
import Example from './components/Example/Example';

const renderStore = () => {
    render(
        <div className="root">
            <Provider store={store}>
                <Router history={ hashHistory }
                        routes={[
                            {path: '/', component: Example},
                            {path: '/simple', component: Example},
                            {path: '/drop', component: Example}
                            ]}/>
            </Provider>
        </div>
        ,
      document.getElementById('root')
    );
}

renderStore();
