import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="bg-peaky-dark border-top border-bottom" style={{ borderColor: 'var(--border-color) !important' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} className="mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="position-relative picture-hover-container"
                        >
                            <div
                                className="peaky-card overflow-hidden position-relative"
                                style={{ height: '500px', border: '5px solid var(--accent-gold)' }}
                            >
                                {/* Layer 1: Peaky Blinders Character version (Bottom) */}
                                <div
                                    className="position-absolute top-0 left-0 w-100 h-100"
                                    style={{
                                        background: 'url("/images/Peaky.jpeg") center/cover no-repeat',
                                        filter: 'grayscale(20%) sepia(10%) contrast(110%)',
                                        zIndex: 1
                                    }}
                                />

                                {/* Layer 2: Professional Photo (Top) - Fades out on hover */}
                                <motion.div
                                    className="position-absolute top-0 left-0 w-100 h-100"
                                    initial={{ opacity: 1 }}
                                    whileHover={{ opacity: 0 }}
                                    transition={{ duration: 2.5, ease: "easeInOut" }}
                                    style={{
                                        background: 'url("/images/Tali.jfif") center/cover no-repeat',
                                        filter: 'contrast(105%)',
                                        zIndex: 2
                                    }}
                                />

                                <div
                                    className="position-absolute bottom-0 start-0 w-100 p-4"
                                    style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', zIndex: 3 }}
                                >
                                    <h3 className="mb-0">THE MASTERMIND</h3>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div
                                className="position-absolute top-0 end-0 mt-n3 me-n3 d-none d-lg-block"
                                style={{ width: '100px', height: '100px', borderTop: '2px solid var(--accent-gold)', borderRight: '2px solid var(--accent-gold)', zIndex: 1 }}
                            />
                        </motion.div>
                    </Col>
                    <Col lg={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="ps-lg-5"
                        >
                            <h2 className="section-title text-uppercase mb-4">The Narrative</h2>
                            <p className="lead text-peaky-gold mb-4 italic">"Intelligence is a very valuable thing, innit, my friend?"</p>
                            <p className="mb-4 fs-5 text-muted">
                                I am Talifhani Luvhimbi, a developer who operates with the cold efficiency and strategic depth of a Shelby. I don't just build websites; I establish digital empires. My approach is meticulous, my code is sharp, and my ambition knows no bounds.
                            </p>
                            <p className="mb-4 fs-5 text-muted">
                                With a focus on premium aesthetics and robust architecture, I specialized in transforming complex problems into elegant, high-impact solutions. Whether it's a sleek frontend or a powerful backend, I deliver with the authority of the Peaky Blinders.
                            </p>

                            <div className="mt-5 p-4 border border-peaky-gold bg-dark d-inline-block">
                                <h4 className="text-peaky-gold text-uppercase mb-2 h6 tracking-widest">Current Status</h4>
                                <p className="mb-0 fs-5 text-white fw-bold">Open to New Strategic Alliances & Commissions</p>
                                <p className="small text-muted mt-2">Seeking the next project to expand the digital territory.</p>
                            </div>

                            <div className="row g-4 mt-2">
                                {[
                                    { title: 'Strategy', desc: 'Planning every move before the first line of code.' },
                                    { title: 'Authority', desc: 'Building systems that command attention and respect.' },
                                    { title: 'Ambition', desc: 'Constantly evolving and pushing digital boundaries.' }
                                ].map((item, i) => (
                                    <div key={i} className="col-md-4">
                                        <h4 className="text-peaky-gold h5 mb-2">{item.title}</h4>
                                        <p className="small text-muted">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
