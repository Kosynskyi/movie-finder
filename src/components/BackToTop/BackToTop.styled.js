import styled from 'styled-components';

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 15px;
  opacity: 1;
  transition: 1000ms;
  /* border: ${p => p.theme.borders.none}; */
  border-radius: ${p => p.theme.radii.round};
  border-color: ${p => p.theme.colors.red};
  background-color: transparent;

  padding: ${p => p.theme.space[1]};
  cursor: pointer;
`;
