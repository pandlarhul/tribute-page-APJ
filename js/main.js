function changeColor(){
  
    let main = document.getElementById("main");
    let btn = document.getElementById("btn");
    if(btn.innerHTML === "night mode"){
        main.style.color = "#ffffff"
        main.style.backgroundColor = "#000000";
        btn.innerHTML = "day mode";
      
    }else if(btn.innerHTML === "day mode"){
      main.style.color = "#000000"
      main.style.backgroundColor = "#ffffff";
      btn.innerHTML = "night mode";
    }
  }