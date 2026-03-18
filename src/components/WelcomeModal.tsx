import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const WelcomeModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        setShow(false);
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            backdrop="static"
            keyboard={false}
            className="peaky-modal"
        >
            <div className="bg-peaky-dark border border-peaky-gold p-1">
                <div className="border border-peaky-gold m-1 p-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-peaky-gold text-uppercase mb-4 tracking-widest h1" style={{ fontSize: '2.5rem' }}>
                            By Order of the Strategic Genius
                        </h2>

                        <div className="mb-4">
                            <p className="fs-5 text-white mb-3 montserrat">
                                Welcome to the digital empire of <span className="text-peaky-gold fw-bold">Talifhani Luvhimbi</span>.
                            </p>
                            <p className="text-muted fs-6 italic mb-4">
                                This portfolio is heavily influenced by the grit, strategic brilliance, and aesthetic of the <span className="text-peaky-gold">Peaky Blinders</span>.
                                Every word, pixel, and transition is crafted to reflect the authority and ambition of the Shelby era.
                            </p>
                            <p className="small text-white opacity-50 mb-4">
                                Explore the ventures, witness the craftsmanship, and understand the logic.
                            </p>
                        </div>

                        <Button
                            variant="peaky"
                            className="px-5 py-2 text-uppercase fw-bold"
                            onClick={handleClose}
                            style={{ letterSpacing: '3px' }}
                        >
                            Enter the Territory
                        </Button>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .peaky-modal .modal-content {
                    background: transparent;
                    border: none;
                }
                .tracking-widest {
                    letter-spacing: 4px;
                }
                .montserrat {
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>
        </Modal>
    );
};

export default WelcomeModal;
