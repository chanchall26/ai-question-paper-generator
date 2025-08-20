from . import db

class Question(db.Model):
    __tablename__ = "questions"

    id = db.Column(db.Integer, primary_key=True)
    school_name = db.Column(db.String(100))
    board = db.Column(db.String(50))
    class_ = db.Column("class", db.String(10))   # avoid Python keyword conflict
    subject = db.Column(db.String(50))
    type = db.Column(db.String(20))
    difficulty = db.Column(db.String(20))
    question = db.Column(db.Text)
    marks = db.Column(db.Integer)

    def as_dict(self):
        return {
            "id": self.id,
            "school_name": self.school_name,
            "board": self.board,
            "class": self.class_,
            "subject": self.subject,
            "type": self.type,
            "difficulty": self.difficulty,
            "question": self.question,
            "marks": self.marks
        }
