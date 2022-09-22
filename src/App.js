import React, { Component } from 'react'
import Chuck from './Chuck.webp'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      categories: [],
      jokes: {},
    }
  }

  componentDidMount() {
    fetch(`https://api.chucknorris.io/jokes/categories`)
    .then((response) => response.json())
    .then((data) => this.setState({ categories: data }));
  }
handleChange=(e)=>{
  const caty=e.target.value;
  const url=`https://api.chucknorris.io/jokes/random?category=`+ caty ;
  fetch(url)
  .then((response) => response.json())
  .then((data) => this.setState({ jokes: data }));
  
}

  render() {
    return (
      <div className='main-container'>
        <h1 className='headline'>Chuck Norris Jokes</h1>
        <h4><strong>Select Joke Topic..</strong></h4> 
        <select onChange={this.handleChange}>
       
          <option>Select Joke by Category</option>
          {this.state.categories.map((catagory) => <option>{catagory}</option>)}


        </select>
        <div className='subTitle'>
<img src={Chuck} alt="chuck norris" />
<h1 className='main-content'>{this.state.jokes.value}</h1>
        </div>
      </div>
    )
  }
}
export default App