import React, { useEffect, useState } from 'react';
import { Category, Videos } from './';
import { useParams } from 'react-router-dom';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('아이브');
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // 선생님이 주신거(트래픽 초과시 이용)
  // fetch(`https://webstoryboy.github.io/site-youtube01/src/utils/subTest.json`)
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${selectCategory}&type=video&key=AIzaSyAys6Kt7lJa-dj-2i4zK4pZOhE0BXUdd-Q`
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
      })
      .catch((error) => console.log(error));
  }, [selectCategory]);

  // if (!videos?.items) return <Loader />;

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        {/* <h2>{selectCategory} 유튜버</h2> 기본 설정 가능  */}
        <h2>{selectCategory}</h2>
        <Videos videos={videos} />
        {/* {videos && <Videos videos={videos} />} */}
      </section>
    </main>
  );
};

export default MainConts;
