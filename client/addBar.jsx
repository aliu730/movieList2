var AddBar = (props) => {
  return ( 
    <span>
      <input onChange={props.textChangeAdd} type="text" placeholder="Add To List" />
      <button onClick={props.clicker} type="submit">Add</button>
    </span>
  )
}