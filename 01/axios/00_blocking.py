from time import sleep
import requests

# 1. sleep
def sleep_3_seconds():
    sleep(3)
    print('잘잣따')

print('이제 자야지')
sleep_3_seconds()
print('학교나 가자')

# 2. requests
response = requests.get('https://jsonplaceholder.typicode.com/todos/1/')
# 파싱작업
todo = response.json()
print(todo)
