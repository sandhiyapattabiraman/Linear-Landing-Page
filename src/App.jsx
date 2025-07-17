import './App.css'
import NavBar from './components/navbar'
import HomePage from './pages/home'
import Carousal from './pages/carousal'
import Cards from './pages/cards'


function App() {
  

  return (
    <>
      <div className='bg-black w-full'>

        <header className='bg-black'>
          <NavBar />
        </header>

        <main>

          <section>
            <HomePage />
          </section>

          <section>
            <Carousal />
          </section>

          <section className="w-full flex flex-col items-center bg-black py-24 px-[18%]">
            <Cards/>
          </section>

        </main>

      </div>
    </>
  )
}

export default App
