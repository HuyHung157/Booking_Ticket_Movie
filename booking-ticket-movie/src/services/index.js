import MovieService from "./movie";
import TheatresServices from "./theatres";
import AuthServices from './auth'

export const movieService = new MovieService();
export const theatresServices = new TheatresServices();
export const authServices = new AuthServices();