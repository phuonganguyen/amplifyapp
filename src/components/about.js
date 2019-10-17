import React,{Component} from 'react';

export default class About extends Component{
    render(){
        return(
            <section id="about" className="p-3 p-lg-5 d-flex align-items-center" data-section="about">
                <div className="w-100">
                    <h2 className="mb-5">About Me</h2>
                    <p>Hello! I'm Phuong, a software engineer based in Ho Chi Minh City, Vietnam specializing in building exceptional, high-quality websites and applications.</p>
                    <p>As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</p>
                    <p>Shortly after graduating from <a href="https://www.hoasen.edu.vn/en" target="_blank">Hoa Sen University</a>, I joined the engineering team at CSC (<a href="https://www.dxc.technology/vn_en" target="_blank">DXC Technology</a>) where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                </div>
            </section>
        );
    }
}