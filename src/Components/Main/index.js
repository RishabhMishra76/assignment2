import React, { Component } from 'react'
import InputCreate from '../Input/InputCreate';
import InputEdit from '../Input/InputEdit';
import Table from '../Table/Table';
import './Main.css'

class Main extends Component {
  
    constructor(props) {
        super(props);
        this.state={
          cardList:[]
        }  
    }
 
   
    onAddingName=(data)=>{
     let locArray = [...this.state.cardList]
     locArray.push(data)
     this.setState({cardList:locArray})
    }
 
    onEditName=(data,index)=>{
        let locArray = [...this.state.cardList]
        locArray.splice(index, 1, data)
        this.setState({cardList:locArray},()=>{
            console.log(this.state.cardList)
           })
    }

    onRemoveName=(index)=>{
        let locArray = [...this.state.cardList]
        locArray.splice(index, 1)
        this.setState({cardList:locArray},()=>{
            console.log(this.state.cardList)
           })
    }


  render() {
    return (
        <div className='main_wrapper'>
          <div className='left-align'>
            {
                this.state.cardList.length ? this.state.cardList.map((item,index)=>{
                  return(
                    <InputEdit key={index} onEditName={(data,index)=>this.onEditName(data,index)} onRemoveName={(index)=>this.onRemoveName(index)} firstName={item.firstName} lastName={item.lastName} index={index}/>
                  )
                }):<></>   
            }
            <InputCreate onAddName={(data)=>this.onAddingName(data)}/>
          </div>
          <Table cardList={this.state.cardList}/>
    </div>
    )
  }
}

export default Main