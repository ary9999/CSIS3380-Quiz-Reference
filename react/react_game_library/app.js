// Data array - rename fields/items depending on quiz prompt
const games = [
    {
        id: 1,
        title: "Elden Ring",
        genre: "RPG",
        rating: 9
    },
    {
        id: 2,
        title: "Mario Kart",
        genre: "Racing",
        rating: 8
    },
    {
        id: 3,
        title: "Minecraft",
        genre: "Sandbox",
        rating: 7
    }
];


// Displays ONE game
// Change props/HTML depending on required data
function Game(props)
{
    return (
        <div className="game">

            <h2>{props.title}</h2>
            <p>Genre: {props.genre}</p>

            {/* Pass rating to child component */}
            <Rating score={props.rating} />

            {/* Ternary = if / else */}
            {props.rating >= 8
                ? <p>Recommended</p>
                : <p>Worth Trying</p>
            }

            {/* && = show only if condition is true */}
            {props.genre === "RPG" && <p>RPG pick!</p>}

        </div>
    );
}


// Creates one Game component for every object
function GameList()
{
    return (
        <div className="game-list">

            {games.map(game => (

                <Game
                    // Use a unique/stable key
                    key={game.id}

                    // Pass array values as props
                    title={game.title}
                    genre={game.genre}
                    rating={game.rating}
                />

            ))}

        </div>
    );
}


// Child component
// score prop comes from <Rating score={...} />
function Rating(props)
{
    return (
        <p>Rating: {props.score}</p>
    );
}


// Main/top-level component
function App()
{
    return (
        <>
            {/* Fragment avoids extra div */}
            <Header />
            <GameList />
        </>
    );
}


// Page heading
function Header()
{
    return (
        <header>
            <h1>Game List</h1>
        </header>
    );
}


// Render App inside <div id="root"></div>
ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

