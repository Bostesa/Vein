from fastapi import FastAPI
from app.routes import accounts, summary

app = FastAPI()
app.include_router(accounts.router)
app.include_router(summary.router)