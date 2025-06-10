from requests import get, post


res = post("https://jsonplaceholder.typicode.com/posts",
     # params={"q": "5"}, # added to the url as ?q=5
     headers={'Content-type': 'application/json; charset=UTF-8'}, # technically not needed as we use json= param which will configure the content type to application/json automatically

     # SET BODY ON REQUEST
     # data=        # for dict will use application/x-www-form-urlencoded, for text you should manually configure content type
     # files=[]       # content-type: multipart/form-data
     json={
        "title": 'foo',
        "body": 'bar',
        "userId": 1,
     })




print("********************* JSONPLACEHOLDER\n\n")
print("status_code\n", res.status_code, "\n")
print("res.reason\n", res.reason, "\n")
print("res.headers\n", res.headers, "\n")

# body
print("res.content\n", type(res.content), "\n")    # binary
print("res.json\n", type(res.json()), "\n")        # dict
print("res.text\n", type(res.text), "\n")          # unicode

print("body\n", res.json(), "\n")

print("res.elapsed\n", res.elapsed, "\n")


print("********************* opentdb\n\n")
res = get("https://opentdb.com/api.php", headers={}, params={
    "amount": 10,
    "category": 9,
    "difficulty": "easy",
    "type": "multiple"
})

print("status_code\n", res.status_code, "\n")
print("res.reason\n", res.reason, "\n")
print("res.headers\n", res.headers, "\n")

# body
print("res.content\n", type(res.content), "\n")    # binary
print("res.json\n", type(res.json()), "\n")        # dict
print("res.text\n", type(res.text), "\n")          # unicode

print("body\n", res.json(), "\n")

print("res.elapsed\n", res.elapsed, "\n")
