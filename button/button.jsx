/**
 * Created by z on 2018/7/13.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {increaseAction} from './../reducer/reducer.js';

class ButtonComponent extends Component {
    render() {
        const {onIncreaseClick} = this.props;
        return (
            <div>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

// 传进来的方法
/*function mapStateToProps(state) {
    return {
        value: state.count
    }
}*/

// 传出去的方法
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

const Button = connect(
    //mapStateToProps,
    mapDispatchToProps
)(ButtonComponent);

export default Button;

