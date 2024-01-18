
import { Button, Modal, ModalOverlay, ModalContent, useDisclosure, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CircularProgress from '@mui/material/CircularProgress';


const LoadingModal = () => {
    return (
        <div>
        <Modal
            onClose={() => {}}
            motionPreset='slideInBottom'
            isOpen={true}
            blockScrollOnMount={false}
            closeOnOverlayClick={true} >
            <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px)'
            />
            <ModalContent className="fixed w-screen h-screen flex items-center justify-center" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <motion.div className="w-[130px] h-[100px] bg-white flex items-center justify-center rounded-md"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                animate={{ opacity: 1 }}
            >
                <div className="div flex flex-col items-center justify-center space-y-2">
                    <CircularProgress color="secondary" size="2rem"/>
                    <span className="font-mono text-sm"> Formulation In Progress... </span>
                </div>
            </motion.div>
            </ModalContent>
        </Modal>
        </div>
    );
}

export default LoadingModal;