import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const Mod = styled.div`
  position: relative;
  max-width: 80vw;
  max-height: 95vh;
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: inherit;
  border: 1px solid #212121;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  &:focus,
  &:hover {
    transform: scale(1.05);
    border: 1px solid #f32013;
  }
`;

export const IconClose = styled.img`
  pointer-events: none;
`;
