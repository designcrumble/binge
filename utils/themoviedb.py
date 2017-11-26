import requests
import json
import sys
import pyrebase
moviedb = []

config = {
  "apiKey": "AIzaSyAvOk3XmuLaHkSP3isdUwpdvjO650gclKo",
  "authDomain": "https://binge-bcf12.firebaseapp.com",
  "databaseURL":"https://binge-bcf12.firebaseapp.com",
  "storageBucket": "binge-bcf12.appspot.com"
}

for i in range(1,3):
    dataResponse = requests.get("https://api.themoviedb.org/3/discover/movie?api_key=ddf55e9c82ccc0b1f484fee9a81e80d3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=" + str(i));
    if (dataResponse.ok):
        data = json.loads(dataResponse.content.decode('utf-8'))
        for j,result in enumerate(data["results"]):
            movie_id =result['id']
            videoResponse = requests.get('https://api.themoviedb.org/3/movie/'+str(movie_id)+'/videos?api_key=ddf55e9c82ccc0b1f484fee9a81e80d3&language=en-US');
            videoData = json.loads(videoResponse.content.decode('utf-8'))
            videoid = videoData["results"][0]['key']
            #imdb_id
            imdbResponse = requests.get('https://api.themoviedb.org/3/movie/'+str(movie_id)+'?api_key=ddf55e9c82ccc0b1f484fee9a81e80d3&language=en-US');
            imdbData = json.loads(imdbResponse.content.decode('utf-8'))
            imdbid = imdbData['imdb_id']
            data["results"][j].update({'imdb_id': imdbid})
            moviedb.append(data["results"][j])
    else:
        sys.exit()
firebase = pyrebase.initialize_app(config)
db = firebase.database()
print(json.dumps(moviedb))
db.child("movies").push(json.dumps(moviedb))