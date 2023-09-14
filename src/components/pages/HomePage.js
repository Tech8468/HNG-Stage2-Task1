import Banner from '../Banner';
import Feature from '../Feature';
import Footer from '../Footer';
import NewArrival1 from '../NewArrival-1';
import NewArrival2 from '../NewArrival-2';
function HomePage() {
    return (
        <div className='bannerWidth'>
            <div className='cover'>
                <Banner />
                <Feature />
                <NewArrival1 />
                <NewArrival2 />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;