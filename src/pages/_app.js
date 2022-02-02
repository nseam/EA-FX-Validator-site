import '../styles/globals.scss';

import Footer from '../components/Footer/Footer.js';
//import NodeStatus from "../components/Debug/NodeStatus";
import Header from "../components/Header/Header";
import Details from "../components/Details/Details";

export default ({Component, pageProps, ...appProps}) => {
  return (
    <div className="App">
      <Header/>
      <Component {...pageProps} />{" "}
      <Footer/>
    </div>
  );
}
