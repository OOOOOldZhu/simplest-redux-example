import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './reducer/reducer.js';
import ButtonComponent from './button/button.jsx';
import ShowerComponent from './Show/Shower.jsx';

// React component
class AppComponent extends Component {
    render() {
        return (
            <div>
                <div>提示</div>
                <ShowerComponent/>
                <ButtonComponent/>
            </div>
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById('root')
)
