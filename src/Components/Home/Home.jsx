import useItem from "../../Hooks/useItem";
import Banner from "./Banner";
import PopularCamps from "./PopularCamps";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";
import Upcoming from "./Upcoming";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Upcoming></Upcoming>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;