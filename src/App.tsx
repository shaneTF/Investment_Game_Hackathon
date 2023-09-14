import disabledBuyPic from "./assets/buydisabledshop.png";
import disabledPic from "./assets/disabledshop.png";
import BuyShopComponent from "./components/BuyShopComponent";
import DisabledShopComponent from "./components/DisabledShopComponent";
import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {


  const [playerMoney, setPlayerMoney] = useState(0);
  const shopInfo = useQuery(api.tasks.get);

  


  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="aspect-square h-[40rem] w-[30rem] rounded-lg border-2 border-solid border-black">
        <div>This is a test!</div>
        <div className="grid grid-cols-2 gap-x-[5.7rem] py-8 mx-8">
          <div>
            {" "}
            {shopInfo?.map(({ _id, name , id, sell_price, cur_price, quantity}) => (
              id < 4 ? <div key={_id}> {quantity == 0 ? playerMoney >= sell_price ? <DisabledShopComponent shopName={name} price={sell_price} imageState={disabledBuyPic}/> : <DisabledShopComponent shopName={name} price={sell_price} imageState={disabledPic}/> : <BuyShopComponent/>} </div> : ""
            ))}
         </div>
         <div>
            {" "}
            {shopInfo?.map(({ _id, id, name , sell_price, cur_price, quantity}) => (
                 id > 3 ? <div key={_id}> {quantity == 0 ? playerMoney >= sell_price ? <DisabledShopComponent shopName={name} price={sell_price} imageState={disabledBuyPic}/> : <DisabledShopComponent shopName={name} price={sell_price} imageState={disabledPic}/> : <BuyShopComponent/>} </div> : ""
            ))}
         </div>
       </div>
      </div>
    </div>
         
          
 

  );
}

export default App;
