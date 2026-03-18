import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const workExperience = [
    {
        title: "Java Developer Intern",
        company: "First National Bank (FNB)",
        period: "2024/08 until 2025/07",
        description: "Gained practical exposure to backend development and enterprise systems. Worked with Java, Spring Boot, APIs, and basic testing principles while contributing to internal tools and learning industry best practices."
    },
    {
        title: "Software Development Learner",
        company: "Geeks4Learning",
        period: "2023/07 until 2024/07",
        description: "Built foundational skills in backend development, focusing on Java and Springboot. Developed small projects, learned database management with PostgreSQL, and understood web application architecture and best practices."
    }
];

const education = [
    {
        title: "Diploma in Computer Science",
        institution: "Tshwane University of Technology",
        year: "2024",
        description: "Studied core programming concepts, database design, problem-solving, and backend development fundamentals. Completed several academic and personal projects."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="bg-peaky-dark border-top border-bottom" style={{ borderColor: 'var(--border-color) !important' }}>
            <Container>
                <div className="mb-5 text-center">
                    <h2 className="section-title text-uppercase d-inline-block">The Credentials</h2>
                </div>

                <Row className="g-5">
                    <Col lg={6}>
                        <h3 className="h4 text-peaky-gold mb-4 text-uppercase border-bottom pb-2 d-inline-block" style={{ borderColor: 'var(--border-color) !important' }}>
                            Work Experience
                        </h3>
                        <div className="d-flex flex-column gap-5 mt-4">
                            {workExperience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="position-relative ps-4"
                                    style={{ borderLeft: '2px solid var(--accent-gold)' }}
                                >
                                    <div
                                        className="position-absolute"
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            backgroundColor: 'var(--accent-gold)',
                                            left: '-7px',
                                            top: '0'
                                        }}
                                    />
                                    <h4 className="h5 text-white mb-1">{job.title}</h4>
                                    <p className="text-peaky-gold small mb-2">{job.company} • {job.period}</p>
                                    <p className="text-muted">{job.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Col>

                    <Col lg={6}>
                        <h3 className="h4 text-peaky-gold mb-4 text-uppercase border-bottom pb-2 d-inline-block" style={{ borderColor: 'var(--border-color) !important' }}>
                            Education
                        </h3>
                        <div className="d-flex flex-column gap-5 mt-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="peaky-card p-4"
                                >
                                    <h4 className="h5 text-white mb-1">{edu.title}</h4>
                                    <p className="text-peaky-gold small mb-3">{edu.institution} • {edu.year}</p>
                                    <p className="text-muted mb-0">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;
