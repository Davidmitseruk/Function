

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articalsContainer: document.querySelector('.js-articles'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
}

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e) {
    e.preventDefault();

    const searchQuery = e.currentTarget.elements.query.value;

    const options = {
        headers: {
            Authorization: "7e3601482e314eafb64ba89b6fdc42e4",
    
        },
    };
    
    fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`,
         options
        )
     then(r => r.json())
     .then(console.log);
}







