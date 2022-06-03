import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Nanum Gothic";
    font-weight: 400;
    src: local("Nanum-Gothic"),
      url("./fonts/AnyConv.com__NanumGothic-Regular.woff2") format("font-woff2"),
      url("./fonts/NanumGothic-Regular.woff") format("font-woff"),
      url("./fonts/NanumGothic-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Nanum Gothic";
    font-weight: 700;
    src: local("Nanum-Gothic"),
      url("./fonts/AnyConv.com__NanumGothic-Bold.woff2") format("font-woff2"),
      url("./fonts/NanumGothic-Bold.woff") format("font-woff"),
      url("./fonts/NanumGothic-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Nanum Gothic";
    font-weight: 800;
    src: local("Nanum-Gothic"),
      url("./fonts/AnyConv.com__NanumGothic-ExtraBold.woff2")
        format("font-woff2"),
      url("./fonts/NanumGothic-ExtraBold.woff") format("font-woff"),
      url("./fonts/NanumGothic-ExtraBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Prompt";
    src: local("Prompt"),
      url("./fonts/AnyConv.com__Prompt-ExtraBold\ \(1\).woff2")
        format("font-woff2"),
      url("./fonts/Prompt-ExtraBold.woff") format("font-woff"),
      url("./fonts/Prompt-ExtraBold.ttf") format("truetype");
  }
`;
