from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Define the input data format
class InterestRequest(BaseModel):
    principal: float
    rate: float
    years: int

# Define the endpoint to calculate compound interest
@app.post("/calculate")
def calculate_interest(request: InterestRequest):
    # Formula for compound interest
    total = request.principal * (1 + request.rate / 100) ** request.years
    return {"total": round(total,2)}
