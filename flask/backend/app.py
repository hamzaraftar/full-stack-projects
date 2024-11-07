from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORE

app =  Flask(__name__)
CORE(app)
app.config['SQLALCHEMY']  = "sqlite:///friend.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False