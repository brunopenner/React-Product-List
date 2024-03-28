import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'a', 'r', 'e', 's']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={letterClass}>H</span>
                <br /> I'm
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Fronted Developer / JavaScript Expert / YouTuber</h2>
                <Link to="contar" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home