from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField()
    popularity = models.FloatField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    tmdb_id = models.IntegerField()
    # genres = models.ManyToManyField(Genre)

    @classmethod
    def get_tmdb_movies(cls):
        import requests
        # TMDB API_KEY 발급
        API_KEY = ''
        response = requests.get(f'https://api.themoviedb.org/3/movie/top_rated?api_key={API_KEY}&language=ko-KR&page=1')
        whole_data = response.json()['results']
        for i in range(len(whole_data)):
            data = whole_data[i]
            cls.objects.create(title = data['title'], release_date = data['release_date'], popularity = data['popularity'], vote_count = data['vote_count'], vote_average = data['vote_average'], overview = data['overview'], poster_path = data['poster_path'], tmdb_id=data['id'])


# python manage.py shell 을 실행해서 아래의 코드들 실행하면 db에 들어감
# from movies.models import Movie
# Movie.get_tmdb_movies()