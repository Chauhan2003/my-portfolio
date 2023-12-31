import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My technical Level</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    
                    onClick={() => toggleTab(1)}

                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    
                    onClick={() => toggleTab(2)}

                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">


                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Engineering in CS</h3>
                                <span className="qualification__subtitle">
                                    Chitkara University Punjab
                                </span>
                                <div className="qualification__calender">
                                <i class='bx bxs-calendar-alt'></i>{" "}
                                    2021 - 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12th</h3>
                                <span className="qualification__subtitle">
                                    Ryan International School, Shahjahanpur(UP)
                                </span>
                                <div className="qualification__calender">
                                <i class='bx bxs-calendar-alt'></i>{" "}
                                    2021
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th</h3>
                                <span className="qualification__subtitle">
                                    St. Xavier Secondary School, Balrampur(UP)
                                </span>
                                <div className="qualification__calender">
                                <i class='bx bxs-calendar-alt'></i>{" "}
                                    2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Student</h3>
                                <span className="qualification__subtitle">
                                    Chitkara University Punjab
                                </span>
                                <div className="qualification__calender">
                                    <i class='bx bxs-calendar-alt'></i>{" "}
                                    2021 - 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </section>
    );
};

export default Qualification;
