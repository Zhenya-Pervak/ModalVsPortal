import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //create class property
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount(){
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className={`modalBackground ${this.props.modalState.ModalReducer ? 'displayModal' : 'displayNone'}`}>
                <div className="modalContent">
                    <div className="modalHeader">
                        <span className="close" onClick={this.props.modalActions}>&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    {this.props.children}
                </div>
            </div>
            , this.root);
    }
}
export default Modal;
