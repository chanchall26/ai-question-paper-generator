import os
from flask import Blueprint, request, jsonify, render_template, current_app
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from datetime import datetime

main = Blueprint("main", __name__)

# Serve index.html from templates
@main.route("/")
def index():
    return render_template("index.html")

@main.route("/api/generate", methods=["POST"])
def generate_paper():
    data = request.get_json()
    current_app.logger.info(f"Incoming /api/generate payload: {data}")

    # Dummy questions (replace later with DB/AI)
    questions = [
        {"text": "What is photosynthesis?", "marks": 5, "difficulty": "Easy"},
        {"text": "Explain Newton’s 2nd law of motion.", "marks": 5, "difficulty": "Medium"},
        {"text": "Derive Einstein’s mass-energy equivalence.", "marks": 10, "difficulty": "Hard"}
    ]

    # --- Generate PDF and save it ---
    pdf_filename = f"paper_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    pdf_dir = os.path.join(current_app.root_path, "static", "papers")
    os.makedirs(pdf_dir, exist_ok=True)
    pdf_path = os.path.join(pdf_dir, pdf_filename)

    c = canvas.Canvas(pdf_path, pagesize=A4)
    c.setFont("Helvetica", 14)
    c.drawString(100, 800, f"Question Paper - {data.get('subject')} (Class {data.get('class')})")
    c.setFont("Helvetica", 10)
    c.drawString(100, 780, f"School: {data.get('schoolName')}")
    c.drawString(100, 765, f"Board: {data.get('schoolBoard')}")

    y = 740
    for i, q in enumerate(questions, start=1):
        c.drawString(100, y, f"Q{i}. {q['text']} [{q['marks']} marks | {q['difficulty']}]")
        y -= 20
    c.save()

    # --- Return JSON with PDF link ---
    return jsonify({
        "questions": questions,
        "summary": {
            "total_questions": len(questions),
            "total_marks": sum(q["marks"] for q in questions),
        },
        "pdf_url": f"/static/papers/{pdf_filename}"
    })
