// Code your solutions in this file
function writeCards(namearr, event){
    let thankyou = []
    for (let i = 0; i < namearr.length; i++) {
        thankyou.push(`Thank you, ${namearr[i]}, for the wonderful ${event} gift!`)
    
    }
    return thankyou;
};

console.log(writeCards(["mark","peter","Kamau"],"Roracio"));

function countDown(int){
    while (int >= 0){
        console.log(int);
        int = int -1 ;
    }
};