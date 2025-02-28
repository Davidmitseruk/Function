document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js-search-form');
    const cardContainer = document.querySelector('.js-card-container');

    if(!form || !cardContainer) {
        console.error("Form or container is not found");
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = form.query.value.trim().toLowerCase();
        if(!query) return;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if(response.ok){
            const data = await response.json();
            render(data);
        } else {
            cardContainer.innerHTML = `<p class="error">pokemon not found</p>`
        }
        form.reset();
    });

function render(pokemon) {
    cardContainer.innerHTML = `
    <div class="card">
    <h2>${pokemon.name} </h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>Weigt: ${pokemon.weight} </strong></p>
    <p><strong>Height: ${pokemon.height} </strong></p>
</div>`;
}

})