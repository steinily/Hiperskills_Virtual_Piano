document.addEventListener('keypress',function(event){
    switch (event.code){
        case "KeyA":
            /*console.log("The 'A' key is pressed.");*/
            letThereBeMusic('A');
            break;
        case "KeyS":
        /* console.log("The 'S' key is pressed.");*/
         letThereBeMusic('S');
         break;
     case "KeyD":
        /*console.log("The 'D' key is pressed.");*/
         letThereBeMusic('D');
        break;
    case "KeyF":
        /*console.log("The 'F' key is pressed.");*/
        letThereBeMusic('F');
        break;
    case "KeyG":
        /*console.log("The 'G' key is pressed.");*/
        letThereBeMusic('G');
        break;
    case "KeyH":
        /*console.log("The 'H' key is pressed.");*/
        letThereBeMusic('H');
        break;
    case "KeyJ":
        /*console.log("The 'J' key is pressed.");*/
        letThereBeMusic('I');
        break;
    case "KeyW":
        /*console.log("The 'J' key is pressed.");*/
        letThereBeMusic('W');
        break;
    case "KeyE":
        /*console.log("The 'J' key is pressed.");*/
        letThereBeMusic('E');
        break;
    case "KeyT":
        /*console.log("The 'J' key is pressed.");*/
        letThereBeMusic('T');
        break;
    case "KeyY":
        /*console.log("The 'J' key is pressed.");*/
        letThereBeMusic('Y');
        break;
    case "KeyU":
        /*console.log("The 'J' key is pressed.");*/
        letThereBeMusic('U');
        break;


    default:
        /*console.log("Wrong key was pressed!");*/
        break;

}
/*console.log(event.code);*/
});

function letThereBeMusic(e){
    let src = new Audio("/src/audio/"+ e +".mp3");
    let audio = document.getElementById("music");
    audio.src = src
    audio.play()
}