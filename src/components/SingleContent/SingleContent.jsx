import { Badge } from "@material-ui/core"
import { img_300, unavailable } from "../../config/config"
import ContentModal from "../ContentModal/ContentModal"
import "./singleContent.css"

export const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
       <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
      <img
        className="media__poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="media__title">{title}</b>
      <span className="media__subTitle">
        {media_type === "tv" ? "TV Сериал" : "Фильм"}
        <span className="media__subTitle">{date}</span>
      </span>
    </ContentModal>
  )
}
