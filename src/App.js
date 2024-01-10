import Categories from './components/Categories';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      
        <Navbar />
        <div className='w-100 md:flex bg-slate-200'>
                <div className="col-lg-5 "><Categories /></div>
                <div className="col-lg-7 md:-ml-5"><Jobs/></div>
            </div>
     
    </div>
  );
}

export default App;
