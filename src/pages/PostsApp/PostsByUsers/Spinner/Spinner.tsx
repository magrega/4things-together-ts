import { FC } from 'react';
import { CircularProgress } from "@mui/material";
import './Spinner.css';

const Spinner: FC = () => {
    return (
        <div className="spinner">
            <CircularProgress color="success" />
        </div>
    );
};

export default Spinner;