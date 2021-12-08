import MovieDBSource from "../../data/moviedb-source";

const Upcoming = {
  async render() {
    return `<h2>Upcoming Page</h2>`;
  },

  async afterRender() {
    const movies = await MovieDBSource.upcomingMovies();
    console.log(movies);
  }
}

export default Upcoming;