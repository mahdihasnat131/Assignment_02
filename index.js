

const loadallplayers = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p')
    .then((res)=> res.json())
    .then((data)=> {displayplayers(data);
});
    
    
};

const displayplayers= (players)=>{
    
    const playercontainer= document.getElementById("player-container")
    players.player.forEach(element => {
        // console.log(element);
       const div=document.createElement("div")
       div.classList.add("card");
       div.innerHTML=`<img class="card-img" src=${element.strCutout} alt=""/>
        <h5>${element.strPlayer}</h5>
        <h6>${element.strNationality}</h6>
        <h6>${element.strSport}</h6>
        <h6>${element.strTeam}</h6>
        <h6>${element.strWage}</h6>
        <p>${element.strDescriptionEN.slice(0,95)}</p>
        <i class="fa-brands fa-facebook">${element.strFacebook}</i>
        <i class="fa-brands fa-square-instagram">${element.strInstagram}</i>
        <button>Details </button>
        <button onclick="handleAddtoCart()">Select Player</button>`;
        
        playercontainer.appendChild(div);
        
    });
};


    
const handleAddtoCart=()=>{
    
    
    const cartcount=document.getElementById("count").innerText;
    let convertedcount=parseInt(cartcount);
    convertedcount=convertedcount+1;
    if(convertedcount<12)
        {
            document.getElementById("count").innerText=convertedcount;
        }
    else{
        alert("Maximum players selected");
    }
    

    
};

loadallplayers();

