import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
    return (
        <Navbar expand="lg" variant="dark" className="fixed-top py-3 border-bottom" style={{
            background: 'linear-gradient(180deg, rgba(13, 13, 13, 1) 0%, rgba(13, 13, 13, 0.8) 100%)',
            backdropFilter: 'blur(10px)',
            borderBottomColor: 'var(--border-color) !important'
        }}>
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3 text-peaky-gold">
                    TALIFHANI LUVHIMBI
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <Nav.Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-uppercase mx-2 px-0 position-relative link-peaky"
                            >
                                <motion.span
                                    whileHover={{ color: 'var(--accent-gold)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item}
                                </motion.span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <style>{`
        .link-peaky::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--accent-gold);
          transition: width 0.3s ease;
        }
        .link-peaky:hover::after {
          width: 100%;
        }
      `}</style>
        </Navbar>
    );
};

export default Navigation;
