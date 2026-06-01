import Footer from './components/Footer';
import Header from './components/Header';
import Timer from './components/Timers';

const App = (): JSX.Element => {
  return (
    <div className="box-border bg-gray-50">
      <Header />
      <Timer />
      <Footer />
    </div>
  );
};

export default App;
