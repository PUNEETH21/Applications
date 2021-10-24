const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite = require("sqlite3");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const got = require('got');

const cors = require("cors");
const { request } = require("express");

const corsOptions = { origin: "*", credentials: true };
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

let db = "";
const dbPath = path.join(__dirname, "moviesCapital.db");

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite.Database,
    });
    app.listen(4005, () => {
      console.log("Server is Running at http://localhost:4005");
    });
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
  }
};

initializeDBAndServer();

const sendErrorResponse = (response, statusCode, statusText) => {
  response.status(statusCode);
  response.send({error_msg: statusText});
}


// create user table
app.get("/create", async (request, response) => {
  const query = `CREATE TABLE user (username VARCHAR(255), password VARCHAR(255));`;
  await db.run(query);
  response.send({message: "user table created successfully"})
});


//create sign up
app.post("/register", async (request, response) => {
  const { username, password } = request.body;
  const existedQuery = `SELECT * FROM user WHERE username="${username}"`;
  const isExistedUser = await db.get(existedQuery);
  if(isExistedUser !== undefined){
    sendErrorResponse(response, 400, "username already exist")
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUserQuery = `INSERT INTO user(username, password)
    VALUES ("${username}","${hashedPassword}")
    `;
    await db.run(createUserQuery);
    const payload = {username: username};
    const jwt_token = jwt.sign(payload, "SECRET_TOKEN");
    response.send({jwt_token});
  }
});


//login api
app.post("/login", async(request, response) => {
  const {username, password} = request.body;
  const userDetailsQuery = `SELECT * FROM user WHERE username="${username}"`;
  const userDetails = await db.get(userDetailsQuery);
  if(userDetails === undefined) {
    sendErrorResponse(response, 400, "username not exist");
  } else {
    const isCorrectPassword = await bcrypt.compare(password, userDetails.password);
    if(isCorrectPassword === true) {
      const payload = {username: username};
      const jwt_token = jwt.sign(payload, "SECRET_TOKEN");
      response.send({jwt_token});
    } else {
      sendErrorResponse(response, 400, "username and password not match");
    }
  }
});


//popular movies api
app.get("/movies/popular", async(request, response) => {
  let url = "https://api.themoviedb.org/3/movie/popular?api_key=33b64f7de3b96ae3bd07244b8ca84e2e";
  try {
    const resp = await got(url, { json: true });
    const popular_movies = resp.body.results;
    response.send(popular_movies);
  } catch (error) {
    response.send({error});
  }
});


//latest movies api
app.get("/movies/latest", async(request, response) => {
  let url = "https://api.themoviedb.org/3/movie/latest?api_key=33b64f7de3b96ae3bd07244b8ca84e2e";
  try {
    const resp = await got(url, { json: true });
    const latest_movie = resp.body;
    response.send(latest_movie);
  } catch (error) {
    response.send({error});
  }
});


//create movie table
app.get("/create/movie/", async(request, response) => {
  const createMovieTableQuery = `
    CREATE TABLE movie (
      id INTEGER,
      backdrop_path TEXT,
      title TEXT,
      overview TEXT,
      release_date TEXT,
      vote_average FLOAT,
      username TEXT
    )
  `;
  await db.run(createMovieTableQuery);
  response.send({message: "Movie Table Created Successfully"});
});

// middleware to check for authorization
const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  let jwtToken;
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];
  }
  if (jwtToken === undefined) {
    sendErrorResponse(response, 401, "Invalid JWT Token");
  } else {
    jwt.verify(jwtToken, "SECRET_TOKEN", async (error, payload) => {
      if (error) {
        sendErrorResponse(response, 401, "Invalid JWT Token");
      } else {
        request.username = payload.username;
        next();
      }
    });
  }
};


//add favourite movie api
app.post("/movie/favourite", authenticateToken, async(request, response) => {
  const {movieDetails} = request.body;
  const {username} = request
  const {
    id,
    backdropPath,
    title,
    overview,
    releaseDate,
    voteAverage
  } = movieDetails;
  const addMovieQuery = `
    INSERT INTO movie (
      id,
      backdrop_path,
      title,
      overview,
      release_date,
      vote_average,
      username
    ) VALUES (
      "${id}",
      "${backdropPath}",
      "${title}",
      "${overview}",
      "${releaseDate}",
      "${voteAverage}",
      "${username}"
    )
  `;
   const queryResponse = await db.run(addMovieQuery);
   const movieId = queryResponse.lastID;
   response.send({movieId});
});


// get favourite movies api
app.get('/favourites', authenticateToken,  async(request, response) => {
  const {username} = request
  const moviesQuery = `SELECT * FROM movie WHERE username="${username}"`;
  const moviesDetails = await db.all(moviesQuery);
  response.send({moviesDetails});
});


// get movie details api
app.get('/movie/:movieId', async(request, response) => {
  const {movieId} = request.params;
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=33b64f7de3b96ae3bd07244b8ca84e2e`;
  try {
    const resp = await got(url, { json: true });
    const movieDetails = resp.body;
    response.send(movieDetails);
  } catch (error) {
    response.send({error});
  }
});


// remove movie
app.delete('/unfavourite/:movieId', authenticateToken, async(request, response) => {
  try {
    const {movieId} = request.params;
    const {username} = request
    const movieQuery = `DELETE FROM movie WHERE id="${movieId}" AND username="${username}"`;
    await db.run(movieQuery);
    response.send({message: "Movie Unfavourited"})
  } catch (error) {
    response.send({error});
  }
});


// delete table
app.get('/delete', async(request, response) => {
  const movieQuery = 'DROP TABLE movie';
  const userQuery = `DROP TABLE user`;
  await db.run(movieQuery);
  await db.run(userQuery);
  response.send({result: 'tables deleted'});
})

module.exports = app;
