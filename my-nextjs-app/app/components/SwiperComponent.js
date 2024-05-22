// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, EffectCoverflow, Autoplay, Keyboard } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import yokaiDatabase from '../data/yokaiDatabase';
// import Link from 'next/link';

// export default function SwiperComponent() {
//     return (
//         <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         navigation={true}
//         loop={true}
//         autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//         }}
//         keyboard={true}
//         effect="coverflow"
//         modules={[Autoplay, Navigation, EffectCoverflow, Keyboard]}

//         >
        
//         {yokaiDatabase.map((yokai) => (
//             <SwiperSlide
//             key={yokai.id}>

//                 <Link href={`/movies/${yokai.title}`} className="swiper-slide__container">
//                     <picture className="swiper-slide__picture">
//                         <img className="swiper_slide__img" src={`${yokai.img}`}/>
//                     </picture>
                
//                     <section className="swiper-slide__section">
//                         <h2 className="swiper-slide__title">{yokai.title}</h2>
//                         <picture className="icons-container">
//                             <picture className="icon-wrapper icon-wrapper--bookmark">
//                                 <img className="icons" src="/icons/Bookmark icon.svg" alt="bookmark icon"/>
//                             </picture>
//                             <picture className="icon-wrapper icon-wrapper--thumbs-up">
//                                 <img className="icons" src="/icons/Thumbs up Icon.png" alt="like icon"/>
//                             </picture>
//                         </picture>
//                     </section>
//                 </Link>
//             </SwiperSlide>
                
//             ))})
//         </Swiper>
//     )
// }