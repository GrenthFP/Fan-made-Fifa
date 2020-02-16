import React from 'react';
let arrayspace= [0,0,0,0,0,0,0,0,0]
function Boardgen(){
    return(
    <div className="Board">
        <button className="Board_space" id="b1" onclick={arrayspace[1]=1} ></button>
        <button className="Board_space" id="b2" onclick={arrayspace[2]=1}></button>
        <button className="Board_space" id="b3" onclick={arrayspace[3]=1}></button>
        <button className="Board_space" id="b4" onclick={arrayspace[4]=1}></button>
        <button className="Board_space" id="b5" onclick={arrayspace[5]=1}></button>
        <button className="Board_space" id="b6" onclick={arrayspace[6]=1}></button>
        <button className="Board_space" id="b7" onclick={arrayspace[7]=1}></button>
        <button className="Board_space" id="b8" onclick={arrayspace[8]=1}></button>
        <button className="Board_space" id="b9" onclick={arrayspace[9]=1}></button>
    </div>
    )
    function update(){
        for(const i=0;i<10;i++){
            if(arrayspace[i]==1){

            }
        }

    }
    
}
export default Boardgen