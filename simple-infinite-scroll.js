var testContent = [
    {"content":"eight"},
    {"content":"nine"},
    {"content":"ten"},
    {"content":"eleven"}
]

var renderedNew = false;

function renderNewContent(){
    console.log("reached bottom");
}

window.onscroll = function(){
    console.log(window.innerHeight);
    
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if(!renderedNew){
            
            renderNewContent();
            renderedNew = true;
        }
        
    }
    
}