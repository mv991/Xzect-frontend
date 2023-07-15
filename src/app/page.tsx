import Image from 'next/image'
import styles from './page.module.css'
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Footer1 from './components/Footer1';
import Navbar from './components/Navbar';
export default function Home() {
  return (
    <main className='main-container' >
      <Navbar/>
      <Header/>
      <Content/>
      <Services/>
      <TechStack/>
      <Footer1/>
      <Footer/>
     
    </main>
  )
}
