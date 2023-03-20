// Write your JS code here

import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogData: []}

  componentDidMount = () => {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedBlog = data.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      topic: eachBlog.topic,
      author: eachBlog.author,
    }))
    this.setState({blogData: updatedBlog})
  }

  render() {
    const {blogData} = this.state
    return (
      <div className="blog-list-container">
        {blogData.map(eachBlog => (
          <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
        ))}
      </div>
    )
  }
}

export default BlogList
