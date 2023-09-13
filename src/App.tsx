import disabledBuyPic from "./assets/buydisabledshop.png";
import disabledPic from "./assets/disabledshop.png";
import BuyShopComponent from "./components/BuyShopComponent";
import DisabledShopComponent from "./components/DisabledShopComponent";
import { useState } from "react";

function App() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="aspect-square h-[40rem] w-[30rem] rounded-lg border-2 border-solid border-black">
        <div>This is a test!</div>
        <div className="grid grid-cols-2 gap-x-[5.7rem] py-8 mx-8">
          <div>
            {" "}
            <DisabledShopComponent
              shopName="Lemon Shop"
              price={2}
              imageState={disabledPic}
            />
          </div>
          <div>
            {" "}
            <DisabledShopComponent
              shopName="Pizza Shop"
              price={20}
              imageState={disabledPic}
            />
          </div>
          <div>
            {" "}
            <DisabledShopComponent
              shopName="Soup Shop"
              price={200}
              imageState={disabledPic}
            />
          </div>
          <div>
            {" "}
            <DisabledShopComponent
              shopName="Fancy Shop"
              price={20000}
              imageState={disabledPic}
            />
          </div>
          <div>
            {" "}
            <DisabledShopComponent
              shopName="Cat Shop"
              price={200000}
              imageState={disabledPic}
            />
          </div>
          <div>
            {" "}
            <DisabledShopComponent
              shopName="Clown Shop"
              price={2000000}
              imageState={disabledPic}
            />
          </div>
          <div>
            {" "}
            <DisabledShopComponent
              shopName="Shane's Shop"
              price={20000000}
              imageState={disabledPic}
            />
          </div>
          <div>
            {" "}
            <DisabledShopComponent
              shopName="God's Shop"
              price={2000000000}
              imageState={disabledPic}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
