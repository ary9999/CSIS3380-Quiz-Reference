// Café Menu Board
// Name: Arya Shahabi
// Student ID: ______________________


// Data - provided menu items
const menu = [
    {
        id: 1,
        name: "Espresso",
        description: "A double shot, pulled short",
        price: 3.25,
        vegetarian: true,
        soldOut: false
    },
    {
        id: 2,
        name: "Maple Latte",
        description: "Espresso, steamed milk and maple syrup",
        price: 5.50,
        vegetarian: true,
        soldOut: false
    },
    {
        id: 3,
        name: "Smoked Salmon Bagel",
        description: "Cream cheese, capers and red onion",
        price: 9.75,
        vegetarian: false,
        soldOut: false
    },
    {
        id: 4,
        name: "Butter Croissant",
        description: "Baked fresh every morning",
        price: 3.95,
        vegetarian: true,
        soldOut: true
    },
    {
        id: 5,
        name: "Turkey Club",
        description: "Roast turkey, bacon and tomato on sourdough",
        price: 11.50,
        vegetarian: false,
        soldOut: false
    }
];


// Header component
const MenuHeader = (props) => {
    return (
        <header>
            <h1>{props.cafeName}</h1>

            <span className="count">
                Items: {props.itemCount}
            </span>
        </header>
    );
};


// Displays price with 2 decimal places
const PriceTag = (props) => {
    return (
        <span className="price">
            ${props.price.toFixed(2)}
        </span>
    );
};


// Displays item name + description
// Fragment avoids adding another div
const ItemText = (props) => {
    return (
        <>
            <span className="item-name">
                {props.name}

                {props.vegetarian &&
                    <span className="badge-veg">VEG</span>
                }
            </span>

            <span className="item-desc">
                {props.description}
            </span>
        </>
    );
};


// Displays ONE menu item
const MenuItem = (props) => {
    return (
        <div
            className={
                props.soldOut
                    ? "menu-item is-sold-out"
                    : "menu-item"
            }
        >
            <div className="item-text">

                <ItemText
                    name={props.name}
                    description={props.description}
                    vegetarian={props.vegetarian}
                />

            </div>

            {props.soldOut
                ? <span className="sold-out">SOLD OUT</span>
                : <PriceTag price={props.price} />
            }

        </div>
    );
};


// Footer component
const Footer = (props) => {
    return (
        <footer>
            {props.available} of {props.total} items available today
        </footer>
    );
};


// Main component
const App = (props) => {

    // Count items that are NOT sold out
    const available =
        props.items.filter(item => !item.soldOut).length;

    return (
        <div className="menu">

            <MenuHeader
                cafeName="Arya's Café"
                itemCount={props.items.length}
            />

            {props.items.map(item => (
                <MenuItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    vegetarian={item.vegetarian}
                    soldOut={item.soldOut}
                />
            ))}

            <Footer
                available={available}
                total={props.items.length}
            />

        </div>
    );
};


// Create React root
const root = ReactDOM.createRoot(
    document.getElementById("root")
);


// Pass menu array into App
root.render(
    <App items={menu} />
);