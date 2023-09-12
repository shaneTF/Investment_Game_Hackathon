

interface shopInfo{
    shopName: string;
    price: number;
    imageState: string;
}


//component that lets user buy shops when they are available
function DisabledShopComponent(props:shopInfo)
{
    return(<div className="h-[10rem] w-[10rem]">
        <div className="absolute pt-1 pl-8 z-10 font-bold text-lg text-white ...">{props.shopName}</div>
        <div className="absolute pt-5 pl-8 z-10 font-bold text-lg text-white ..." >{"$" + props.price }</div>
        <img className="relative z-0" src = {props.imageState}/>
       
        
    </div>)
} 



export default DisabledShopComponent;