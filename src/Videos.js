import React from "react";
import './App.css';
const VideoGallery = () => {
    const videos = [
        { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/Ce7RFAjqDB0" },
        { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/diebLYVxsYM" },
        { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/Ce7RFAjqDB0" },
        { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/VIDEO_ID_4" },
        { id: 5, title: "Video 5", url: "https://www.youtube.com/embed/VIDEO_ID_5" },
        { id: 6, title: "Video 6", url: "https://www.youtube.com/embed/VIDEO_ID_6" },
        
      ];
    
      const handleMouseOver = (e) => {
        const iframe = e.currentTarget.querySelector("iframe");
        const src = iframe.src;
        iframe.src = `${src}?autoplay=1&mute=1`; // Add autoplay and mute parameters
      };
    
      const handleMouseOut = (e) => {
        const iframe = e.currentTarget.querySelector("iframe");
        iframe.src = iframe.src.split("?")[0]; // Remove autoplay parameter
      };
    return ( 
        
        <div className="video-gallery">
           
        {videos.map((video) => (
          <div
            className="video-container"
            key={video.id}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <iframe
              src={video.url}
              title={video.title}
            //   frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
     );
}
 
export default VideoGallery;