import { Container, Row, Col, Card, Badge, Tabs, Tab } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveLink: string;
    githubLink: string;
}

const uxProjects: Project[] = [
    {
        title: "Makuya Civils and Projects",
        description: "A professional corporate website developed for a leading construction and civil engineering firm, focusing on service showcase and client lead generation.",
        tags: ["Angular", "Bootstrap", "Business"],
        image: "/images/makuya_civils_and_projects.png",
        liveLink: "https://makuya-civils-and-projectsv2.vercel.app/",
        githubLink: "#"
    },
    {
        title: "VCR Diesel Tech",
        description: "A clean, high-performance website for a diesel technology specialist, highlighting technical expertise and industrial services.",
        tags: ["React", "Vite", "Boostrap", "Business"],
        image: "/images/vcr.png",
        liveLink: "https://vcrtech.netlify.app/",
        githubLink: "#"
    },
    {
        title: "A-Reece Fan Website",
        description: "As a massive fan of A-Reece, I built this dynamic fan hub to celebrate his music. It features his full discography, latest media updates, and a high-energy interface designed for the fans.",
        tags: ["React", "Vite", "Personal Project"],
        image: "/images/areece.png",
        liveLink: "https://areece-bsfc.vercel.app/",
        githubLink: "#"
    }
];

const appProjects: Project[] = [
    {
        title: "Venda Learn",
        description: "A comprehensive Tshivenda learning application. Master the language through gamified lessons, interactive stories, and real-time practice with native speakers.",
        tags: ["React", "Vite", "Firebase", "Bootstrap"],
        image: "/images/vendalearn.png",
        liveLink: "https://venda-learn.vercel.app/",
        githubLink: "https://github.com/luvhimbi/venda-learn"
    },
    {
        title: "ConTech",
        description: "A powerful tool for construction businesses to manage projects, clients, and progress. Features project tracking, lead management, and automated quoting/invoicing.",
        tags: ["React", "Bootstrap", "Firebase", "Vite"],
        image: "/images/contech.png",
        liveLink: "https://con-tech-gilt.vercel.app/",
        githubLink: "https://github.com/luvhimbi/ConTech"
    }
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
    <Col lg={4} md={6} className="mb-4">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-100"
        >
            <Card className="peaky-card h-100 text-white border-0 overflow-hidden">
                <div className="position-relative" style={{ height: '220px' }}>
                    <Card.Img
                        variant="top"
                        src={project.image}
                        className="w-100 h-100"
                        style={{
                            objectFit: 'cover',
                            filter: 'contrast(110%) brightness(0.7)'
                        }}
                    />
                    <div className="position-absolute top-0 end-0 p-3 d-flex gap-2">
                        {project.githubLink !== "#" && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover-peaky-gold transition-all bg-dark rounded-circle p-2 shadow-sm"><Github size={18} /></a>}
                        {project.liveLink !== "#" && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover-peaky-gold transition-all bg-dark rounded-circle p-2 shadow-sm"><ExternalLink size={18} /></a>}
                    </div>
                </div>
                <Card.Body className="p-4 bg-peaky-dark border-top border-secondary d-flex flex-column" style={{ borderTopColor: 'var(--border-color) !important' }}>
                    <Card.Title className="h5 text-peaky-gold mb-3">{project.title}</Card.Title>
                    <Card.Text className="text-muted small mb-4 flex-grow-1">
                        {project.description}
                    </Card.Text>
                    <div className="d-flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag: string) => (
                            <Badge
                                key={tag}
                                bg="transparent"
                                className="border border-secondary text-peaky-gold fw-normal px-2 py-1 x-small"
                                style={{ borderRadius: '0' }}
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    </Col>
);

const Projects = () => {
    return (
        <section id="projects" className="bg-peaky-dark py-5">
            <Container>
                <div className="text-center mb-5 pt-4">
                    <h2 className="section-title text-uppercase d-inline-block">The Ventures</h2>
                    <p className="text-muted mt-3 fs-5 italic">"Success is not final, failure is not fatal: it is the courage to continue that counts."</p>
                </div>

                <div className="peaky-tabs-container">
                    <Tabs
                        defaultActiveKey="apps"
                        id="project-tabs"
                        className="mb-5 justify-content-center peaky-tabs border-0"
                    >
                        <Tab eventKey="apps" title="WEB & MOBILE APPS" className="border-0">
                            <Row className="justify-content-center">
                                {appProjects.map((project, index) => (
                                    <ProjectCard key={index} project={project} index={index} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="ux" title="UX & CLIENT DESIGNS" className="border-0">
                            <Row className="justify-content-center">
                                {uxProjects.map((project, index) => (
                                    <ProjectCard key={index} project={project} index={index} />
                                ))}
                            </Row>
                        </Tab>
                    </Tabs>
                </div>

                <div className="text-center mt-5">
                    <motion.a
                        href="https://github.com/luvhimbi"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-peaky"
                    >
                        Explore All Records
                    </motion.a>
                </div>
            </Container>

            <style>{`
                .peaky-tabs .nav-link {
                    color: rgba(255, 255, 255, 0.6);
                    background: transparent;
                    border: none;
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                    padding: 10px 30px;
                    transition: all 0.3s ease;
                    border-bottom: 2px solid transparent;
                }
                .peaky-tabs .nav-link:hover {
                    color: var(--accent-gold);
                }
                .peaky-tabs .nav-link.active {
                    color: var(--accent-gold) !important;
                    background: transparent !important;
                    border-bottom: 2px solid var(--accent-gold) !important;
                }
                .hover-peaky-gold:hover {
                    color: var(--accent-gold) !important;
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                .x-small {
                    font-size: 10px;
                }
                .italic {
                    font-style: italic;
                }
            `}</style>
        </section>
    );
};

export default Projects;
