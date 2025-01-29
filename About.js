const About = () => {
    return (
        <section id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="education-section">
                    <h3>Education</h3>
                    <div className="education-item">
                        <h4>B.Tech (AI & DS)</h4>
                        <p>Sri Eshwar College of Engineering (2023–2027)</p>
                        <p>CGPA: 7.5/10</p>
                    </div>
                    <div className="education-item">
                        <h4>HSC</h4>
                        <p>Shree Sarasswathi Vidhyaah Mandheer School (2021–2023)</p>
                        <p>Percentage: 73.5%</p>
                    </div>
                    <div className="education-item">
                        <h4>SSLC</h4>
                        <p>Shree Sarasswathi Vidhyaah Mandheer School (2020–2021)</p>
                        <p>Percentage: 78%</p>
                    </div>
                </div>
                <div className="skills-section">
                    <h3>Skills</h3>
                    <div className="skills-container">
                        <span className="skill-item">C | </span>
                        <span className="skill-item">C++ | </span>
                        <span className="skill-item">Python | </span>
                        <span className="skill-item">HTML | </span>
                        <span className="skill-item">CSS | </span>
                        <span className="skill-item">Java | </span>
                        <span className="skill-item">SQL | </span>
                        <span className="skill-item">VS Code | </span>
                        <span className="skill-item">Canva | </span>
                        <span className="skill-item">GitHub</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
