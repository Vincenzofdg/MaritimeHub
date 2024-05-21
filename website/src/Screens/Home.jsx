
import { Header, UsersVessels, DynamicVesselStatus} from "../Components/Home";
import "../Style/Home.css";

function Home() {
  return(
    <div>
      <Header />
      <UsersVessels />
      <DynamicVesselStatus />
    </div>
  )
};

export default Home;