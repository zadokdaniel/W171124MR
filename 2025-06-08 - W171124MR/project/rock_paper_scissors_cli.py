from a.rock_paper_scissors import play

def terminal_play(user_choice):
    try:
        results = play(user_choice)
    except Exception as err:
        print(err)
    else:
        print(f"""You chose {results['user']} and CPU chose {results['cpu']}
    {"You" if results['winner'] == 'user' else 'CPU'} win!""")


