import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, itemDelete, toggleIsLiked} = props
  const {name, id, comment, date, active} = commentDetails

  const time = formatDistanceToNow(date)
  const firstLetter = name[0]

  const likeResult = active
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const deleteId = () => {
    itemDelete(id)
  }

  const changeLikeImg = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="lists">
      <div className="first-line">
        <button type="button" className="initial-letter">
          {firstLetter}
        </button>
        <div className="inputs">
          <h2>{name}</h2>
          <h4>{comment}</h4>
        </div>
        <p>{time}</p>
      </div>
      <div className="both">
        <button type="button" onClick={changeLikeImg}>
          <img src={likeResult} alt="like" />
        </button>
        <button type="button" onClick={deleteId}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="like"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
