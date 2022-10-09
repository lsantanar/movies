const APIKEY = '0a398a3f6adbf2e2f44e5bfb4fbcef6e'
const ENDPOINT = 'https://api.themoviedb.org/3';
const IMGENDPOINT = 'https://image.tmdb.org/t/p/w500';
const ABOUTENDPOINT = 'https://api.themoviedb.org/movie/';
const MOVIESENDPOINT = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0a398a3f6adbf2e2f44e5bfb4fbcef6e&language=pt-BR&page=1';
const SERIESENDPOINT = 'https://www.themoviedb.org/tv';

const search = document.getElementById('btnHello');
const movies = document.getElementById('btnMovies');
const series = document.getElementById('btnSeries');

search.addEventListener ('click',  () => {
    let query = document.getElementById('searchBox').value
    fetch(`${ENDPOINT}/search/movie?api_key=${APIKEY}&query=${query}&language=pt-BR`)
       .then (res => res.json())
       .then (data => {
            let str = ''
            for (x=0; x< data.results.length; x++) {
                let filme = data.results[x];
                str += `<div class="card col-md-4 col-sm-6" width="300px">
                        <img src="${IMGENDPOINT}${filme.poster_path}" class="card-img-top" style="min-width: 200px" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <p class="card-text">${filme.overview}</p>
                        <a href="${ABOUTENDPOINT}${filme.id}" class="btn btn-primary">Mais detalhes...</a>
                        </div>
                    </div>`
            }
            document.getElementById('tela').innerHTML = str
       } )
       .catch (err => console.log (`Deu ruim: ${err.message}`))
})

movies.addEventListener ('click',  () => {
    fetch(`${MOVIESENDPOINT}`)
       .then (res => res.json())
       .then (data => {
            let str = ''
            for (x=0; x< data.results.length; x++) {
                let filmes = data.results[x];
                str += `<div class="card col-md-4 col-sm-6" width="300px">
                        <img src="${IMGENDPOINT}${filmes.poster_path}" class="card-img-top" style="min-width: 200px" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${filmes.title}</h5>
                        <p class="card-text">${filmes.overview}</p>
                        <a href="${ABOUTENDPOINT}${filmes.id}" class="btn btn-primary">Mais detalhes...</a>
                        </div>
                    </div>`
            }
            document.getElementById('tela2').innerHTML = str
       } )
       .catch (err => console.log (`Deu ruim: ${err.message}`))
})