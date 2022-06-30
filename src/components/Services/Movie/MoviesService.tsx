import axios from 'axios'
import IMovies from './Movie'

const MOVIES_REST_API_URL = 'http://localhost:8080/movies'

class MoviesService {
    getMovies() {
        return axios.get<IMovies[]>(MOVIES_REST_API_URL)
    }
}

export default new MoviesService()