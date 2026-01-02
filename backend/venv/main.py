from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from fastapi import HTTPException
from sqlalchemy.exc import IntegrityError
from auth import get_current_user
import models, schemas, auth

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/register")
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    try:
        existing_user = db.query(models.User).filter(
            models.User.username == user.username
        ).first()

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Username already exists"
            )

        hashed = auth.hash_password(user.password)

        new_user = models.User(
            username=user.username,
            password=hashed
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {"message": "User registered successfully"}

    except HTTPException:
        raise

    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=400,
            detail="Username already exists"
        )

    except Exception as e:
        db.rollback()
        print("UNEXPECTED ERROR:", e)
        raise HTTPException(
            status_code=500,
            detail="Internal server error"
        )


@app.post("/login")
def login(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter_by(username=user.username).first()
    if not db_user:
        return {"error": "Invalid user"}
    if not auth.verify_password(user.password, db_user.password):
        return {"error": "Wrong password"}
    token = auth.create_token(user.username)
    return {"token": token}

@app.post("/survey")
def create_survey(
    survey: schemas.SurveyCreate,
    db: Session = Depends(get_db),
    current_user: str = Depends(get_current_user)
):
    user = db.query(models.User).filter(
        models.User.username == current_user
    ).first()

    new_survey = models.Survey(
        title=survey.title,
        creator_id=user.id
    )

    db.add(new_survey)
    db.commit()
    return {"message": "Survey created"}

@app.post("/response")
def submit_response(response: schemas.ResponseCreate, db: Session = Depends(get_db)):
    r = models.Response(
        survey_id=response.survey_id,
        answer=response.answer
    )
    db.add(r)
    db.commit()
    return {"message": "Response submitted"}
