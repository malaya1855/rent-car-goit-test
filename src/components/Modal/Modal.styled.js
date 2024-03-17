import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-text-color);
  overflow: hidden;
  overflow-y: auto;
  transision: opacity; 0.3s;
  z-index: 999;
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 541px;
  display: flex;
  justify-content: center;
  align-itmes: center;
  transform: translateY(-50%) translateX(-50%);
`;
export const Content = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--primary-white-color);
  border-radius: 24px;
  padding: 40px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
`;
