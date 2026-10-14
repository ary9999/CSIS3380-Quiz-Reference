const button = document.getElementById("loadPokemon");

button.addEventListener("click", function () 
{
    const pokemonName = document.getElementById("pokemonInput").value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)


    .then((response) => 
        {
            if (!response.ok) 
                {
            throw new Error("Pokemon not found");
            }
             return response.json();      
        })
        

    .then((data) => 
        {
        console.log(data);

    document.getElementById("result").innerHTML = 
    `<h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p>Name: ${data.name}</p>
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>`
    })

     .catch((error) => 
        {
    console.error(error);
    document.getElementById("result").textContent = "Pokemon not found";
    });

});

