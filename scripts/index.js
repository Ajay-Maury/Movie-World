// let key = "ab1630eb17982a965c2d03e0c42dce35";  
// https://api.themoviedb.org/3/trending/movie/day?api_key=ab1630eb17982a965c2d03e0c42dce35
var m_name;
let x;
movie(m_name)

function debounce(func,delay)
{
    if(x)
    {
        clearTimeout(x)
    }
    x = setTimeout(function()
    {
        func()
    },delay)
}

function search_movie()
{
    m_name = document.getElementById("movie_name").value;
    document.getElementById("err").style.display="none";
    document.getElementById("movie").style.display="grid";
    document.getElementById("movie").innerHTML = "";        
    movie(m_name);
}

function movie(movie_name)
{
    if(movie_name=="" || movie_name== undefined)
    {
        movie_name = "Avengers"
    }    
    mymovie(movie_name);    
}

async function mymovie(name)
{
    try{
        let movie = await fetch(`http://www.omdbapi.com/?apikey=5fdad9e6&s=${name}`);
        let m_data = await movie.json()
        // console.log(m_data)
        displayData(m_data.Search);
    }
    catch(er){
        console.log("error",er);
        let er_img = document.createElement("img")
        er_img.setAttribute("class","er_img")
        er_img.src = "https://c.tenor.com/NpZyGNG3SLEAAAAC/this-content-is-not-available.gif"
        document.getElementById("err").style.display="block";
        document.getElementById("movie").style.display="none";
        document.getElementById("err").append(er_img)
    }    
}

function displayData(data)
{
    data.forEach(element => {
    // console.log(element)

    let box = document.createElement("div")
    box.setAttribute("class","box")

    let box2 = document.createElement("div")
    box2.setAttribute("class","img_box")
        
    let img = document.createElement("img")
    img.src = element.Poster;
    box2.append(img)
    
    let title = document.createElement("p")
    title.textContent = element.Title;
    
    let b3 = document.createElement("div")
    b3.setAttribute("class","rate")

    let year = document.createElement("span")
    year.textContent = `Year : ${element.Year}`;
    
    let rating = document.createElement("span")
    let rate = (Math.random()*10).toFixed(2)
    rating.textContent = `Rating : ${rate}`;

    let recommend = document.createElement("span")

    if(rate>8.5)
    {
        recommend.textContent="Recommended"
        recommend.style.color="green"
    }
    
    b3.append(year,rating)
    // console.log(img,title,b3,recommend,rate)
    box.append(recommend,box2,title,b3)
    document.getElementById("movie").append(box)

    box.addEventListener("click",function ()
      {
         let t = element.Title
         // console.log(t)
         localStorage.setItem("MovieName",JSON.stringify(t))
         window.location.href="details.html"
      })
    });
}





