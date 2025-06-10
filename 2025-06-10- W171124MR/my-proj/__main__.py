from rich.console import Console
from opentdb_service import get_questions
from question_formatter import format_question

art_category_id = 23

console = Console()


def play():
    questions = get_questions(10, category=art_category_id)

    answered_correctly = 0

    for question in questions:
        text, correct_answer_index = format_question(question)
        console.print(text)


        if input("Enter your answer: ") == str(correct_answer_index):
            answered_correctly+=1


    print(f"You were right on {answered_correctly} out of {len(questions)}")

if __name__ == "__main__":
    play()


