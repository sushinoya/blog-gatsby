import React from 'react'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
} from 'react-share'

import './style.scss'

class SharePanel extends React.Component {

  render() {
    const title = this.props.title
    const description = this.props.description
    const category = this.props.category
    const tags = this.props.tags
    const url = 'blog.sushinoya.io'

    const facebook = (
      <FacebookShareButton className="shareButton" url={url} quote={'Check out' + title} hashtag={category} >
        <FacebookIcon className="shareIcon" size={35} round />
      </FacebookShareButton>
    )
    const linkedin = (
      <LinkedinShareButton className="shareButton" url={url} title={title} description={description} >
        <LinkedinIcon className="shareIcon" size={35} round />
      </LinkedinShareButton>
    )
    const twitter = (
      <TwitterShareButton className="shareButton" url={url} title={title} hashtags={tags} >
        <TwitterIcon className="shareIcon" size={35} round />
      </TwitterShareButton>
    )
    const telegram = (
      <TelegramShareButton className="shareButton" url={url} title={title} >
        <TelegramIcon className="shareIcon" size={35} round />
      </TelegramShareButton>
    )
    const whatsapp = (
      <WhatsappShareButton className="shareButton" url={url} title={title} >
        <WhatsappIcon className="shareIcon" size={35} round />
      </WhatsappShareButton>
    )
    const reddit = (
      <RedditShareButton className="shareButton" url={url} title={title} >
        <RedditIcon className="shareIcon" size={35} round />
      </RedditShareButton>
    )

    return (
      <div className="sharePanel">
        {facebook}
        {linkedin}
        {twitter}
        {telegram}
        {whatsapp}
        {reddit}
      </div>
    )
  }
}

export default SharePanel

