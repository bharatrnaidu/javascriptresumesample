function fun(){
   var element = document.getElementById('resume');
   element.removeAttribute("hidden");
element.animate([
    // keyframes
    { transform: 'translateY(-500px)' },
    { transform: 'translateY(500px)' }
    
  ], { 
    // timing options
    duration: 1000,
    iterations: 1
  });
   
}

function green(){
    document.getElementById("resume").style.color = '#59886b';
}

function blue(){
    document.getElementById("resume").style.color = 'blue';
}

function red(){
    document.getElementById("resume").style.color = 'red';
}

function grey(){
    document.getElementById("resume").style.color = 'grey';
}

function black(){
    document.getElementById("resume").style.color = 'black';
}

function back1(){
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp1933952.jpg')";
    // document.body.style.backgroundRepeat = "no-repeat";
}

function back2(){
    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/337247.jpg')";
    // document.body.style.backgroundRepeat = "no-repeat";
}

function back3(){
    document.body.style.backgroundImage = "url('https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Wallpaper-038-1920x1080.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
}

function back4(){
    document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/74/99/M67dUT.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
}

function back5(){
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/57/dd/bb/57ddbb0e894d12a376ae8653edd2092a.png')";
    document.body.style.backgroundRepeat = "no-repeat";
}