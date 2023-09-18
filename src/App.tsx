import disabledBuyPic from "./assets/buydisabledshop.png";
import disabledPic from "./assets/disabledshop.png";
import BuyShopComponent from "./components/BuyShopComponent";
import DisabledShopComponent from "./components/DisabledShopComponent";
import { useState, useEffect } from "react";
import { useQuery , useMutation} from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const shopPicLabels = ["./assets/lemon_icon.svg", "./assets/pizza_icon.svg" , "./assets/soup_icon.svg","./assets/cookie_icon.svg","./assets/pet_icon.svg","./assets/halloween_icon.svg","./assets/religion_icon.svg","./assets/robot_icon.svg"];
  const [playerMoney, setPlayerMoney] = useState(0);
  const [shopQuantity, setShopQuantity] = useState([0,0,0,0,0,0,0,0]);
  const [shopRate, setShopRate] = useState([1,0.75,0.5,0.25,0.13,0.07,0.03,0.01]);
  const [playerID, setPlayerID] = useState<Id<"Players">>();
  const shopInfo = useQuery(api.tasks.get);
  const playerInfo = useQuery(api.tasks.getPlayerInfo , {userName: "Potatoe"});
  const updateDocument = useMutation(api.tasks.updateDocument);

  //load player data
  useEffect(() => {

      if(playerInfo !== undefined)
      {
        setShopQuantity(playerInfo[0].shopQuantity);
        setShopRate(playerInfo[0].shopRates);
        setPlayerMoney(playerInfo[0].money)
        setPlayerID(playerInfo[0]._id);
        console.log("meow");
        
      }
   
  } , [playerInfo]);

  //save player data by looking for close browser listener event
  //useEffect(() => {} , []);


  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="aspect-square h-[40rem] w-[30rem] rounded-lg border-2 border-solid border-black">
        <div>Player Currency: 0</div>
        <div className="grid grid-cols-2 gap-x-[5.7rem] py-8 mx-8">
          <div>
          
            {" "}
            {shopInfo?.map(({ _id, name , id, sell_price, cur_price}) => (
              id < 4 ? <div key={_id}> {shopQuantity[id] == 0 ? playerMoney >= sell_price ? <DisabledShopComponent shopName={name} playerRecord={playerID!} price={sell_price} imageState={disabledBuyPic} canBuyShop={true} quantity={shopQuantity} setQuantity={setShopQuantity} shopNum={id} /> : <DisabledShopComponent shopName={name} price={sell_price} imageState={disabledPic} canBuyShop={false} playerRecord={playerID!}  quantity={shopQuantity} setQuantity={setShopQuantity} shopNum={id} /> : <BuyShopComponent shopLabel={shopPicLabels[id]} playerRecord={playerID!} shopNum={id} quantity={shopQuantity} setQuantity={setShopQuantity} setRate={setShopRate} rate={shopRate}  />} </div> : ""
            ))}
         </div>
         <div>
            {" "}
            {shopInfo?.map(({ _id, id, name , sell_price, cur_price}) => (
                 id > 3 ? <div key={_id}> {shopQuantity[id] == 0 ? playerMoney >= sell_price ? <DisabledShopComponent shopName={name} playerRecord={playerID!} price={sell_price} imageState={disabledBuyPic} canBuyShop={true}  quantity={shopQuantity} setQuantity={setShopQuantity} shopNum={id} /> : <DisabledShopComponent shopName={name} price={sell_price} imageState={disabledPic} canBuyShop={false} playerRecord={playerID!}  quantity={shopQuantity} setQuantity={setShopQuantity} shopNum={id} /> : <BuyShopComponent shopLabel={shopPicLabels[id]} playerRecord={playerID!} shopNum={id} quantity={shopQuantity} setQuantity={setShopQuantity} setRate={setShopRate} rate={shopRate}  />} </div> : ""
            ))}
       
         </div>
       </div>
      </div>
    </div>
         
          
 

  );
}

export default App;
