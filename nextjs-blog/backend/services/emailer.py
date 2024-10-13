# Logic to send emails
import smtplib
from email.mime.text import MIMEText

def send_email(to_email: str, message: str):
    msg = MINEText(message)
    msg['Subject'] = 'Your Workout Plan'
    msg['From'] = 'your-email@example.com'
    msg['To'] = to_email

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login('your-email@example.com', 'your-password')
        server.sendmail('your-email@example.com', to_email, msg.as_string())