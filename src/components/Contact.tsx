import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-peaky-dark border-top" style={{ borderColor: 'var(--border-color) !important' }}>
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title text-uppercase d-inline-block">The Negotiation</h2>
                    <p className="text-muted mt-3 fs-5">I'm available for freelance projects and contract work. Reach out using any of the methods below.</p>
                </div>

                <div className="peaky-card p-4 p-md-5">
                    <Row className="g-4">
                        {[
                            { icon: Mail, label: 'Email', value: 'talifhaniluvhimbi@gmail.com', link: 'mailto:talifhaniluvhimbi@gmail.com' },
                            { icon: Phone, label: 'Phone', value: '072 422 3692', link: 'tel:0724223692' },
                            { icon: MapPin, label: 'Location', value: 'Johannesburg, Gauteng', link: null },
                            { icon: Github, label: 'GitHub', value: 'github.com/luvhimbi', link: 'https://github.com/luvhimbi' },
                            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/TalifhaniLuvhimbi', link: 'https://linkedin.com/in/TalifhaniLuvhimbi' }
                        ].map((item, index) => (
                            <Col md={6} lg={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="d-flex align-items-center gap-3 p-3 h-100 hover-peaky-border"
                                    style={{ border: '1px solid rgba(197, 160, 89, 0.1)' }}
                                >
                                    <div className="p-3 peaky-card border-peaky-gold bg-transparent d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                        <item.icon className="text-peaky-gold" size={24} />
                                    </div>
                                    <div>
                                        <h5 className="mb-0 text-white small text-uppercase fw-bold">{item.label}</h5>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="mb-0 text-muted text-decoration-none hover-peaky-gold small">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="mb-0 text-muted small">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
            <style>{`
        .hover-peaky-border:hover {
          border-color: var(--accent-gold) !important;
          background: rgba(197, 160, 89, 0.05);
        }
        .hover-peaky-gold:hover {
          color: var(--accent-gold) !important;
        }
      `}</style>
        </section>
    );
};

export default Contact;
