import Navbar from "../components/Navbar";
import Map from "../components/Map";
const style = {
  wrapper: `h-screen w-screen flex flex-col`,
};

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* navbar */}
      <Navbar />
      <div className={style.main}>
        <br /> <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* location selector
          confirm ride */}
        </div>
      </div>
    </div>
  );
}
