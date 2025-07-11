from fastapi import APIRouter

router = APIRouter()

@router.get("/v1/accounts")
def fake_accounts():
    return [
        {"id": "chk1", "name": "Demo Checking", "balanceCents": 120000},
        {"id": "sav1", "name": "Demo Savings",  "balanceCents": 130000},
    ]