import { useState } from 'react'
import { movie } from './types'
import './App.css'


function App() {

  return (
    <>
    <header className='flex justify-center'>
      <p className='fixed top-0'>Movie app</p>
    </header>
    <section>
      <form action=''>
      <div className='flex justify-between items-center gap-9'>
      <input className='h-12 rounded-xl' type='text' placeholder='Search movie...'></input>
      <button className='bg-zinc-200 text-gray-900' type='submit'>Search</button>
      </div>
      </form>
    </section>
    </>
  )
}

export default App
