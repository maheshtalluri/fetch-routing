// Write your JS code here

import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: []}

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData})
  }

  getItemDetails = () => {
    const {blogData} = this.state
    const {title} = blogData
    return <p>{title}</p>
  }

  render() {
    return <div>{this.getItemDetails()}</div>
  }
}

export default BlogItemDetails
