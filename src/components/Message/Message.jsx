import React from "react";
import { Box, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Message = (path) => {
  const navigate = useNavigate();

  const handleAlertClose = () => {
    console.log(path.path);
    navigate(path.path);
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
          Registro creado satisfactoriamente.
        </Alert>
      </Box>
    </Box>
  );
};

export default Message;
