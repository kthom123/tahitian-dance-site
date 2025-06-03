from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def homepage():
    return {"message": "Welcome to Tahitian Dance School"}

@app.get("/about")