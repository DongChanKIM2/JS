from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from .models import Movie
import requests

# Create your views here.
@require_GET
def index(request):
    movies = Movie.objects.all()
    context = {
        'movies': movies,
    }
    return render(request, 'movies/index.html', context)


@require_GET
def detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    # tdmb API_KEY 발급받기
    API_KEY = ''
    response = requests.get(f'https://api.themoviedb.org/3/movie/{movie.tmdb_id}/recommendations?api_key={API_KEY}&language=ko-KR&page=1')
    response = response.json()
    data = response['results']

    context = {
        'movie': movie,
        'data': data,

    }
    return render(request, 'movies/detail.html', context)


@require_GET
def recommended(request):
    pass