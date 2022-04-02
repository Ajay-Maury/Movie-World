let name = JSON.parse(localStorage.getItem("MovieName"))
// console.log(name)
movieData(name)
async function movieData(name)
{
    let res = await fetch(`https://www.omdbapi.com/?apikey=5fdad9e6&t=${name}`)
    let data = await res.json()
    console.log(data)
    showDetails(data)
}

function showDetails(d)
{
    let box = document.createElement("div")
    box.setAttribute("class","box")

    let poster_box = document.createElement("div")
    poster_box.setAttribute("class","poster_box")
    let poster = document.createElement("img")
    poster.src = d.Poster;

    let title = document.createElement("p")
    title.innerHTML = `<strong> ${d.Title} </strong>`;
    poster_box.append(poster,title)

    let details_box = document.createElement("div")
    details_box.setAttribute("class","detail_box")

    let p1 = document.createElement("p")
    p1.innerHTML = `<strong>Actors : </strong>  ${d.Actors}`;

    let p2 = document.createElement("p")
    p2.innerHTML = `<strong>Awards : </strong>  ${d.Awards}` ;

    let p3 = document.createElement("p")
    p3.innerHTML = `<strong>Box Office : </strong>  ${d.BoxOffice}`;

    let p4 = document.createElement("p")
    p4.innerHTML = `<strong>Director : </strong> ${d.Director}`;

    let p5 = document.createElement("p")
    p5.innerHTML = `<strong>Plot : </strong> ${d.Plot}`;

    let p6 = document.createElement("p")
    p6.innerHTML = `<strong>Released : </strong> ${d.Released}` ;

    let p7 = document.createElement("p")
    p7.innerHTML = `<strong>Writer : </strong> ${d.Writer}`;

    let p8 = document.createElement("p")
    p8.innerHTML = `<strong>Rating : </strong> ${d.imdbRating}`;

    details_box.append(p1,p4,p7,p2,p5,p3,p6,p8)
    box.append(poster_box,details_box)

    document.getElementById("detail").append(box)

}