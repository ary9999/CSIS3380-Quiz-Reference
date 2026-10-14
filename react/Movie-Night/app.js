const movies = [
    {
        title: "Spirited Away",
        year: 2001,
        genre: "Animation",
        rating: 5,
        watched: true,
        staffPick: true,
        id: 1
    },
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 4,
        watched: true,
        staffPick: false,
        id: 2
    },
    {
        title: "The Grand Budapest Hotel",
        year: 2014,
        genre: "Comedy",
        rating: 4,
        watched: false,
        staffPick: true,
        id: 3
    },
    {
        title: "Coco",
        year: 2017,
        genre: "Animation",
        rating: 5,
        watched: false,
        staffPick: false,
        id: 4
    }
];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>

            <span className="stats">
                Movies: {props.totalMovies}
            </span>
        </header>
    );
};

const MovieDetails = (props) => {
    return (
        <>
            <span className="movie-title">
                {props.title}

                {props.staffPick &&
                    <span className="badge badge-pick">
                        STAFF PICK
                    </span>
                }
            </span>

            <span className="movie-meta">
                {props.year} · {props.genre}

                {props.watched
                    ? <span className="badge badge-watched">WATCHED</span>
                    : <span className="badge badge-unwatched">NOT YET</span>
                }
            </span>
        </>
    );
};

const Movie = (props) => {
    return (
        <div className="movie">

            <div className="movie-info">

                <MovieDetails
                    title={props.title}
                    year={props.year}
                    genre={props.genre}
                    watched={props.watched}
                    staffPick={props.staffPick}
                />

            </div>

            <Rating score={props.rating} />

        </div>
    );
};

const Rating = (props) => {
    return (
        <div className="rating">

            <button className="rating-action decrement">
                -
            </button>

            <span className="rating-score">
                {props.score}
            </span>

            <button className="rating-action increment">
                +
            </button>

        </div>
    );
};

const App = (props) => {

    const watchedCount =
        props.initialMovies.filter(movie => movie.watched).length;

    return (
        <div className="watchlist">

            <Header
                title="Movie Night"
                totalMovies={props.initialMovies.length}
            />

            {props.initialMovies.map(movie =>
                <Movie
                    key={movie.id.toString()}
                    title={movie.title}
                    year={movie.year}
                    genre={movie.genre}
                    rating={movie.rating}
                    watched={movie.watched}
                    staffPick={movie.staffPick}
                />
            )}

            <Footer
                watchedCount={watchedCount}
                totalMovies={props.initialMovies.length}
            />

        </div>
    );
};

const Footer = (props) => {
    return (
        <footer>
              &copy; 2026 Arya
        </footer>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App initialMovies={movies} />);