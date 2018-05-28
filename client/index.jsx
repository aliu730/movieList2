class App extends React.Component { // renders everything.
  constructor(props) {
    super(props);
    this.state = {
      list: movies,
      tempList: movies,
      queryAdd: "",
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
  onTextChangeAdd (event) {
    this.setState({
      queryAdd: event.target.value,
    });
  }
  onClickAdd () {
    var title = {title: this.state.queryAdd};
    var addList = this.state.list;
    addList.push(title); 
    this.setState({
      tempList: addList,
    });
        // console.log(this.state.tempList);
  }
  render() {
    return ( 
      <div>
        <h1>MovieList2s</h1>
        <SearchBar textChange={this.onTextChange.bind(this)}/> 
        <AddBar clicker={this.onClickAdd.bind(this)} textChangeAdd={this.onTextChangeAdd.bind(this)} />
        <MovieList movies={this.state.tempList} />
      </div> 
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));