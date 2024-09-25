from flask import Flask
from config import Config
from models.model import db
from routes.route import notes_bp
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/notes_app'

db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(notes_bp)

if __name__ == '__main__':
    app.run(debug=True)
