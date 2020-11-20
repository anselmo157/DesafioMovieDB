import axios from 'axios'

const apiKey = '42e5a1b40c6ff832f8d2539b0fa6ffed'

const apiUrl = 'https://api.themoviedb.org/3'

export function configureAxios() {
    axios.defaults.baseURL = apiUrl
}

export function fetchGenres() {
    const url = `/genre/movie/list?language=pt-BR&api_key=${apiKey}`
    return axios.get(url)
}

export function fetchMoviesForGenreId(genreId, page) {
    const url = `discover/movie?language=pt-BR&with_genres=${genreId}&page=${page}&api_key=${apiKey}`
    return axios.get(url)
}
