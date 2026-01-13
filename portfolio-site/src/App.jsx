import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <Header />
      <div className="page-content d-flex flex-column justify-content-between">
        
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
