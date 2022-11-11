import styled from "styled-components";
import {ContentType, PageType} from "./../@types";
import {Link} from "react-router-dom";
import Wrapper from "./Wrapper";
import Title from "./Title";

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

          <Link to={"/calendar"}>Back to calendar</Link>

        <Title>
          {page.maori} - {page.english}
        </Title>

        <Description>
          {page.content}
        </Description>

          {page.contentType == ContentType.Image && <img src={page.src} />}
          {page.contentType == ContentType.Model && (
              <div className="ratio ratio-16x9">
                  <iframe
                      src={`https://jimtaylor1974.github.io/vr-viewer/index.html?url=${encodeURIComponent(
                          page.src
                      )}`}
                  ></iframe>
              </div>
          )}
      </Container>
    </Wrapper>
  );
}

export { Page };
