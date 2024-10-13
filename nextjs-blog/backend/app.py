# main file that will initialize your backend service, 
# define your API routes, and serve as the communication bridge between your Next.js frontend 
# and your backend logic.

from fastapi import FastAPI, BackgroundTasks
from services.sms import send_sms
from services.emailer import send_email
from scripts.google_sheets import get_workout_data

app = FastAPI()

# Example route for getting a workout and sending it via SMS
@app.get("/send-workout")
async def send_workout(phone_number: str, background_tasks: BackgroundTasks):
    # Fetch workout data from Google Sheets
    workout = get_workout_data()

    # Send the workout via SMS in the background
    background_tasks.add_task(send_sms, phone_number, workout)

    return {"message": "Workout has been sent via SMS!"}

# Example route for sending workout via email
@app.post("/send-email")
async def send_workout_email(email: str, background_tasks: BackgroundTasks):
    workout = get_workout_data()
    background_tasks.add_task(send_email, email, workout)

    return {"message": "Workout has been sent via email!"}
