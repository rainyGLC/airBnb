import styled from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg";



export const BannerWrapper = styled.div`
  height: 529px;
  background: url(${coverImg}) center/cover;
  //用字符串就用require
  /* background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover; */
`
