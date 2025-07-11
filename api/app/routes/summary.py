from fastapi import APIRouter

router = APIRouter()

@router.get("/v1/summary")
def fake_summary():
    # hard-coded total = 120k + 130k
    return {"totalBalanceCents": 250000}