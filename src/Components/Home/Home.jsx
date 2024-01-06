import useItem from "../../Hooks/useItem";
import Banner from "./Banner";
import PopularCamps from "./PopularCamps";
import Sponsor from "./Sponsor";
import Stats from "./Stats";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";
import Upcoming from "./Upcoming";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Upcoming></Upcoming>
            <Stats></Stats>
            <Testimonial></Testimonial>
            <Sponsor></Sponsor>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;