import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-peaky-dark py-5 border-top" style={{ borderColor: 'var(--border-color) !important' }}>
            <Container>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
                    <div className="text-center text-md-start">
                        <h3 className="h4 mb-1">TALIFHANI <span style={{ color: 'var(--text-ivory)' }}>LUVHIMBI</span></h3>
                    </div>



                    <div className="text-center text-md-end text-muted small">
                        &copy; {new Date().getFullYear()} Talifhani Luvhimbi. <br />
                        Built with ruthlessness and React.
                    </div>
                </div>
            </Container>
            <style>{`
        .hover-peaky-gold:hover {
          color: var(--accent-gold) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
