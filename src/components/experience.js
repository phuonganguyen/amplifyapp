import React,{Component} from 'react';

export default class Experience extends Component{
    render(){
        return(
            <section id="experience" className="p-3 p-lg-5 d-flex align-items-center" data-section="experience">
                <div className="w-100">
                    <h2 className="mb-5 title">Experience</h2>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Software Engineer</h3>
                            <div className="subheading mb-3">
                                <a href="https://nexcel.vn" target="_blank">Nexcel Solutions</a>
                            </div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span>Dec 2016 - Present</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Software Developer</h3>
                            <div className="subheading mb-3">
                                <a href="https://memberson.com" target="_blank">Memberson</a>
                            </div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span>Sep 2016 - Oct 2016</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Associate Software Engineer</h3>
                            <div className="subheading mb-3">
                                <a href="https://www.dxc.technology/vn_en" target="_blank">CSC (DXC Technology)</a>
                            </div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span>Sep 2014 - Sep 2016</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Intern</h3>
                            <div className="subheading mb-3">HLV Solutions</div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span>Jan 2013 - Sep 2013</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}