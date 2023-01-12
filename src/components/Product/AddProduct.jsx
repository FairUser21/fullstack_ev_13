import React, { useContext } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { authContext } from "../Contexts/AuthContext";
import { productContext } from "../Contexts/ProductContext";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const { AddProduct, error } = useContext(productContext);

  return (
    <div>
      {user === "admin@admin.com" ? (
        <Box
          sx={{
            width: "40vw",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ m: 2 }}>
            Add new product
          </Typography>
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
          />

          <input
            type="file"
            // hidden
            name="image"
          />

          <Button
            sx={{
              m: 1,
            }}
            variant="outlined"
            fullWidth
            size="large"
          >
            ADD PRODUCT
          </Button>
          {error ? (
            <Alert severity="error">{error.map((item) => item)}</Alert>
          ) : null}
        </Box>
      ) : (
        <>You are not admin</>
      )}
    </div>
  );
};

export default AddProduct;
