import buyPic from "../assets/buytemp.png";
import { Id } from "../../convex/_generated/dataModel";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState, useEffect } from "react";

interface shopInfo{
    shopLabel: string;
    playerRecord: Id<"Players">;
    shopNum: number;
    setQuantity: React.Dispatch<React.SetStateAction<number[]>>;
    quantity: Array<number>;
    setRate: React.Dispatch<React.SetStateAction<number[]>>;
    rate: Array<number>;
}

//component that lets user buy shops and make money 
function BuyShopComponent(props:shopInfo)
{

    var playerEarnings = props.quantity[props.shopNum] * 3;
    var progressBarRate = 0;

    useEffect(() => {

        progressBarRate += props.rate[props.shopNum];
        console.log("meow");
    });


    return(<div className="h-[10rem] w-[10rem]">
        <div>
            <ProgressBar className="z-10" animated now={Math.floor(progressBarRate)}/>
        </div>
        <img className = "z-0" src = {buyPic}></img>
    </div>)
} 

export default BuyShopComponent;