var SearchBar = (props) => {
  return (
    <div className="searchBar">
      <input type="text" onChange={props.textChange} placeholder="search"/>
    </div>
  )
}