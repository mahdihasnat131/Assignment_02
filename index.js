// fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny_Welbeck')
//     .then((res)=> res.json())
//     .then((data)=> {console.log(data)});


document.getElementById("search-btn").addEventListener("click", (event) => {
    
    const inputValue = document.getElementById("search-bar").value;
    console.log(inputValue);
    document.getElementById("search-bar").value = "";
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`)
              .then(res=>res.json())
              .then((data)=>{displayPlayers(data)}
                  );
  })
  
  const loadhonmepage=()=>{
    fetch("https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=r")
              .then(res=>res.json())
              .then((data)=>{displayPlayers(data)}
                  );
  }
  loadhonmepage();

  const displayPlayers=(items)=>{
      
      const Maincontainer=document.getElementById("main-container");
      Maincontainer.innerHTML="";
      let counter=0;
          items.player.forEach((item)=>{
              console.log(item)
               
              const div=document.createElement("div");
              div.classList.add("maincontainerdiv");
              div.classList.add("col-lg-4","col-md-8","col-sm-8");
              div.innerHTML=`<h1 class="player-nm" id="player nm" >${item.strPlayer}</h1>
                                <h1 class="Ntn"> ${item.strNationality}</h1>
                                <h1 class="Spt"> ${item.strSport}</h1>
                                <h1 class="Clb"> ${item.strTeam}</h1>
                                <p>${item.strDescriptionEN}</p>
                                 <i class="fa-brands fa-facebook">${item.strFacebook}</i>
                                <i class="fa-brands fa-square-instagram">${item.strInstagram}</i>
                                <div id="myModal" class="modal">

                                   <!-- Modal content -->
                                     <div class="modal-content">
                                           <span class="close">&times;</span>
                                           <p>${item.strPlayer}</p>
                                           <p>${item.dateBorn}<p>
                                           <p>${item.strEthnicity}</p>
                                           <p>${item.strPosition}<p>
                                           <p>${item.strStatus}</p>
                                     </div>

                                </div>

                                <button id="myBtn" onclick="displaymodal2()"> Details </button>
                                   
                                

                                <button onclick="AddtoCart()"> Select Player </button>
                              <img class="player-img" id="player-img" src=${item.strThumb}></img>`;
              Maincontainer.appendChild(div);
          })
      
     
        
      
     
  }

  
  const AddtoCart = () => {
    
   
    const cartCount = document.getElementById("count").innerText;
  
    let convertedCOunt = parseInt(cartCount);
    convertedCOunt = convertedCOunt + 1;

    if(convertedCOunt<12)
      {
          document.getElementById("count").innerText=convertedCOunt;
      }
  else{
      alert("Maximum players selected");
  }
   
  }

  const displaymodal2= () =>{
    
 
    var modal = document.getElementById("myModal");
   
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
        }
  }

  
  
  
  
  
