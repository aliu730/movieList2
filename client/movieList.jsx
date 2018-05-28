var MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, i) => (
          <MovieListEntry movie={movie} key={i} />
        )
      )}
    </div>  
  )
}