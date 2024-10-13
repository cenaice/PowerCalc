# Backend - Workout Automation API

This is the backend API for the Workout Automation project. It is built using **FastAPI** and is responsible for:
- Fetching workout data from a Google Sheets document.
- Sending the daily workout to users via SMS or email.
- Handling background tasks like scheduled notifications.

## Project Structure

/backend 
│ ├── /api # API routes using FastAPI │ └── app.py # Main entry point for the FastAPI application ├── /services # Business logic for sending SMS and emails │ ├── sms.py # SMS service logic (Twilio) │ └── emailer.py # Email service logic (SMTP or any email service) ├── /scripts # Interaction with external services │ └── google_sheets.py # Fetches workout data from Google Sheets ├── /config # Configuration files and environment variables │ └── .env # API keys and credentials ├── requirements.txt # Python dependencies


## Features
- **API**: Exposes endpoints to send workout plans via SMS or email.
- **Google Sheets Integration**: Fetches workout data dynamically from a Google Sheets document.
- **SMS Service**: Sends workouts via SMS using the Twilio API.
- **Email Service**: Sends workout summaries via email (using SMTP or another email service).
- **Background Tasks**: Uses FastAPI’s `BackgroundTasks` for asynchronous SMS/email sending.

