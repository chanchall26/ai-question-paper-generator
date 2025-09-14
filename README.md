# 📘 Intelligent Paper Generator

> Build assessments quickly with AI + Question Bank integration.

## ✨ Overview

The **Intelligent Paper Generator** helps teachers and institutions generate structured question papers within minutes.
It supports AI-based question generation (using Gemini API) as well as fetching from a preloaded **Question Bank** in MySQL.

Key highlights:

* 🎯 **Custom Exam Creation** – Choose school, board, class, subject, and chapters.
* 📊 **Question Distribution** – Define number of questions & marks per type (MCQ, Short Answer, Long Answer, etc.).
* ⚖️ **Difficulty Balancing** – Allocate Easy, Medium, Hard percentages.
* 🤖 **AI-Powered Questions** – Generate fresh questions using Gemini API.
* 🗄️ **Database Support** – Fetch from your own **Question Bank** if API is not available.
* 📄 **Export Options** – Download question paper as **PDF**, **Word**, and generate **Answer Keys**.
* 🔄 **Save Papers** – Store generated question papers into the database for reuse.

---

## 🖥️ Tech Stack

* **Backend**: Flask, SQLAlchemy
* **Frontend**: HTML, CSS, JS (Jinja Templates)
* **Database**: MySQL
* **AI**: Google Gemini API (1.5 Flash)
* **Export**: ReportLab (PDF), python-docx (Word)

---

## ⚡ Features

### Step 1: Core Details

* Exam name
* School name
* Board (CBSE/ICSE/State)
* Class
* Subject
* Chapter selection

✅ Example:

```
Examination: Mid Sem Exam  
School: Jawahar Navodaya Vidhyalaya Sheopur  
Board: CBSE  
Class: 10  
Subject: Science  
Chapters: Life Processes, Electricity, Metals & Non-metals ...  
```

---

### Step 2: Question & Marks Distribution

Define number of questions & marks for each type:

* Multiple Choice
* Fill in the Blanks
* Short Answer
* Long Answer
* Matching
* Case Study

✅ Example:

* MCQ: 5 × 1 mark
* Fill in the Blanks: 5 × 1 mark
* Short Answer: 3 × 3 marks
* Long Answer: 2 × 5 marks

---

### Step 3: Difficulty Distribution

Allocate difficulty levels (in percentage):

* Easy: 40%
* Medium: 30%
* Hard: 30%

---

### 📄 Generated Paper Output

✅ Sample Preview:

**Total Questions**: 15
**Total Marks**: 29

* MCQ (1 mark) \[Easy] — Which of the following is NOT a chemical change?
* Fill in the Blanks (1 mark) \[Medium] — The process of splitting of a heavy nucleus into lighter nuclei is called \_\_\_\_\_\_.
* Short Answer (3 marks) \[Hard] — Describe the structure and function of a neuron.
* Long Answer (5 marks) \[Hard] — Explain Ohm's Law and its applications.

---

## 📂 Project Structure

```
ai-question-paper-generator/
│── app/
│   ├── __init__.py        # Flask app factory
│   ├── models.py          # Database models
│   ├── routes.py          # API & routes
│   ├── templates/         # HTML templates
│   ├── static/            # CSS, JS, Papers
│
│── Sample Data/
│   ├── questions.sql      # Question bank
│
│── run.py                 # Main entry point
│── requirements.txt       # Dependencies
│── .env                   # Environment variables
│── README.md              # Documentation
```

---

## ⚙️ Setup Instructions

1. **Clone repo**

   ```bash
   git clone https://github.com/Vikramzcode/ai-question-paper-generator.git
   cd ai-question-paper-generator
   ```

2. **Setup virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate   # (Linux/Mac)
   venv\Scripts\activate      # (Windows)
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure `.env`**

   ```env
   DB_USER=root
   DB_PASSWORD=your_password
   DB_HOST=127.0.0.1
   DB_NAME=question_paper_db

   GOOGLE_API_KEY=your_gemini_api_key
   ```

5. **Import database schema**

   ```bash
   mysql -u root -p question_paper_db < Sample\ Data/questions.sql
   ```

6. **Run the app**

   ```bash
   python run.py
   ```

7. **Open in browser**

   ```
   http://127.0.0.1:5000
   ```

---

## 🚀 API Endpoints

* **Generate Paper** → `POST /api/generate`
* **Download Word** → `GET /api/download/word/<paper_id>`
* **Download Answer Key** → `GET /api/download/answer_key/<paper_id>`

---

## 📌 Future Enhancements

* Teacher dashboard for managing saved papers.
* Student practice mode (auto-generate worksheets).
* AI-enhanced answer key with step-by-step explanations.
* Export to Google Classroom / MS Teams.

---

## 👨‍💻 Contributors

* **Chanchal*** 
* **Abhishek**
* **Vikram Sen**


---

Would you like me to also **add screenshots and usage examples** (Live Preview screenshots from your UI) inside this README so it looks attractive for GitHub?
