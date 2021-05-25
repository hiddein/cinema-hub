import axios from "axios"
import { useEffect, useState } from "react"
import { Genres } from "../../components/Genres"
import { CustomPagination } from "../../components/Pagination/CustomPagination"
import { SingleContent } from "../../components/SingleContent/SingleContent"
import { useGenre } from "../../hooks/useGenre"

export const Movies = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const genreForURL = useGenre(selectedGenres)
  console.log(genreForURL)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
    )

    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line
  }, [page, genreForURL])

  return (
    <div>
      <span className="pageTitle">Фильмы</span>
      <Genres
      type='movie'
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres}
      setPage={setPage}
      />
      <div className="pageContent">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  )
}
