from fastapi import FastAPI
from routes.homepage import router

app = FastAPI()
app.include_router(router)