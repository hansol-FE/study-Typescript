{
  /** 정보가 많은 기존의 타입에서
   *  원하는 데이터의 일부분만 뽑아서 좀 더 제한적인 타입으로 사용하고 싶을 때 */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video title..",
      url: "https://..",
      data: "byte-date..",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
