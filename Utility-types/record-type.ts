type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

/**
 * Map 자료형과 비슷하게 두 타입을 묶어준다.
 * Page를 key로 사용하고 PageInfo를 value로 사용한다.
 */
const navigation: Record<Page, PageInfo> = {
  home: { title: "Home Page" },
  about: { title: "About Page" },
  contact: { title: "Contact Page" },
};
