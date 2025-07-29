# Student Management CRUD (React + Django + JWT Auth)

A complete full-stack **Student Management System** built with:
- **Django REST Framework (Backend)**
- **React + Material UI (Frontend)**
- **JWT Authentication (Login & Register)**
- **Role-based Access (Admin/User)**
- **CRUD** (Create, Read, Update, Delete) for student data

---

## **Features**

- ✅ Register and login users (JWT-based authentication)
- ✅ Role-based access:
  - **Admin**: Add, Edit, Delete students
  - **User**: View students only
- ✅ Material UI styling (modern responsive UI)
- ✅ 5 student fields: `name`, `email`, `course`, `phone`, `enrollment_date`
- ✅ Sample admin user and student data included

---

## **1. Project Structure**

student-crud-app/
├── README.md
├── student-backend/
│ ├── manage.py
│ ├── requirements.txt
│ ├── student_backend/
│ │ ├── settings.py
│ │ └── urls.py
│ └── api/
│ ├── models.py
│ ├── views.py
│ ├── serializers.py
│ ├── urls.py
│ └── fixtures/
│ ├── admin.json # Admin user (username: admin, password: 1234)
│ └── students.json # Sample students
└── student-frontend/
├── package.json
├── src/
│ ├── api.js
│ ├── App.js
│ └── components/
│ ├── Login.js
│ ├── Register.js
│ ├── Dashboard.js
│ └── StudentList.js

---

## **2. Backend Setup (Django)**

### **Step 1: Install dependencies**
```bash
cd student-backend
pip install djangorestframework djangorestframework-simplejwt django-cors-headers

pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate

python3 manage.py loaddata api/fixtures/admin.json
python3 manage.py loaddata api/fixtures/students.json

Admin login credentials:

Username: admin

Password: 1234


. API Endpoints
POST /api/register/ → Register user

POST /api/login/ → Login (JWT token)

GET /api/user/ → Current user info (is_admin flag)

GET /api/students/ → List students

POST /api/students/ → Add student (admin only)

PUT /api/students/:id/ → Update student (admin only)

DELETE /api/students/:id/ → Delete student (admin only)

Technologies Used
Backend: Django, Django REST Framework, JWT Auth

Frontend: React, Material UI, Axios
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios
