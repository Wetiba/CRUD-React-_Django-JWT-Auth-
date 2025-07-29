import React, { useState } from "react";
import API from "../api";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

function Register({ onRegistered }) {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("register/", formData);
        onRegistered();
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, width: 350, margin: "40px auto" }}>
            <Typography variant="h5" mb={2} align="center">Register</Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField fullWidth label="Username" margin="normal"
                           value={formData.username}
                           onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                           required
                />
                <TextField fullWidth label="Email" type="email" margin="normal"
                           value={formData.email}
                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                           required
                />
                <TextField fullWidth label="Password" type="password" margin="normal"
                           value={formData.password}
                           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                           required
                />
                <Button fullWidth variant="contained" sx={{ mt: 2 }} type="submit">Register</Button>
            </Box>
        </Paper>
    );
}

export default Register;
