import RideSelector from "./RideSelector";
import { useContext  } from "react";
import { UberContext } from "../context/uberContext";
const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
};
function Confirm() {
  const {currentAccount,pickup,dropoff} = useContext(UberContext)
  const storeTripDetails = async (pickup,dropoff) => {
    try{
await fetch('/api/db/saveTrips',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({
    pickupLocation:pickup,
    dropoffLocation:dropoff,
    userWalletAddress:currentAccount,
}),
})
}catch(error){
      console.log(error);
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        <RideSelector />
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails(pickup,dropoff)}
          >
            Confirm UberX
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
