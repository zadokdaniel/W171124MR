from html import unescape
from random import shuffle


def format_question(q):

    answers = [q.get("correct_answer", "")] + q.get("incorrect_answers", [])
    shuffle(answers)

    text = f"""
[bold green]{q.get("question", "")}[/] [red]({q.get("difficulty", "").upper()})[/]
{q.get("category", "")}
            
"""

    for i, answer in enumerate(answers, start=1):
        text += f"{i}. {answer}\n"

    return unescape(text), answers.index(q.get('correct_answer', None)) + 1

