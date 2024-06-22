let turntext=document.getElementById
('turntext');
let btns=document.querySelectorAll("btn");
let resetbtn=document.getElementById
('resetbtn')

let turn=true;
btns.forEach((button)=>{
    //reset button

    button.addEventListener("click",()=>{
        resetbtn.addEventListener
        ('click',()=>{
            button.innerHTML=""
        })
        function winfun() {
            button.innerHTML=""
        }
        if(button.innerHTML===""){
            if(turn===true){
                button.innerHTML="0"
                checkwinner();
                turn=false;
                turntext.innerText=
                ("turn for x")
            }
        }
    })
})
//win condition

let winconditions=[
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,4,8]
    [2,4,6]
    [0,3,6]
    [1,4,7]
    [2,5,8]
]
function checkwinner(){
    for(let win of condition){
        pos1val=btns[win[0]].innerText
        pos2val=btns[win[1]].innerText
        pos3val=btns[win[2]].innerText
        if( pos1val != "" &&pos2val !=
            "" &&pos3val != ""){
                if(pos1val===pos2val &&
                    pos1val===pos3val
                ){
                    alert(pos1val + "   " + "win the game")
                    btns.forEach((box)=>{
                        box.innerHTML="";
                    }
                    )
                }
            }
    }
}

