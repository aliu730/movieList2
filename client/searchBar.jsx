var SearchBar = (props) => {
  return (
    <div className="searchBar">
      <input type="text" onChange={props.textChange} />
      <button type="submit">Add</button>
    </div>
  )
}