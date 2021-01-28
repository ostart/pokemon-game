// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header title="Homework #2" descr="This is my Homework #2" />
      <Layout id="1" title="First Layout" descr="My First Layout" urlBg="../src/assets/bg2.jpg" />
      <Layout id="2" title="Second Layout" descr="My Second Layout" colorBg="green"/>
      <Layout id="3" title="Third Layout" descr="My Third Layout" urlBg="../src/assets/bg1.jpg" />
      <Footer />
    </>
  );
}

export default App;
