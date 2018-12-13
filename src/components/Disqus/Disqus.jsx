import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import './style.scss'

class Disqus extends Component {
  constructor(props) {
    super(props)
    this.state = { toasts: [], toggleComments: false }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  toggleComments = e => {
    this.setState({ toggleComments: !this.state.toggleComments })
    e.preventDefault()
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'New comment available!!' })
    this.setState({ toasts })
  }
  render() {
    const { postNode, siteMetadata } = this.props
    if (!siteMetadata.disqusShortname) {
      return null
    }
    const post = postNode.frontmatter
    const url = siteMetadata.url + postNode.fields.slug

    const turnOnComments = (
      <span>
        Wish to <a onClick={this.toggleComments}>leave a comment</a> or read
        what others had to say?
      </span>
    )

    const turnOffComments = (
      <p className="centeredText">
        Don&apos;t wish to see disqus destroy the tranquility of the page?{' '}
        <a onClick={this.toggleComments}>Hide comments</a>.
      </p>
    )

    const toggleComments = !this.state.toggleComments
      ? turnOnComments
      : turnOffComments
    const commentsSection = this.state.toggleComments ? (
      <ReactDisqusComments
        shortname={siteMetadata.disqusShortname}
        identifier={post.title}
        title={post.title}
        url={url}
        category_id={post.category_id}
        onNewComment={this.notifyAboutComment}
      />
    ) : null

    return (
      <div>
        {commentsSection}
        {toggleComments}
      </div>
    )
  }
}

export default Disqus
