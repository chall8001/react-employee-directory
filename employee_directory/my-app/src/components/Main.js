import Table from './Table.js'
import React, { Component } from 'react'
import Searchbar from './Searchbar.js'
import api from '../utils/api.js'

export default class Main extends Component {
    constructor(props) {
        
        super(props)

        this.handleSearchChange = this.handleSearchChange.bind(this);
        
    }

state = {

users: [{}], 
filteredUsers: [{}], 
order: "descend"

}

handleSearchChange(event){
    let filter = event.target.value
    console.log(this)
    let filterdlist = this.state.users.filter(item => {
    let values = Object.values(item).join("").toLowerCase()

    return values.indexOf(filter.toLowerCase()) !== -1
    }) 
this.setState({filteredUsers: filterdlist})
    }

componentDidMount = () => {
    api.getUsers().then(results => {
        this.setState({
users: results.data.results,
filteredUsers: results.data.results, 

        })
    })
}

    render() {
        return (
            <div>
                <Searchbar handleSearchChange={this.handleSearchChange}/>
                <Table users={this.state.filteredUsers}/>
            </div>
        )
    }
}
