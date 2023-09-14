import buyPic from "../assets/buytemp.png";



//component that lets user buy shops and make money 
function BuyShopComponent()
{
    return(<div className="h-[10rem] w-[10rem]">
        <img src = {buyPic}></img>
    </div>)
} 

export default BuyShopComponent;