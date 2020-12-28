import { Component } from 'react';

class Modal extends Component{
    state = {
        visibility : this.props.visibility,
        msg: this.props.msg
    }

    closeModal = ()=> {
        this.props.closeModal();
    }

    render(){
        var mystyle = {
            display: this.state.visibility ? 'block' : 'none',
            position: 'relative'
          };

        return(
            <div id="modal1" className="modal" style={mystyle}>
        <div className="modal-content">
            <h4>Alert</h4>
            <p>{this.state.msg}</p>
        </div>
        <div  className="modal-footer">
            <button  className="modal-close waves-effect waves-green btn-flat" onClick={() => this.closeModal()}>Ok</button>
         </div>
    </div>
        )
    }
}

export default  Modal;