import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './home/App.jsx'
import Nav from '../components/navbar/Nav.jsx'
import Items from './home/Items.jsx'
import Facts from './home/facts.jsx'

function HomePage(){
  return(
    <>
        <Nav/>
        <App />
        <div className='content'>
        <Facts></Facts>
        <Items></Items>
        </div>
        <footer className='footer'>
            <h1>Just A footer</h1>
            <p>created by team rocket</p>
        </footer>
    </>
  )
}
