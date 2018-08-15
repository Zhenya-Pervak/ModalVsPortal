import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import '../style/style.css';

import Modal from '../components/Modal'


import * as action from '../actions/index';

class App extends Component {
    render() {
        return (
            <div>
                <Modal modalState={this.props.modalState}
                        modalActions={this.props.modalActions}
                >
                    <h1>Portal</h1>
                </Modal>
                <div onClick={this.props.modalActions}>show modal</div>
            </div>


        );
    }
}

const mapStateToProps = (state) => ({
    modalState: state
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
