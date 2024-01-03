{
  /**
   * pick type과 반대로 원하는것을 빼버린다.
   * key들을 나열할 때, 타입에 없는 키도 넣을 수 있다.
   * type Exclude<T, U> = T extends U ? naver : T
   * U가 T안에 있다면 사용하지말고 없다면 사용한다.
   */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data" | "test">;

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video title..",
      url: "https://..",
      data: "byte-date..",
    };
  }

  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
