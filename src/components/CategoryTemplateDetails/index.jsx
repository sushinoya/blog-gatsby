import React from 'react'
import { Link } from 'gatsby'
import Post from '../Post'
import './styles.scss'

class CategoryTemplateDetails extends React.Component {
  render() {
    const items = []
    const { category } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            {/* <Link className="post-single__home-button" to="/">
              All Articles
            </Link> */}
            <h1 className="page__title">{category}</h1>
            <div className="page__body">{items}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryTemplateDetails
