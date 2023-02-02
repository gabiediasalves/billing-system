import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Wallet from './components/pages/Wallet'
import Debtor from './components/pages/Debtor'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NewWallet from './components/pages/NewWallet'

function App() {
  return (
      <Router>
    <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/debtor' element={<Debtor />} />
          <Route path='/newwallet' element={<NewWallet/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
