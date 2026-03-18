import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const skills = [
    "REST APIs", "Database Design", "Performance Optimization", "Spring Boot",
    "PHP & Laravel", "MySQL / PostgreSQL", "Authentication", "Testing",
    "Git", "Docker", "HTML & CSS", "JavaScript", "React", "Angular"
];

const Hero = () => {
    return (
        <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5">
            {/* Background layer with subtle texture or overlay */}
            <div
                className="position-absolute w-100 h-100 top-0 left-0"
                style={{
                    background: 'radial-gradient(circle at center, rgba(13, 13, 13, 0.8) 0%, rgba(13, 13, 13, 1) 100%)',
                    zIndex: -1
                }}
            />

            <Container className="py-5">
                <Row className="align-items-center">
                    <Col lg={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <h5 className="text-uppercase tracking-widest text-peaky-gold mb-3" style={{ letterSpacing: '5px' }}>
                                By Order of the Peaky Blinders
                            </h5>
                            <h1 className="display-1 fw-bold mb-4" style={{ lineHeight: '1.1', color: 'var(--text-ivory)' }}>
                                Hi, I'm <span className="text-peaky-gold">Talifhani Luvhimbi</span>
                            </h1>
                            <p className="lead fs-4 mb-5" style={{ maxWidth: '650px', color: 'var(--text-muted)' }}>
                                I’m a junior backend developer building my skills through real projects and continuous learning.
                                I have a solid foundation in backend development and enjoy turning ideas into working APIs and useful backend features.
                            </p>
                            <div className="d-flex gap-3 mb-5">
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-peaky fs-5"
                                >
                                    View Projects
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-outline-secondary text-uppercase border-secondary px-4 d-flex align-items-center text-white"
                                    style={{ borderRadius: '0', letterSpacing: '1px' }}
                                >
                                    Let's Talk
                                </motion.a>
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="peaky-card p-4 p-md-5"
                        >
                            <h3 className="h4 text-peaky-gold mb-4 text-uppercase border-bottom pb-2" style={{ borderColor: 'var(--border-color) !important' }}>
                                Skills & Specialties
                            </h3>
                            <div className="d-flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <Badge
                                        key={index}
                                        bg="transparent"
                                        className="border border-secondary text-white fw-normal px-3 py-2 fs-6"
                                        style={{ borderRadius: '0', border: '1px solid rgba(197, 160, 89, 0.3) !important' }}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/* Social Sidebar */}
            <div className="position-absolute end-0 top-50 translate-middle-y d-none d-lg-flex flex-column gap-4 pe-5">
                {['LI', 'GH', 'TW'].map((item) => (
                    <a key={item} href="#" className="text-peaky-gold text-decoration-none fw-bold small hover-opacity">
                        {item}
                    </a>
                ))}
            </div>

            <style>{`
        .hover-opacity:hover {
          opacity: 0.7;
        }
      `}</style>
        </section>
    );
};

export default Hero;
