import os
import urllib.parse
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
db = SQLAlchemy()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")

    db_user = os.getenv("DB_USER")
    db_pass_raw = os.getenv("DB_PASSWORD")
    db_host = os.getenv("DB_HOST", "127.0.0.1")
    db_name = os.getenv("DB_NAME")

    if db_user and db_pass_raw and db_host and db_name:
        db_pass = urllib.parse.quote_plus(db_pass_raw)
        app.config["SQLALCHEMY_DATABASE_URI"] = (
            f"mysql+pymysql://{db_user}:{db_pass}@{db_host}:3306/{db_name}"
        )
    else:
        app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///dev.db"

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JSON_SORT_KEYS"] = False

    db.init_app(app)

    with app.app_context():
        from . import models  # noqa: F401
        db.create_all()
        from .routes import main as main_bp
        app.register_blueprint(main_bp)

    return app
