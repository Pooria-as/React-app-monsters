import React from "react"
import "./App.css"
import CardList from "./Components/Card-list/CardList.component"
import SearchList from "./Components/Search/SearchList.component"

class App extends React.Component{
constructor()
{
  
  super();
  // this.HandleChnage=this.HandleChnage.bind(this);
  this.state={
    Monsters:[],
    SearchFiled:[]
  }
}



componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(MonstersList=>this.setState({Monsters:MonstersList}))
}
HandleChnage =(e)=>
{
  this.setState({SearchFiled:e.target.value})
}

  render(){

    const Monsters=this.state.Monsters;
    const SearchFiled=this.state.SearchFiled;
    const Search=Monsters.filter(monster => monster.name.toLowerCase().includes(SearchFiled));
    return(
      <div className="App">
        <h1>
          Monsters
        </h1>
       <SearchList placeholder="Monsters Search" handleChange={this.HandleChnage} />
        <CardList monsters={Search}/>
      </div>

    );
  }
}


export default App;