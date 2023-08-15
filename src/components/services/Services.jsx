import React, { useState } from 'react'
import "./Services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="services section" id='service'>
            <h2 className='section__title'>
                Services
            </h2>
            <span className='section__subtitle'>What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i class='bx bx-code-alt services__icon'></i>
                        <h3 className="services__title">Frontend <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => {
                        toggleTab(1)
                    }}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => {
                                toggleTab(0)
                            }} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Client Side Designer</h3>
                            <p className="services__modal-description">With a wealth of experience in frontend projects, I take immense pride in offering unparalleled quality work and services to my clients. My portfolio is a testament to my proficiency.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">HTML / CSS</p>
                                    </i>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">Javascript</p>
                                    </i>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">React.js</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i class='bx bx-code-curly services__icon'></i>
                        <h3 className="services__title">Backend <br /> Development</h3>
                    </div>

                    <span onClick={() => {
                        toggleTab(2)
                    }} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => {
                                toggleTab(0)
                            }} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Server side Developer</h3>
                            <p className="services__modal-description">With a good understanding of backend technologies, I specialize in developing efficient systems that form the backbone of applications. From database design to server-side logic.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">Node.js / Express.js</p>
                                    </i>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">MongoDB</p>
                                    </i>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">MYSQL</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i class='bx bx-terminal services__icon'></i>
                        <h3 className="services__title">Software <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => {
                        toggleTab(3)
                    }}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => {
                                toggleTab(0)
                            }} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Software Developer</h3>
                            <p className="services__modal-description">As a good software developer, I am driven by a passion for crafting code that brings ideas to life. With a diverse background in various programming languages and technologies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">Java / DSA</p>
                                    </i>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">Python</p>
                                    </i>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">
                                        <p className="servies__modal-info">Git / OS</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
