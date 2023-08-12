import { Toaster } from "react-hot-toast";
import Navbar from 'src/components/Nav/Navbar'
import Header from 'src/components/Header'
import Skills from 'src/components/Skills/Skills'
import SwipeContainer from 'src/components/Scroll/SwipeContainer';
import Footer from 'src/components/Footer';
import SEO from 'src/components/Generic/SEO';
import { useContext } from 'react';
import { RefContext } from 'src/utils/Context/RefContext';

export default function Home() {
    const { PATH_IMAGE } = useContext(RefContext)
    
    return (
        <>
            <SEO
                title="Inicio | Greg Puac Portafolio"
                description="Conoce mi trabajo y habilidades en desarrollo web a través de proyectos creativos que te cautivarán. Encuentra mis enlances para contactarte conmigo."
                url="https://www.gregpuac.dev/"
                type="summary_large_image"
                image={`${ PATH_IMAGE +'images/Imagen.webp'}`}
            />

            <Toaster position="top-right" reverseOrder={false} />
            <Navbar />
            <Header />
            <Skills />
            <SwipeContainer />
            <Footer />
        </>
    );
}