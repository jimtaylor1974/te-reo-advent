import styled from "styled-components";
import { ContentType, PageType } from "./../@types";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import Title from "./Title";
import SubTitle from "./SubTitle";
import nth from "../lib/nth";
import Footer from "./Footer";

const Container = styled.nav`
  text-align: center;
`;

const Description = styled.div`
  margin-bottom: 48px;
`;

interface Props {
  page: PageType;
}

function Page({ page }: Props) {
  return (
    <Wrapper color={page.color}>
      <Container>
        {page.day}
        {nth(page.day)} December <Link to={"/calendar"}>Back to calendar</Link>
        <Title>
          {page.maori} - {page.english}
        </Title>
        <SubTitle>by {page.author}</SubTitle>
        <Description>{page.content}</Description>
        {page.contentType == ContentType.Image && (
          <img src={page.src} style={{ maxHeight: "420px" }} />
        )}
        {page.contentType == ContentType.Model && (
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://jimtaylor1974.github.io/vr-viewer/index.html?url=${encodeURIComponent(
                page.src
              )}`}
            ></iframe>
          </div>
        )}
        {page.footer && <Footer>{page.footer}</Footer>}
      </Container>
    </Wrapper>
  );
}

export { Page };
