function displayLoader() {
    let LOADER = document.querySelector(".loader");
    let timer = Math.floor(Math.random()*5) + 3;
    timer = timer + "000"
    timer = +timer
  
    LOADER.style.display = 'flex';
    setTimeout(()=>{
      LOADER.style.display = 'none';
    }, timer)
  }
  
  displayLoader();