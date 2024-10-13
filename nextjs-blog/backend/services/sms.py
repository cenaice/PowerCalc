# Logic to send SMS
from twilio.rest import Client
import os

# Twilio account SID and auth token (from environment variables)
account_sid = os.getenv("TWILIO_ACCOUNT_SID")
auth_token = os.getenv("TWILIO_AUTH_TOKEN")
twilio_phone_number = os.getenv("TWILIO_PHONE_NUMBER")

client = Client(account_sid, auth_token)

def send_sms(phone_number: str, message: str):
    # Use Twilio to send the SMS
    client.messages.create(
        body=message,
        from_=twilio_phone_number,
        to=phone_number
    )
