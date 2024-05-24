import { Arimo  } from "next/font/google";
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
import Services from './components/Services'


const arimo = Arimo({ 
  subsets: ["latin"],
  weight: ['400']
})

export default function Home() {
  return (
    <div>
      <main className={`flex min-h-screen flex-col items-center pt-24 md:p-24 lg:p-24 ${arimo.className}`}>
        <Header />
        <Services />
        <Products className='z-20' />
      </main>
        <a  className="fixed w-48 right-0 bottom-0 inset-y-0 text-center z-50 self-end" href="https://api.whatsapp.com/send?phone=5511982252014" target="_blank">
            <img className="
              w-8 
              h-8
              -mt-24
              ml-36
              md:w-10 
              md:h-10
              md:ml-20
              md:mb-12
              mr-2
              " src='/whatsIcon.png' />
        </a>
        <Footer />
    </div>
  );
}
