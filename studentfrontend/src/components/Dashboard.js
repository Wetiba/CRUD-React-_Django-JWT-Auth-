import React from "react";
import StudentList from "./StudentList";
import { Button, Box } from "@mui/material";

function Dashboard({ onLogout }) {
    return (
        <Box>
            <Box textAlign="right" p={2}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("isAdmin");
                        onLogout();
                    }}
                >
                    Logout
                </Button>
            </Box>
            <StudentList />
        </Box>
    );
}

export default Dashboard;
