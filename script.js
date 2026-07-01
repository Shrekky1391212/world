document
.querySelectorAll(
"details"
)

.forEach(

x=>{

x.addEventListener(

"toggle",

()=>{

if(
x.open
){

x.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

}

);