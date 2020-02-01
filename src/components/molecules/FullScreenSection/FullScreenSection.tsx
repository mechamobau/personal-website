import React, { ReactNode } from "react";

import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

const FullScreenSection = ({ children }: Props) => (
  <Wrapper>{children}</Wrapper>
);

export default FullScreenSection;
