
import './App.css';
import { Banner } from './Banner';
import CsvLoader from './CsvLoader';
import { Footer } from './Footer';
import { Header } from './Header';
import { News } from './News';
import NewsViewer from './NewsViewer';
import { PredictLink } from './PredictLink';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      {/* <News></News> */}

      <NewsViewer></NewsViewer>
      <PredictLink></PredictLink>

      <Footer></Footer>



    </div>
  );
}

export default App;
