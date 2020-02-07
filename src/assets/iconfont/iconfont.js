import { createGlobalStyle } from "styled-components";

export const IconStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url ('iconfont.eot?t=1565320061289'); /* IE9 */
  src: url ('iconfont.eot?t=1565320061289#iefix' ... 省略 base64 巨长字符) format ('embedded-opentype'), /* IE6-IE8 */
  url ('data:application/x-font-woff2;charset=utf-8) format ('woff2'),
  url ('iconfont.woff?t=1565320061289') format ('woff'),
  url ('iconfont.ttf?t=1565320061289') format ('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url ('iconfont.svg?t=1565320061289#iconfont') format ('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
