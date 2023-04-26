import { Box, Modal, Typography } from '@mui/material';
import Spinner from '../Spinner/Spinner';
import { IUser } from '../../PostApp.interfaces';
import './AuthorModal.css';

interface IModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  userModal: IUser | undefined;
  isModalLoading: boolean;
  getUserError: string;
}

const AuthorModal = ({ open, setOpen, userModal, isModalLoading, getUserError }: IModalProps) => {

  const handleModalClose = () => {
    setOpen(false);
  }

  const content = getUserError ? <span>{getUserError}</span> : <>
    <Typography variant="h6" component="h2">
      {userModal?.name}
    </Typography>

    <Typography marginTop={2}>
      {`${userModal?.address.city}, ${userModal?.address.street}, ${userModal?.address.suite}`}
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

export default AuthorModal;