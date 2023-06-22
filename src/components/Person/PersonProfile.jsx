import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./styles/person.profile.module.scss";

const PersonProfile = () => {
  return (
    <Box className={styles.box_main}>
      <Box className={styles.box_inputs}>
        <Box className={styles.box_inputs_fields}>
          <TextField
            className={styles.inputs_fields}
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        <Box className={styles.box_inputs_fields}>
          <TextField
            className={styles.inputs_fields}
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        <Box className={styles.box_inputs_fields}>
          <TextField
            className={styles.inputs_fields}
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Box>

      <Box className={styles.box_inputs}>
        <Box className={styles.box_inputs_fields}>
          <TextField
            className={styles.inputs_fields}
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        <Box className={styles.box_inputs_fields}>
          <TextField
            className={styles.inputs_fields}
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box className={styles.box_inputs_fields}>
          <TextField
            className={styles.inputs_fields}
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PersonProfile;
