from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class SurveyCreate(BaseModel):
    title: str

class ResponseCreate(BaseModel):
    survey_id: int
    answer: str
