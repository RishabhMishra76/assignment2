import React, { Component } from 'react';
import './Input.css'

class InputEdit extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            ownUpdate:false,
            textChange: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.ownUpdate) {
            return {
                ownUpdate: false
            };
        } else if (props.firstName !== state.firstName || props.lastName !== state.lastName) {
            return {
                firstName: props.firstName,lastName: props.lastName
            };
        
        }
        return null;
    }
 
    changeFirst(fname){
        if(fname !== this.props.firstName)
        {
            this.setState({textChange:true})
        }
        else{
            this.setState({textChange:false})
        }
        this.setState({firstName:fname,ownUpdate:true})
    }

    changeLast(lname){
        if(lname !== this.props.lastName)
        {
            this.setState({textChange:true})
        }
        else{
            this.setState({textChange:false})
        }
        this.setState({lastName:lname,ownUpdate:true})
    }

    onEdit(){
        this.props.onEditName({firstName:this.state.firstName,lastName:this.state.lastName},this.props.index)
        this.setState({textChange:false})
    }

    onRemove(){
        this.props.onRemoveName(this.props.index)
    }

    
    render() {
        return (
            <div className="input_wrapper">
                <input value={this.state.firstName} onChange={(e)=>this.changeFirst(e.target.value)} className="input-box"/> 
                <input value={this.state.lastName} onChange={(e)=>this.changeLast(e.target.value)}  className="input-box"/> 
                <button disabled={!this.state.textChange}  className="button" onClick={()=>this.onEdit()}>Edit</button>
                <button className="button" onClick={()=>this.onRemove()}>Remove</button>
            </div>
        );
    }
}

export default InputEdit;
