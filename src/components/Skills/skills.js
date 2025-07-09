import React from 'react';
import './skills.css';
import UIDesign from '../../assests/ui-design.png';
import WebDesign from '../../assests/website-design.png';
import AppDesign from '../../assests/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am skilled and passionate web designer with experience</span>

            <div className='skillBars'> {/* ✅ All three .skillBar blocks must be inside this */}
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text,you can write your own content here.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Design Design</h2>
                        <p>This is a demo text,you can write your own content here</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>App Desgin</h2> {/* ✅ You had an empty heading here */}
                        <p>This is a demo text,you can write your own content here</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;

