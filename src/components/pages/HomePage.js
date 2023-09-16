import Banner from '../Banner';
import TopRatedMovies from '../TopRatedMovies.js';
import Footer from '../Footer.js';
import Popular from '../PopularMovies';
import Upcoming from '../UpcomingMovies';
function HomePage() {
    return (
        <div className='bannerWidth'>
            <div className='cover'>
                <Banner />
                <TopRatedMovies />
                <Popular />
                <Upcoming />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;