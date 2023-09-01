import { Box } from '@mui/material';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Message = (props) => {
  const { message, status } = props
  const [showAlert, setShowAlert] = useState(false)

  const succesAlert = () => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const errorAlert = () => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  React.useEffect(() => {
    setShowAlert(true)
  }, []);

  React.useEffect(() => {
    if (showAlert) {
      switch (status) {
        case "error":
          errorAlert()
          break;

        case "success":
          succesAlert()
          break;
      }
    }
  }, [showAlert]);

  return (
    <Box sx={{ height: "100vh" }}>
      <ToastContainer />
    </Box>



  );
};

export default Message;
