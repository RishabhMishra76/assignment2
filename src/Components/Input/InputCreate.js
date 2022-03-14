import React, { Component } from 'react'
import './Input.css'

export class InputCreate extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:'',
            lastName:'',
        }
    }

   changeFirst(fname){
        this.setState({firstName:fname,ownUpdate:true})
    }

    changeLast(lname){
        this.setState({lastName:lname,ownUpdate:true})
    }

    onAdd(){
        this.props.onAddName({firstName:this.state.firstName,lastName:this.state.lastName})
        this.setState({firstName:"",lastName:""})
    }

    render() {
        return (
            <div className="input_wrapper">
                <input value={this.state.firstName} onChange={(e)=>this.changeFirst(e.target.value)} className="input-box"/> 
                <input value={this.state.lastName} onChange={(e)=>this.changeLast(e.target.value)}  className="input-box"/> 
                <button disabled={!this.state.firstName || !this.state.lastName} className="button" onClick={()=>this.onAdd()}>Add</button>
            </div>
        );
    }
}

export default InputCreate;