import { Link } from 'react-router-dom';

import L from '../../assets/L.jpg';
import M from '../../assets/m.jpg';
import S from '../../assets/s.jpg';


// styles
import './Home.css';

const Home = () => {
    return (
        <main>
            <article className='home__hero__banner' >
                <h1>MY FURNITURE </h1>
            </article>
            <section className='home__section' >
                <Link to="/large">  <div className='pics' >
                    <img src={L} alt="big couch" />
                    <p>BIG STUFF</p>
                </div>
                </Link>

                <Link to="/medium" ><div className='pics' >
                    <img src={M} alt="not so big stuff" />
                    <p>NOT SO BIG STUFF</p>
                </div>
                </Link>
                <Link to="/small" ><div className='pics' >
                    <img src={S} alt="small stuff" />
                    <p>SMALL STUFF</p>
                </div>
                </Link>
            </section>
        </main>
    );
};

export default Home;