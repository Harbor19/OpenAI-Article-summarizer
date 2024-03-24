import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';

const App = () => {
  return (
    <main>
      <div className='w-screen min-h-screen fixed flex justify-center pl-6 pr-6 pt-32 pb-40 pointer-events-none'>
        <div className="gradient" />
      </div>

      <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App