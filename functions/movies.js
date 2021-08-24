const movies = reuqire("../data/movies.json")

exports.handler = async () => {
    return {
        statusCode:200,
        body: JSON.stringify(movies)
    }
}
