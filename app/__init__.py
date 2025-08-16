from flask import Flask
from app.routes import main

def create_app():
    app = Flask(__name__)
    app.register_blueprint(main)   # <-- register blueprint

    @app.route("/")
    def home():
        return "Hello, AI Question Paper Generator is running!"

    return app
