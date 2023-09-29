import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainBanner from './Components/MainBanner';

function App() {
    return (
        <div>
            <div className="sm:w-full lg:w-full xl:h-[1379px] bg-[#252F3D]">
                <Header />
                <div className=" lg:px-16 xl:px-32 bg-white">
                    <Banner />
                    <MainBanner />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
