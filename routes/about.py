from fastapi import APIRouter

router = APIRouter()

@router.get("/about")
def about():
    return {"message": "About the Tahitian Dance School: We celebrate dance, culture, and community!"}