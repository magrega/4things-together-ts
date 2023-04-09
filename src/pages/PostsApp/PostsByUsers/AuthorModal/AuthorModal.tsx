import { Box, Modal, Typography } from '@mui/material';
import { User } from '../Post/Post';
import Spinner from '../Spinner/Spinner';
import './AuthorModal.css';

interface IModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userModal: User | null;
  isModalLoading: boolean;
}

export default function AuthorModal({ open, setOpen, userModal, isModalLoading }: IModalProps) {

  const handleModalClose = () => {
    setOpen(false);
  }

  const content = <>
    <Typography variant="h6" component="h2">
      {userModal?.name}
    </Typography>

    <Typography marginTop={2}>
      {userModal?.address}
    </Typography>

    <Typography marginTop={2}>
      {userModal?.email}
    </Typography>

    <Typography marginTop={2}>
      {userModal?.phone}
    </Typography>
  </>

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="box">
        {isModalLoading ? <Spinner /> : content}
      </Box>
    </Modal>
  );
}