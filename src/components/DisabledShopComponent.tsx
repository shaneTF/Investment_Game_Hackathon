import disabledBuyPic from "../assets/disabletemp.png";

interface ShopInfo{
    shopName: string;
    price: BigInteger;
}
//component that lets user buy shops when they are available
function DisabledShopComponent()
{
    return(<div>
        <img src = {disabledBuyPic}></img>
    </div>)
} 



export default DisabledShopComponent;