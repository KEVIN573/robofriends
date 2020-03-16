import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filteredaRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        });

        return(
            <React.Fragment>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <div className='cards-container'>
                    <CardList robots = {filteredaRobots}/>
                </div>
            </React.Fragment>
        );
    }
}
export default App;
