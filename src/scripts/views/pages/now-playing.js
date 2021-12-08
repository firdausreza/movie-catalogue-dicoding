import MovieDBSource from "../../data/moviedb-source";

const NowPlaying = {
  async render() {
    return `<h2>Now Playing Page</h2>`;
  },

  async afterRender() {
    const movies = await MovieDBSource.nowPlayingMovies();
    console.log(movies);
  }
}

export default NowPlaying;