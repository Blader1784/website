let showlighting = false;
let showwebsite = false;
let showad = false;
let showcanva = false;
let tshirts = 0;
let trophies = 0;
let hoodies = 0;
let awards = 0;

function revealLighting() {
    const embed = document.querySelector('.embed-center');

    if (showlighting === false) {
        embed.style.display = 'flex';
        showlighting = true;
        document.getElementById("Lighting").innerHTML = "▲ Lighting ▲";
    } else {
        embed.style.display = 'none';
        showlighting = false;
        document.getElementById("Lighting").innerHTML = "▼ Lighting ▼";
    }
}

function revealWebsite() {
    const embed = document.querySelector('.embed-center2');

    if (showwebsite === false) {
        embed.style.display = 'flex';
        showwebsite = true;
        document.getElementById("Website").innerHTML = "▲ Website ▲";
    } else {
        embed.style.display = 'none';
        showwebsite = false;
        document.getElementById("Website").innerHTML = "▼ Website ▼";
    }
}

function revealAd() {
    const embed = document.querySelector('.embed-center3');

    if (showad === false) {
        embed.style.display = 'flex';
        showad = true;
        document.getElementById("Ad").innerHTML = "▲ Ad ▲";
    } else {
        embed.style.display = 'none';
        showad = false;
        document.getElementById("Ad").innerHTML = "▼ Ad ▼";
    }
}

function revealCanva() {
    const embed = document.querySelector('.embed-center4');

    if (showcanva === false) {
        embed.style.display = 'flex';
        showcanva = true;
        document.getElementById("Canva").innerHTML = "▲ Canva ▲";
    } else {
        embed.style.display = 'none';
        showcanva = false;
        document.getElementById("Canva").innerHTML = "▼ Canva ▼";
    }
}

function tshirtCart() {
    tshirts++;
    updateCart()
}

function trophyCart() {
    trophies ++;
    updateCart();
}

function hoodieCart() {
    hoodies++;
    updateCart();
}

function awardCart() {
    awards++;
    updateCart();
}

function updateCart() {
    items = (tshirts + trophies > 0);
}

if (tshirts > 0){
    items = true;
}

if (trophies > 0){
    items = true;
}

if (hoodies > 0){
    items = true;
}

if (awards > 0){
    items = true;
}

if (tshirts + trophies + hoodies + awards === 0){
    items = false;
}

if (items === true){
    document.getElementById("emptycart").style.display = "none";
    document.getElementById("cart").innerHTML = "Jag Esports T-Shirts (" + tshirts + ")" + " and Jag Esports Trophies (" + trophies + ")";
} else {
    document.getElementById("emptycart").style.display = "block";
    document.getElementById("cart").style.display = "none";
}