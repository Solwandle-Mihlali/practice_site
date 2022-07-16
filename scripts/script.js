const body = document.querySelector('body');
const section = document.createElement('section');
const navigation = document.createElement('nav')
const logoCont = document.createElement('div')
const links = [3];
const buttName = ["HOME","PRODUCTS","CONTACT","ORDER"];
const productCardContainer = document.getElementById('productCardContainer');


/* this loop creates buttons 
and stores them in links array
for(var y = 0; y < 4; y++){
  
    links[y] = document.createElement('button')
    links[y].innerHTML = buttName[y] ;
}

*/
/*this function calls all styles*/
function webStyles(){
    style();
}
/*this function contains styles*/
function style(){

    /*styling body*/
    body.style.margin = "0";
    body.style.padding= "0";
    body.style.minHeight = "100vh";
    body.style.height = "100vh"
    body.style.width = "100%";
    body.style.background = " white"
    body.style.display = "flex";
    body.style.alignItems = "center"
    body.style.flexDirection = "column"
    body.style.justifyContent =" center"

    body.appendChild(section)
    

    section.classList.add('mainSection')
    section.style.width = "95%";
    section.style.height = "100%";
    section.style.display = "flex";
    section.style.alignItems = "center"
    section.style.flexDirection = "column"
    section.style.justifyContent =" center"
    section.style.position = "relative";

    section.appendChild(navigation)
    section.appendChild(productCardContainer)
    
    navigation.style.width = "100%";
    navigation.style.height = "20vh";
    navigation.style.display = "flex";
    navigation.style.alignItems = "center"
    navigation.style.justifyContent ="space-evenly"
    navigation.style.gap ="5%"
    navigation.style.flexWrap="wrap"
    navigation.style.position = "absolute"
    navigation.style.top = "0"
    navigation.style.overflow = "hidden"
    navigation.style.borderBottom = "solid green 1px"
    navigation.appendChild(logoCont)

    logoCont.style.height = "100%"
    logoCont.style.width = "45%"
    logoCont.style.backgroundImage ="url('img/logo.png')"
    logoCont.style.backgroundPosition = "center"
    logoCont.style.backgroundSize = "cover"
    logoCont.style.overflow = "hidden"
    /*loop to display and style naviagtions buttons */
    for(var x =0; x< links.length; x++){

        links[x].style.height = "20%";
        links[x].style.width = "7.5%";
        links[x].style.background= "white";
        links[x].style.display = "flex";
        links[x].style.alignItems = "center"
        links[x].style.justifyContent ="center"
        links[x].style.fontWeight = "bolder";
        links[x].style.boxShadow = "3px 4px 10px black";
        links[x].style.border = "solid  black 1px"
        links[x].style.fontSize = "13px"
        links[x].style.fontFamily = "Arial"
        navigation.appendChild(links[x])
      }
    
}




webStyles();

