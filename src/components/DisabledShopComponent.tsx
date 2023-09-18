import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";


interface shopInfo{
    shopName: string;
    playerRecord: Id<"Players">;
    shopNum: number;
    price: number;
    imageState: string;
    canBuyShop: boolean;
    setQuantity: React.Dispatch<React.SetStateAction<number[]>>;
    quantity: Array<number>;
}


//component that lets user buy shops when they are available
function DisabledShopComponent(props:shopInfo)
{

    const updateDocument = useMutation(api.tasks.updateDocument);


    function userBuyingShop() {
        
        if(props.canBuyShop)
        {
            props.quantity[props.shopNum] += 1;
            props.setQuantity(props.quantity);
            console.log(props.playerRecord);
            
            updateDocument({
                id: props.playerRecord,
                quantity: props.quantity,
                
            });
        }
     
        
      }

    return(<div className="h-[10rem] w-[10rem]">
        <div className="absolute pt-1 pl-8 z-10 font-bold text-lg text-white ...">{props.shopName}</div>
        <div className="absolute pt-5 pl-8 z-10 font-bold text-lg text-white ..." >{"$" + props.price }</div>
        <img  onClick={userBuyingShop} className="relative z-0" src = {props.imageState}/>
       
        
    </div>)
} 



export default DisabledShopComponent;