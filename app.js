const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar">
            <div className="nav-brand">SR</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
                <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
            </button>
        </nav>
    );
};

const App = () => {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <HashRouter>
            <div className="app-container">
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer>
                    <div className="social-links">
                        <a href="https://github.com/shaam31" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:shaam.sr2023ai-ds@sece.ac.in">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="tel:8610272665">
                            <i className="fas fa-phone"></i>
                        </a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Shaam SR . All rights reserved.</p>
                </footer>
            </div>
        </HashRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
