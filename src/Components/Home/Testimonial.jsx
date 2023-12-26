import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [dataRating, setDataRating] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setDataRating(data));
  }, []);
  return (
    <div className="mb-[80px]">
      <div className="text-center">
        <p className="text-4 text-[#8D5CF6]">What's our client say...</p>
        <h1 className="text-[50px] mb-10">Testimonial</h1>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {dataRating.map((item) => (
            <SwiperSlide key={item.id}>
              <Rating
                className="mb-2 mx-auto "
                style={{ maxWidth: 180 }}
                value={item.rating}
                readOnly
              />
              <p className="mb-2 text-[#8D5CF6] text-[20px] text-center md:text-[32px]">
                {item.name}
              </p>
              <div className="flex justify-center text-center">
              <p className="text-[15px] md:text-[20px] w-[500px]">
                {item.details}
              </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
