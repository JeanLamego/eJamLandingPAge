import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
    return (
        <div>
            <div className="sm:w-full lg:w-[1500px] lg:h-[1379px] bg-[#252F3D]">
                <Header />
                <div className="bg-white">
                    <Banner />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
