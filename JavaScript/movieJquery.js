$(document).ready(() => {
    $('#searchbutton').on('click', (e) => {
        let searchText = $('#searchbox').val();
        findMovie(searchText);
    })
});

function findMovie(searchText) {
    $.get("http://www.omdbapi.com/?apikey=444696c3&s=" + searchText)
        .then((result) => {
            let movies = result.Search;
            let results = '';
            for (var i = 0; i < movies.length; i++) {
                if (movies[i].Poster === "N/A") {
                    results +=
                        `<div id="result" title=${movies[i].imdbID}>
                  <img src="/images/no_image.png"/img>
                  <h3>${movies[i].Title}.</h3>
                  </div>`;
                    $('#info').html(results);
                } else {
                    results +=
                        `<div id="result" >
                    <div onclick="findMovie2('${movies[i].imdbID}')">
                  <img id="movieimage" src="${movies[i].Poster}" /img>
                  </div>
                  </div>`;
                    $('#info').html(results);
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
};

$('#movieimage').on('click', findMovie2);

function findMovie2(id) {
    $.get("http://www.omdbapi.com/?apikey=444696c3&i=" + id)
        .then((resultMovie) => {
            let result2 = '';
            result2 +=
                `<div id="movie-info">
                <div>
                    <img id="movie-image" src="${resultMovie.Poster}">
                </div>
                <div>
                <table>
                <thead>
                    <h1 style="color: white;">${resultMovie.Title}</h1>
                </thead>
                <br>
                <tbody>
                    <tr>
                        <td>Year:</td>
                        <td>${resultMovie.Year}</td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td>${resultMovie.imdbRating}</td>
                    </tr>
                    <tr>
                        <td>Genre:</td>
                        <td>${resultMovie.Genre}</td>
                    </tr>
                    <tr>
                        <td>Actors:</td>
                        <td>${resultMovie.Actors}</td>
                    </tr>
                    <tr>
                        <td>Plot:</td>
                        <td>${resultMovie.Plot}</td>
                    </tr>
                </tbody>
            </table>
                </div>
            </div>`;
            $('#info').html(result2);
        })
        .catch((err) => {
            console.log(err);
        })
}
