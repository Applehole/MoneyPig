import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../src/components/Footer/Footer';
import TimeOptionsSetting from '../src/components/TimeOptionsSetting/TimeOptionsSetting';

const makeAQuiz: NextPage = () => {
  return (
    <div className=" bg-grey">
      <Head>
        <title>Making a quiz page</title>
        <meta name="description" content="Making a Quiz" />
      </Head>
      <div className="text-5xl">키워드</div>
      <div className="text-5xl">시간</div>
      <TimeOptionsSetting />
      <div className="text-5xl">문제</div>
      <div className="text-5xl">정답</div>

      <Footer />
    </div>
  );
};

export default makeAQuiz;
