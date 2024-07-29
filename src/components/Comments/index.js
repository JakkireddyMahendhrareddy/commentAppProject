import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      active: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  itemDelete = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, active: !eachComment.active}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        itemDelete={this.itemDelete}
        toggleIsLiked={this.toggleIsLiked}
      />
    ))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1>Comments</h1>
          <div className="first">
            <form className="second" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <br />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="img"
            />
          </div>
          <hr className="hr-line" />
          <div className="inner-comment">
            <button type="button" className="count ">
              {commentsList.length}
            </button>
            <p>Comments</p>
          </div>
          <ul className="comment-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
