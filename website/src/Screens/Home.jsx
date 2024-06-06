
import { Header, UsersVessels, DynamicVesselStatus, LogOut} from "../Components/Home";
import "../Style/Home.css";

function Home() {
  return(
    <div>
      <LogOut />
      <Header />
      <UsersVessels />
      <DynamicVesselStatus />
    </div>
  )
};

export default Home;