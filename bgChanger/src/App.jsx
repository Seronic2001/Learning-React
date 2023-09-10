import { useState } from 'react'

function App() {
  const [bg, setBg] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' 
      style={{ backgroundColor: bg }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setBg('red')} className='outline-none px-4 '>Red</button>
          <button onClick={()=>setBg('green')} className='outline-none px-4 '>Green</button>
          <button onClick={()=>setBg('blue')} className='outline-none px-4 '>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
