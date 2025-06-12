from requests import get



base_url = "https://opentdb.com/api.php"

def get_questions(
        amount = 10,
        *, category = None, difficulty = None):

    params = {
        "amount": amount,
        "type": "multiple"
    }

    if category is not None:
        params['category'] = category
    if difficulty is not None:
        params['difficulty'] = difficulty

    res = get(base_url, params=params)

    body = res.json()

    if body.get("response_code", 0) == 5:
        raise Exception("Rate Limit Exceeded")

    return body.get("results", [])

