import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { AmbientForm } from '../Ambient';
import { FormItem } from '../Item';
import styles from "./modal.module.scss";



const ModalComponent = ({ open, onClose, modalOption }) => {


    return (
        <div>

            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.box_form} >
                    {modalOption === 1 && (
                        <FormItem />
                    )}
                    {modalOption === 2 && (
                        <AmbientForm />
                    )}

                </Box>

            </Modal>
        </div>
    )
}

export default ModalComponent
