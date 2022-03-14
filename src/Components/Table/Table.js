import React, { Component } from 'react'
import './Table.css'

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state={
            cardList:[]
        }
    }

  render() {
      var locArray = this.props.cardList;
    return (
        <div className ="table">
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {locArray.map((item,index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                    </tr>
                        ))}
                </tbody>
            </table>
      </div>
    )
  }
}

export default Table;