import React from "react";
import "./video.css"

function Video(){
    return(

        <section className="video">
            <iframe width="800" height="400" src="https://www.youtube.com/embed/6WIjH8GdbU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>

    );
}

export default Video;