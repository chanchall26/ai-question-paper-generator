import os
import urllib.parse
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()


def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")

    # ---- DB config from .env (fallback to sqlite so app still runs) ----
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
        # fallback for local dev if env vars are missing
        app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///dev.db"

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JSON_SORT_KEYS"] = False

    db.init_app(app)

    with app.app_context():
        # Import models so SQLAlchemy knows them before create_all
        from . import models  # noqa: F401

        db.create_all()

        # Import and register blueprints AFTER app exists to avoid circulars
        from .routes import main as main_bp  # noqa: E402
        app.register_blueprint(main_bp)

    return app
