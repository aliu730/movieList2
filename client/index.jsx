class App extends React.Component { // renders everything.
  constructor(props) {
    super(props);
    this.state = {
      list: movies,
      tempList: movies,
      query: "",
    };
  }
  onTextChange (event) {
    var newList = [];
    for (var i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].title.includes(event.target.value)) {
        newList.push(this.state.list[i]);
      }
    }
    this.setState({
      tempList: newList,
    });
  }
  render() {
    return ( 
      <div>
        <h1>MovieList2s</h1>
        <SearchBar textChange={this.onTextChange.bind(this)}/> 
        <MovieList movies={this.state.tempList}/>
        
      </div> 
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));