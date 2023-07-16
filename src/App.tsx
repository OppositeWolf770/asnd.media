import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Admin, Resource } from 'react-admin'

import AdminLogin from './pages/AdminLogin'
import Layout from './Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Carousel from './pages/Home/Carousel'


function App() {

  return (
      <>
        <BrowserRouter>
          <Layout>  
            <Routes>
              <Route index element={ <Home /> } />
              <Route path="about" element={ <About /> } />
              <Route path="packages" element={ <Packages /> } />
              <Route path="contact" element={ <Contact /> } />
              <Route path="portfolio" element={ <Portfolio /> } />
              {/* <Route path="carousel" element={ <Carousel /> } /> */}
            </Routes>
          </Layout>
          {/* <Admin basename='/admin'>
            <Resource name='admin-login' list={AdminLogin} />
          </Admin> */}
        </BrowserRouter>
      </>
  )
}

export default App
 