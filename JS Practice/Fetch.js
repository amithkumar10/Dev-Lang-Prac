const onSubmit = (event)=>{
   try {
     event.preventDefault();
     const remove = document.querySelector(".img-pokemon");
       if(remove) remove.remove();
    const input  =  document.querySelector(".pokemon");
    const pokemonName = input.value.trim().toLowerCase();
    console.log(pokemonName);
    fetchPokemon(pokemonName);
    input.value = "";
   } catch (error) {
    console.error(error.message);
   }
}


const fetchPokemon = async (pokemonName)=>{
    const load = document.querySelector(".loader");
   try {
    load.style.display="block";
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const fullResponse = await fetch("https://pokeapi.co/api/v2/pokemon/");
    
    const fullData = await fullResponse.json();
    console.log(fullData);
    
        if (!response.ok) {
             load.textContent="Pokemon not found";
            throw new Error("Pokemon not found");
             
        }
     
    const data = await response.json();
    console.log(data);
    const IMG = document.createElement('img');
    IMG.src = data.sprites.front_default;
    IMG.className="img-pokemon";
    IMG.style.width="200px";
    IMG.style.height="200px";
    document.body.appendChild(IMG);
     load.style.display="none";
   } catch (error) {
    console.error(error.message);
   }
}
