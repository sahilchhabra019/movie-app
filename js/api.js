const API_KEY='9534ef382ae85c9a187075719f8e1961';

const API_MOST_WATCHED_MOVIES_DATA = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const API_MOVIE_DETAILS_DATA = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;
const API_LATEST_MOVIES_DATA = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&include_adult=false`;

const fetchData = (API_KEY_URL, index) => {	
	fetch(API_KEY_UR)
	.then((movies) => {
		return movies.json();
	}).then((data) => {
	});
}