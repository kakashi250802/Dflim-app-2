const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'df8b381fee31ddc49b9bd8b0e0603483',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`

}
export default apiConfig;