import { Link } from 'react-router-dom';
import LogoTitle from '../..//assets/images/logo-s.png';
import './index.scss';
import { useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'a', 'r', 'e', 's']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r','.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters  />
                <br />
                Web developer
                </h1>
                <h2>Fronted Developer / JavaScript Expert / YouTuber</h2>
                <Link to="contar" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home