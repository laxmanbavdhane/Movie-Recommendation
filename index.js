let movie = {
  apiKey: "d3284db1131a025d331a538fa64820e0",
  fetchMovie: function (movie) {
    console.log(`http://localhost:5000/movie?title=${movie}`);
    fetch(`http://localhost:5000/movie?title=${movie}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          alert("No movie found.");
          throw new Error("No movie found.");
        }
        return response.json();
      })
      .then((data) => this.displayMovie(data));
  },
  displayMovie: function (data) {
    console.log(data);
    console.log(data.length);
    console.log(data[0].Name);

    // let movieData = [];
    // for (let i = 0; i < data.length; i++) {
    //   movieData.push({
    //     name: data[i].Name,
    //     genres: data[i].Genres,
    //   });
    // }
    // console.log(movieData);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].Genres);

      var parentNode = document.createElement("div");

      var node = document.createElement("p");
      parentNode.appendChild(node);
      var breakerNode = document.createElement("br");

      var nameNode = document.createTextNode("Movie Name: " + data[i].Name);
      var genreNode = document.createTextNode("Genres :" + data[i].Genres);
      node.appendChild(nameNode);
      parentNode.appendChild(breakerNode);

      node.appendChild(genreNode);
      parentNode.appendChild(breakerNode);

      document.getElementById("movielist").appendChild(node);

      // document.querySelector(".movie").innerText =
      //   "Movie Name ;: " + data[i].Name;
      // document.querySelector(".genre").innerText =
      //   "Movie Genres: " + data[i].genres;
    }
  },

  search: function () {
    this.fetchMovie(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search").addEventListener("click", function () {
  console.log("lol");
  movie.search();
});
