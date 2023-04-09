import { CircularProgress } from "@mui/material";
import { FC } from 'react';
import './Spinner.css';

const Spinner: FC = () => {
    return (
        <div className="spinner">
            <CircularProgress color="success" />
        </div>
    );
};

export default Spinner;