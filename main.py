from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow requests from your frontend (adjust if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or your actual frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/contact")
async def submit_contact(form: ContactForm):
    # You can store to DB, log it, or trigger an email
    print("New Contact Message:", form.dict())
    return {"message": "Message received successfully"}
