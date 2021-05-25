import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import SearchIcon from "@material-ui/icons/Search"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import MovieIcon from "@material-ui/icons/Movie"
import TvIcon from "@material-ui/icons/Tv"
import { useHistory } from "react-router"

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
})

export const Navigation = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const history = useHistory()

  useEffect(() => {
    switch (value) {
      case 0: {
        history.push("/")
        break
      }
      case 1: {
        history.push("/movies")
        break
      }
      case 2: {
        history.push("/series")
        break
      }
      case 3: {
        history.push("/search")
        break
      }
      default: {
        history.push("/")
        break
      }
    }
  }, [value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Популярное"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Фильмы"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Сериалы"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Поиск"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  )
}
