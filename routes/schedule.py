from fastapi import APIRouter

router = APIRouter()

@router.get("/schedule")
def schedule():
    return {"message": "Schedule page: Classes are held Monday, Wednesday, and Friday at 6 PM."}