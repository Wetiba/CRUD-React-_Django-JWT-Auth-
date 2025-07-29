import React, { useState } from "react";
import API from "../api";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

function Login({ onLogin }) {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await API.post("login/", formData);
        localStorage.setItem("token", res.data.access);

        // Fetch user info (for role)
        const userRes = await API.get("user/");
        localStorage.setItem("isAdmin", userRes.data.is_staff);

        onLogin();
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, width: 350, margin: "40px auto" }}>
            <Typography variant="h5" mb={2} align="center">Login</Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField fullWidth label="Username" margin="normal"
                           value={formData.username}
                           onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                           required
                />
                <TextField fullWidth label="Password" type="password" margin="normal"
                           value={formData.password}
                           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                           required
                />
                <Button fullWidth variant="contained" sx={{ mt: 2 }} type="submit">Login</Button>
            </Box>
        </Paper>
    );
}

export default Login;
