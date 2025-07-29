import React, { useState, useEffect } from "react";
import API from "../api";
import {
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
} from "@mui/material";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "",
        phone: "",
        enrollment_date: "",
    });
    const [editId, setEditId] = useState(null);
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const res = await API.get("students/");
        setStudents(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await API.put(`students/${editId}/`, formData);
        } else {
            await API.post("students/", formData);
        }
        setFormData({ name: "", email: "", course: "", phone: "", enrollment_date: "" });
        setEditId(null);
        fetchStudents();
    };

    const handleDelete = async (id) => {
        await API.delete(`students/${id}/`);
        fetchStudents();
    };

    const handleEdit = (student) => {
        setFormData(student);
        setEditId(student.id);
    };

    return (
        <Box maxWidth="1000px" mx="auto">
            <Typography variant="h4" align="center" mb={2} color="primary">
                Student Management System
            </Typography>

            {isAdmin && (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    display="grid"
                    gridTemplateColumns="repeat(5, 1fr)"
                    gap={2}
                    mb={3}
                >
                    <TextField
                        label="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <TextField
                        label="Course"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        required
                    />
                    <TextField
                        label="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                    <TextField
                        type="date"
                        value={formData.enrollment_date}
                        onChange={(e) =>
                            setFormData({ ...formData, enrollment_date: e.target.value })
                        }
                        required
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button type="submit" variant="contained" sx={{ gridColumn: "span 5" }}>
                        {editId ? "Update Student" : "Add Student"}
                    </Button>
                </Box>
            )}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#1976d2" }}>
                            <TableCell sx={{ color: "white" }}>Name</TableCell>
                            <TableCell sx={{ color: "white" }}>Email</TableCell>
                            <TableCell sx={{ color: "white" }}>Course</TableCell>
                            <TableCell sx={{ color: "white" }}>Phone</TableCell>
                            <TableCell sx={{ color: "white" }}>Enrollment Date</TableCell>
                            {isAdmin && <TableCell sx={{ color: "white" }}>Actions</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((s) => (
                            <TableRow key={s.id}>
                                <TableCell>{s.name}</TableCell>
                                <TableCell>{s.email}</TableCell>
                                <TableCell>{s.course}</TableCell>
                                <TableCell>{s.phone}</TableCell>
                                <TableCell>{s.enrollment_date}</TableCell>
                                {isAdmin && (
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="warning"
                                            size="small"
                                            onClick={() => handleEdit(s)}
                                            sx={{ mr: 1 }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => handleDelete(s.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default StudentList;
