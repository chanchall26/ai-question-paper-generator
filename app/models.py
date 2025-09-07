from . import db

class Question(db.Model):
    __tablename__ = "questions"
    id = db.Column(db.Integer, primary_key=True)
    school_name = db.Column(db.String(100))
    board = db.Column(db.String(50))
    class_ = db.Column(db.String(10))
    subject = db.Column(db.String(50))
    question_type = db.Column(db.String(50))
    difficulty = db.Column(db.String(20))
    marks = db.Column(db.Integer)
    question_text = db.Column(db.Text)
    answer = db.Column(db.Text)
    source = db.Column(db.String(50))

    def as_dict(self):
        return {
            "id": self.id,
            "school_name": self.school_name,
            "board": self.board,
            "class_": self.class_,
            "subject": self.subject,
            "question_type": self.question_type,
            "difficulty": self.difficulty,
            "marks": self.marks,
            "question_text": self.question_text,
            "answer": self.answer,
            "source": self.source
        }


class Paper(db.Model):
    __tablename__ = "papers"
    id = db.Column(db.Integer, primary_key=True)
    paper_id = db.Column(db.String(50), unique=True)
    exam_name = db.Column(db.String(100))
    school_name = db.Column(db.String(100))
    board = db.Column(db.String(50))
    class_ = db.Column(db.String(10))
    subject = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    total_questions = db.Column(db.Integer)
    total_marks = db.Column(db.Integer)
    pdf_path = db.Column(db.String(255))
    word_path = db.Column(db.String(255))
    answer_key_path = db.Column(db.String(255))

    questions = db.relationship("PaperQuestion", back_populates="paper", cascade="all, delete-orphan")


class PaperQuestion(db.Model):
    __tablename__ = "paper_questions"
    id = db.Column(db.Integer, primary_key=True)
    paper_id = db.Column(db.String(50), db.ForeignKey("papers.paper_id", ondelete="CASCADE"))
    question_id = db.Column(db.Integer)
    question_text = db.Column(db.Text)
    type = db.Column(db.String(50))
    difficulty = db.Column(db.String(20))
    marks = db.Column(db.Integer)
    options = db.Column(db.JSON)
    answer = db.Column(db.Text)

    paper = db.relationship("Paper", back_populates="questions")


class AnswerKey(db.Model):
    __tablename__ = "answer_keys"
    id = db.Column(db.Integer, primary_key=True)
    paper_id = db.Column(db.Integer)
    question_id = db.Column(db.Integer)
    answer = db.Column(db.Text)