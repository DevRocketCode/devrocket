import * as React from "react"

const YouTubeVideo = ({ videoId, title, className }) => {
  const classes = className || "card wow fadeInLeft video-container";
  const titleToShow = title || "YouTube video player";
    
  return (
    <div className={classes} data-wow-delay="0.3s">
      <iframe className="youtube-video" src={`https://www.youtube.com/embed/${videoId}?controls=0`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
    </div>
  )
}

export default YouTubeVideo;
