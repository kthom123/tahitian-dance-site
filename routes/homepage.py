from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def homepage():
    return {"message": "Welcome to Tahitian Dance School"}