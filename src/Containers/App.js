import React, {Component} from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
    
class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event)  => {
        this.setState( { searchfield: event.target.value } )
       
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robots => this.setState( { robots: robots}))
            //.then(robots => {})
    }
    render () {
        const { robots, searchfield } = this.state; 
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
        })
        //console.log(filterRobots)
        return !robots.length ? 
            <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>                   
                </div>            
            );
        }      
    }   

    
export default App;
