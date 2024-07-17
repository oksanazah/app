import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';

const About = () =>(
  
    <>
        <Header/>
    <h1 align = "center">Сторінка в стадії розробки</h1>
    <div align = "center">
        <Image src="/about.jpg" width={500} height={500} alt="about" />
      </div>
      <h1 align = "center">Наші спеціалісти скоро все <br />зроблять</h1>
     <Footer />
     </>
  
  
);
export default About;
