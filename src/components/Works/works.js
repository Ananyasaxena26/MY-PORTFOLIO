import React from 'react';
import './works.css';

import Portfolio1 from '../../assests/portfolio-1.png';
import Portfolio2 from '../../assests/portfolio-2.png';
import Portfolio3 from '../../assests/portfolio-3.png';
import Portfolio4 from '../../assests/portfolio-4.png';
import Portfolio5 from '../../assests/portfolio-5.png';
import Portfolio6 from '../../assests/portfolio-6.png';

const Works = () => {
    return (
        <section id="works">
            <h2 className='worksTitle'>MY PORTFOLIO</h2>
            <span className='worksDesc'>
                I take pride in paying attention to the smallest details and delivering polished, professional work.
            </span>
            <div className='worksImgs'> {/* ✅ fixed class name */}
                <img src={Portfolio1} alt="Project 1" className="worksImg" />
                <img src={Portfolio2} alt="Project 2" className="worksImg" />
                <img src={Portfolio3} alt="Project 3" className="worksImg" />
                <img src={Portfolio4} alt="Project 4" className="worksImg" />
                <img src={Portfolio5} alt="Project 5" className="worksImg" />
                <img src={Portfolio6} alt="Project 6" className="worksImg" />
            </div>
            <button className='workBtn'>See More</button>
        </section>
    );
};

export default Works;
