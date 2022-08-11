import bgVideo from "../media/videos/background_video.mp4"

export default function BGVideo()
{

    return(
      <div className="bg-video">
        <video src={bgVideo} autoPlay loop muted/>
        <div className="overlay"></div>
      </div>  
    );
}
