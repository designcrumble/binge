import pyrebase

config = {
  "apiKey": "AIzaSyAvOk3XmuLaHkSP3isdUwpdvjO650gclKo",
  "authDomain": "https://binge-bcf12.firebaseapp.com",
  "databaseURL":"https://binge-bcf12.firebaseapp.com",
  "storageBucket": "binge-bcf12.appspot.com"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()
db.child("users")
print(db)
nameFile = open("./raw/movies_list.txt");
youtubeFile = open("./raw/youtube_ids.txt");
genreFile = open("./raw/metadata/Genre.txt");
nameFile = open("./raw/movies_list.txt");
nameFile = open("./raw/movies_list.txt");
movie_data = {"name" : "The Dark Knight",
               "id" : 1234,
               "actors":["Christian Bale", "Morgan Freeman"],
               }
#db.update("movies").push(movie_data)
db.child("movies").push(movie_data)