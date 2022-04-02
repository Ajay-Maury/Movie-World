
    movie_data()
    async function movie_data()
     {
         try {
             let res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=ab1630eb17982a965c2d03e0c42dce35")
             let data = await res.json();
             console.log(data.results)
             showData(data.results)
         } catch (error) {
             console.log("error",error)
         }
     }
    
     function showData(d)
     {
         d.forEach(element => {
            let frame =document.createElement("div");
            frame.setAttribute("class","frame")
    
            let img_div = document.createElement("div")
            let image = document.createElement("img")
            image.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
            img_div.append(image)
            
     
           let name = document.createElement("p")
           name.innerText = element.title
     
           let release = document.createElement("p")
           release.innerText = `Realesed on : ${element.release_date}`;
    
           let rating = document.createElement("p")
           rating.innerText = `Rating : ${element.vote_average}`;
    
           frame.append(img_div,name,release,rating)
           document.getElementById("movies").append(frame)
         });
         
     }