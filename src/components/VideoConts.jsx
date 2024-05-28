import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  // 선생님이 구해주신거
  // fetch('https://webstoryboy.github.io/site-youtube01/src/utils/subTest.json')
  useEffect(() => {
    // 내꺼
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
        setVideoDetail(result.items[0]);
      })
      .catch((error) => console.log(error));
  }, [id]);

  // if(!videoDetail == aaaa) {}와 같음.
  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__sub">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            <div className="desc">
              <h3>{title}</h3>
              <div className="channer">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
                <span>조회수 {viewCount}</span>
                <span>좋아요 {likeCount}</span>
              </div>
              <div></div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoConts;
