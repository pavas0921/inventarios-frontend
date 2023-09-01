import CloseIcon from "@mui/icons-material/Close";
import { Alert, Box, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Message = (props) => {
  const navigate = useNavigate();


  const handleAlertClose = () => {
    console.log(props.path);
    navigate(props.path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
      }}
    >
      <Box sx={{ width: "400px" }}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.message}
        </Alert>
      </Box>
    </Box>
  );
};

export default Message;
