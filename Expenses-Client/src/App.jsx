import { Suspense } from 'react';
import './App.css'
import { Outlet, useNavigation } from 'react-router-dom'




function App() {


  return (
    <div className='w-screen h-dvh bg-main flex justify-center py-16 px-8 font-sans bg-cover bg-center bg-fixed group [perspective:1000px]'>
      <div className={`h-full w-11/12 rounded-xl border-2 border-gray-700 backdrop-blur-lg shadow-2xl transition-all [transform-style:preserve-3d] transform:rotateY(180deg)`} >
        <Suspense>

          <Outlet />
        </Suspense>

      </div>
    </div>

  )
}

export default App
