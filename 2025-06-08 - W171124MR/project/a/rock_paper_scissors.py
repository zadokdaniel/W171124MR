from random import choice

options = ('rock', 'scissor', 'paper')

def throw_hand():
    return choice(options)



def play(user_choice):

    if user_choice not in options:
        raise Exception("not allowed input")

    cpu_choice = throw_hand()

    game = {
        "user": user_choice,
        "cpu": cpu_choice,
        "winner": None
    }

    if user_choice == cpu_choice:
        game['winner'] = None

    elif (user_choice == "rock" and cpu_choice == "scissor") or \
            (user_choice == "scissor" and cpu_choice == "paper") or \
            (user_choice == "paper" and cpu_choice == "rock"):
        game["winner"] = "user"

    else:
        game["winner"] = "cpu"

    return game




