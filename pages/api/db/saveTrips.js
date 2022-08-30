import { client } from "../../../lib/sanity";

const saveTrips = async (req,res) => {
    try{
const tripDoc = {
    _type: "trips",
    _id:`${req.body.userWalletAddress}-${Data.now()}`,
    pickup:req.body.pickupLocation,
    dropoff:req.body.dropoffLocation,
}
    }catch(error){
res.status(500).send({message:'error',data:error.message})
    }
}

export default saveTrips