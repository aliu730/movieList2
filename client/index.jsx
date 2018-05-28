class App extends React.Component { // renders everything.
  constructor(props) {
    super(props);
    this.state = {
      list: movies,
      tempList: movies,
      queryAdd: "",
    };
  }
  onTextChange (event) { //search box
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
  onTextChangeAdd (event) { //add text box
    this.setState({
      queryAdd: event.target.value,
    });
  }
  onClickAdd () { //add button for adding movies
    var title = {title: this.state.queryAdd, watched: "Not Watched"};
    var addList = this.state.list;
    addList.push(title); 
    this.setState({
      tempList: addList,
    });
    this.state.list = addList;
  }
  watchedList () {
    var tempList = this.state.list;
    var watchedList = [];
    for (var i = 0; i < tempList.length; i++) {
      if (tempList[i].watched === "Watched") {
        watchedList.push(tempList[i]);
      }
    }
    this.setState({
      tempList: watchedList,
    });
    this.state.tempList = this.state.list;
    console.log(this.state.tempList);
  }
  notWatchedList() {
    var tempList = this.state.list;
    var notWatchedList = [];
    for (var i = 0; i < tempList.length; i++) {
      if (tempList[i].watched === "Not Watched") {
        notWatchedList.push(tempList[i]);
      }
    }
    this.setState({
      tempList: notWatchedList,
    });
    this.state.tempList = this.state.list;
  }
  render() {
    return ( 
      <div>
        <h1>MovieList2s</h1>
        <SearchBar textChange={this.onTextChange.bind(this)}/> 
        <AddBar clicker={this.onClickAdd.bind(this)} textChangeAdd={this.onTextChangeAdd.bind(this)} />
        <div>
          <button onClick={this.watchedList.bind(this)} className="Watched" >Watched</button>
          <button onClick={this.notWatchedList.bind(this)} className="NotWatched">NotWatched</button>
        </div>
        <MovieList movies={this.state.tempList} />
      </div> 
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));