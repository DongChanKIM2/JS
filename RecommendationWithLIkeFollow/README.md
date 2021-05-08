# 좋아요, 팔로우 구현
1. views에서 json으로 데이터를 받아와 axios로 처리합니다
2. html에서 id 나 class를 통해 추가해줄 부모를 pick 해줍니다
3. 클릭을 하면 사건이 발생할 수 있도록 addEventListern 함수를 만들어줍니다
4. axios와 데이터를 views에서 성공적으로 받아온다면 발생할 동작들은 then에서 만들어줍니다

# 추천 구현
# 1. Movies models.py에서 필요한 Data 추가해 DB 변경
1.1 받아올 Data와 중복되는 Data가 있으면 충돌하기 때문에 기존 model에서 삭제
1.2 classMethod를 활용해 Top_rated api의 movie_id를 기존의 DB에 Data 추가

# 2. Model에서 받아온 Data를 views에서 받아줘 html로 전달
2.1 해당 영화의 id를 1.2에서 받아왔기 때문에 추천영화를 받아
recommend api를 활용해 추가하기


# peer: 국현
DB를 새로 만드는게 아니라 classmethod를 활용해 새로운 데이터를
추가하는 방법에 대해 처음 배움!! awesome!!