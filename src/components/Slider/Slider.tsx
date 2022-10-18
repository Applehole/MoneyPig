import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import OnboardingDescription, {
  Image_Location_Position,
} from '../OnboardingDescription/OnboardingDescription';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Silder = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <OnboardingDescription
          description={'Make A Quiz 탭에서 문제를 만들 수 있습니다.'}
          image={'/MakeAQuiz.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
        />
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingDescription
          description={'Make A Quiz 탭에서 문제를 만들 수 있습니다.'}
          image={'/ChoiceAQuiz.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
        />
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingDescription
          description={'선택한 퀴즈를 풀 수 있습니다.'}
          image={'/SolveAQuiz.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
        />
      </SwiperSlide>
      <SwiperSlide>
        <OnboardingDescription
          description={'퀴즈의 결과를 확인할 수 있습니다.'}
          image={'/Result.webp'}
          imgLocation={Image_Location_Position.RIGHT}
          width={300}
          height={400}
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Silder;
