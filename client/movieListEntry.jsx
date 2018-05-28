class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: "Not Watched",
    }
  }
  changeWatched () {
    if (this.state.watched === "Not Watched") {
      this.setState({
        watched: "Watched",
      });
    } else {
      this.setState({
        watched: "Not Watched",
      });
    }
  }
  render() {
    return (
      <div>{this.props.movie.title}
        <input onClick={this.changeWatched.bind(this)} type="submit" value={this.state.watched} /> 
      </div>
    )
  }
}