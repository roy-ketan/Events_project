# Events Project

This project is a full-stack application built using Python Django for the backend and ReactJS for the frontend. It allows users to create, view, edit, and delete events on their personal calendar.

## Running and Testing the Project

To run and test the project locally, follow these steps:

1. **Clone the Project**

   Open your command prompt/terminal and clone the repository:

   ```bash
   git clone https://github.com/roy-ketan/Events_project

2. **Backend Setup**

   In the Events_project directory run the following command to install the required dependencies:

   ```bash
   pip install -r ./backend/requirements.txt


  3. **Next, run the following commands to set up the Django backend:**

   ```bash

   cd backend
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
```

   This will start the Django backend server at http://localhost:8000.


4. **Install Frontend Dependencies**

```bash

   cd ..
   cd frontend
   npm install
```

6. **Run the Frontend**

```bash
   npm run dev
```

   Copy the local frontend URL and paste it into your browser to access the application.
   








