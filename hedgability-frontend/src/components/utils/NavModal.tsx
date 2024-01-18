import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

    interface Props {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    }

    const NavModal = ({ isOpen, onClose, onOpen }: Props) => {
    const { pathname } = useLocation();

    const [color, setColor] = useState('bg-gradient-to-r from-yellow-600 to-red-600');
    const [textColor, setTextColor] = useState('text-slate-300');

    useEffect(() => {
        switch (pathname) {
        case '/design':
            setColor('bg-gradient-to-r from-blue-300 to-blue-700');
            setTextColor('text-blue-300');
            break;
        case '/playground':
            setColor('bg-gradient-to-r from-pink-300 to-pink-700');
            setTextColor('text-pink-300');
            break;
        case '/docs':
            setColor('bg-gradient-to-r from-green-300 to-green-700');
            setTextColor('text-green-300');
            break;
        default:
            setColor('bg-gradient-to-r from-yellow-600 to-red-600');
            setTextColor('text-slate-300');
            break;
        }
    }, [pathname]);

    return (
        <div>
        <Modal
            motionPreset='slideInBottom'
            onClose={onClose} isOpen={isOpen}
            blockScrollOnMount={false}
            closeOnOverlayClick={true} >
            <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px)'
            />
            <ModalContent className="fixed w-screen h-screen flex items-center justify-center" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <motion.div className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                animate={{ opacity: 1 }}
            >

                <div className="relative">
                <div
                    className={`absolute -inset-3 rounded-lg ${color} opacity-75 blur`}
                ></div>
                <div
                    className={`relative flex flex-col h-64 w-64 items-center justify-evenly rounded-lg bg-slate-900 ${textColor} min-w-[250px] min-h-[250px]`}
                >
                    <Link to="/" className={`transform hover:scale-110 ${textColor} flex items-center justify-center`} onClick={onClose}>
                    Home
                    </Link>
                    <Link to="/design" className={`transform hover:scale-110 ${textColor} flex items-center justify-center`} onClick={onClose}>
                    Design
                    </Link>
                    <Link to="/playground" className={`transform hover:scale-110 ${textColor} flex items-center justify-center`} onClick={onClose}>
                    Playground
                    </Link>
                    <Link to="/docs" className={`transform hover:scale-110 ${textColor} flex items-center justify-center`} onClick={onClose}>
                    Docs
                    </Link>
                </div>
                </div>
            </motion.div>
            </ModalContent>
        </Modal>
        </div>
    );
}

export default NavModal;
