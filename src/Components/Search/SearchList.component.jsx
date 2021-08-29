import React from "react"
import "./Search.styles.css"
const SearchList = ({placeholder,handleChange}) =>
(
<div>
<input type="text"
className="search"
 placeholder={placeholder} 
 onChange={handleChange} />
</div>

)

export default SearchList