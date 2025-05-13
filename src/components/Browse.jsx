import Header from "./Header"
import useMovies from "../hooks/useMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux"

const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  useMovies()
  usePopularMovies()
  return (
    <div>
      <Header></Header>
      {
        showGptSearch?(<GptSearch></GptSearch>):(
          <>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer> 
          </>
        )
      }
      
    </div>
  )
}

export default Browse