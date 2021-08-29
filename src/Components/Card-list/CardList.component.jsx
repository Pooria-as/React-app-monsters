
import {React,Component} from "react"
import "./CardList.styles.css"
import Card from "../Card/Card.component"

class CardList extends Component {
   
    render() { 
        return ( 
            <div className="card-list">
        {this.props.monsters.map(Monster=><Card key={Monster.id} monsters={Monster.name}></Card>) }
            
            </div>


         );
    }
}
 
export default CardList;