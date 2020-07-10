export const keyAssignment = (movies) => {
    return movies.reduce((acc,movie) => {
    acc[movie.title] = movie;
    return acc;
    },{})
}