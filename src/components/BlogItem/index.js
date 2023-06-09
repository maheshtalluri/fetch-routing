// Write your JS code here

import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = eachBlog
  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} alt={topic} className="blog-item-img" />
        <div className="blog-item-bottom">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-container">
            <img src={avatarUrl} alt={author} className="avatar-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
