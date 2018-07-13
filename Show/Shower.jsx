/**
 * Created by z on 2018/7/13.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class ShowerComponent extends Component {
    constructor (props) {
        super(props);
    }
    /*mapStateToProps()方法执行完毕，其中return回来的props就会执行到下面的方法中，
    * 而构造中props不会执行
    *
    */
    componentWillReceiveProps (nextProps) {
        console.log('ShowerComponent  componentWillReceiveProps()..')
    }

    render() {
        const { value } = this.props
        return (
            <div>
                <span>{value}</span>
            </div>
        )
    }
}

//传进来
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// 传出去的方法
/*function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}*/

//connect()方法中两个参数必须都得传进去
const Shower = connect(
    mapStateToProps,
    null
)(ShowerComponent);

export default Shower;





