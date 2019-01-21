import styled from 'styled-components';

export const CenterElements = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CustomLink = styled.a`
  display: inline-block;
  width: 20rem;
  padding: .5rem 0;
  margin: .5rem 1rem;
  border-width: .2rem;
  border-radius: .3rem;
  border-style: solid;
  border-image: initial;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
`;
