import Banner from '../Banner';
import Feature from '../Feature';
import Footer from '../Footer';
import Popular from '../NewArrival-1';
import Upcoming from '../NewArrival-2';
function HomePage() {
    return (
        <div className='bannerWidth'>
            <div className='cover'>
                <Banner />
                <Feature />
                <Popular />
                <Upcoming />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;