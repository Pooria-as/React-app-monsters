import React from "react"
import "./Card.styles.css"
class Card extends React.Component {
    
    render() { 
        return (
        <div className="card-container">
            <img src={`https://robohash.org/${this.props.monsters}?set=set1&size=150x150`} alt="" />
                <h2>
                    {this.props.monsters}
                 </h2>
        </div>
          );
    }
}
 
export default Card;