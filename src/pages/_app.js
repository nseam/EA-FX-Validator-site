import '../styles/globals.css';

import Footer from '../components/Footer/Footer.js';
import ContaboStatus from "../components/Debug/ContaboStatus";
import Header from "../components/Header/Header";
import Details from "../components/Details/Details";

export default ({Component, pageProps, ...appProps}) => {
  return (
    <div className="App">
      <Header/>
      <ContaboStatus/>
      <Component {...pageProps} />{" "}
      <Footer/>
    </div>
  );
}
