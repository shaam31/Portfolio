const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-header">
                        <i className="fas fa-vote-yea"></i>
                        <h3>Cafeteria Management System</h3>
                    </div>
                    <p className="project-description">
                    A Cafeteria Management System (CMS) is a software application designed to automate and streamline cafeteria operations.
                    It helps manage orders, billing, inventory, staff, and customer experience efficiently. 
                        
                
                    </p>
                </div>
                <div className="project-card">
                    <div className="project-header">
                        <i className="fas fa-bolt"></i>
                        <h3>Educational App for Differently-Abled Children</h3>
                    </div>
                    <p className="project-description">
                    An Educational App for Differently-Abled Children enhances learning accessibility through speech-to-text, text-to-speech,sign language support, and gesture navigation.
                    It provides interactive content, adaptive assessments, and AI-powered assistance to support diverse learning needs.
                    The app ensures inclusivity using Flutter, Firebase, and AI models, making education engaging for all.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
