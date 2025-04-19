console.log("hello")
let boxes=document.getElementsByClassName("box")
let turn=0
boxes=Array.from(boxes)
let turner=document.getElementsByClassName("TurnSpecifier")[0]
const val=["","","","","","","","",""]
boxes.forEach((element,i) => {
    element.addEventListener('click',()=>{
        console.log(turn)   
        if (val[i] !== "") return;
        let box=element.getElementsByTagName("img")[0];
        box.setAttribute(
            "style",
            "width:90px;height:90px;"
        )
        if (turn%2==0){
            box.src="tick.svg";
            val[i]="tick"
            turn+=1
            turner.innerHTML="Cross's Turn"
        }
        else{
            box.src="cross.svg";
            val[i]="cross"
            turn+=1
            turner.innerHTML="Tick's Turn"
        }

        let winner= checkWinner();
        if( winner){
            setTimeout(2);
            turner.innerHTML="Winner is " +winner
        }
    })

});
function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (val[a] !== "" && val[a] === val[b] && val[b] === val[c]) {
            console.log(`Winner is ${val[a]}`);
            return val[a]; // return 'X' or 'O'
        }
    }
    return null; // no winner yet
}
