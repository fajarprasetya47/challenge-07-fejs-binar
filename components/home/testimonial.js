import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Testimonial() {
    return (
        <>
            <section id="testimonial">
                <div className="title-testi">
                    <h3>Testimonial</h3>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={32}
                    navigation={{
                        nextEl: ".button-testi-right",
                        prevEl: ".button-testi-left",
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiper-slide testi">
                            <div className="testi-img"><img src="/img/testi-img1.png" alt="testi-img" /></div>
                            <div className="testi-desc">
                                <div className="testi-desc-rate"><img src="/img/star-rate.svg" alt="star" /></div>
                                <div className="testi-desc-msg">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </div>
                                <div className="testi-desc-profil">
                                    John Dee 32, Bromo
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide testi">
                            <div className="testi-img"><img src="/img/testi-img1.png" alt="testi-img" /></div>
                            <div className="testi-desc">
                                <div className="testi-desc-rate"><img src="/img/star-rate.svg" alt="star" /></div>
                                <div className="testi-desc-msg">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </div>
                                <div className="testi-desc-profil">
                                    John Dee 32, Bromo
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide testi">
                            <div className="testi-img"><img src="/img/testi-img2.png" alt="testi-img" /></div>
                            <div className="testi-desc">
                                <div className="testi-desc-rate"><img src="/img/star-rate.svg" alt="star" /></div>
                                <div className="testi-desc-msg">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                </div>
                                <div className="testi-desc-profil">
                                    John Dee 32, Bromo
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="button-testi">
                        <div className="button-testi-left"><img src="/img/Left button.svg" alt="left" /></div>
                        <div className="button-testi-right"><img src="/img/Right button.svg" alt="right" /></div>
                    </div>
                </Swiper>

            </section>
        </>
    )
}