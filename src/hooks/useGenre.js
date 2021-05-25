export const useGenre = (selectedGenres) => {
    const genreIds = selectedGenres.map((g)=> g.id)
  return selectedGenres.length < 1 ? "" :  genreIds.join(',')

}