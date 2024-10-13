import gspread
from oauth2client.service_account import ServiceAccountCredentials

def get_workout_data():
    # Use service account credentials to access Google Sheets
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    creds = ServiceAccountCredentials.from_json_keyfile_name('path/to/credentials.json', scope)
    client = gspread.authorize(creds)

    # Open the Google Sheet by name
    sheet = client.open("WorkoutSheet").sheet1

    # Get the workout data (this is just an example, customize to your sheet)
    workout = sheet.cell(1, 1).value
    return workout
