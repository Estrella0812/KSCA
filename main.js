var slideIndex = 0;
var countdown = 0;
showSlides();

function currentSlide(n) {
    slideIndex=n-1;
    clearTimeout(countdown);
    showSlides();
}

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    countdown = setTimeout(showSlides, 2500);
}






function clubStat(n){
    setClubButtonGrey();
    document.getElementById("club_stat").setAttribute("src", "src/" + n + ".jpg");
    document.getElementById(n).style.color = "black";
    //console.log(n);
}

function playerStat(n){
    setPlayerButtonGrey();
    document.getElementById("player_stat").setAttribute("src", "src/" + n + ".jpg");
    document.getElementById(n).style.color = "black";
}

function setClubButtonGrey(){
    document.getElementById("open_age_club_stat").style.color = "grey";
    document.getElementById("over_age_40_club_stat").style.color = "grey";
    document.getElementById("over_age_55_club_stat").style.color = "grey";
}

function setPlayerButtonGrey(){
    document.getElementById("open_age_player_stat").style.color = "grey";
    document.getElementById("over_age_40_player_stat").style.color = "grey";
    document.getElementById("over_age_55_player_stat").style.color = "grey";
}