import PropTypes from "prop-types";
import { useEffect } from "react";

import { Backdrop, BtnClose, Content, Wrapper } from "./Modal.styled";
import { X } from "react-feather";
import { AdvertInfo } from "../AdvertInfo/AdvertInfo";

export const Modal = ({ content, onClose, isOpen }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const handleNoScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    if (isOpen) {
      handleNoScroll();
      window.addEventListener("resize", handleNoScroll);
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleNoScroll);
      document.body.style.overflow = "auto";
    };
  }, [onClose, isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <Content>
          <BtnClose type="button" onClick={onClose}>
            <X />
          </BtnClose>
          <AdvertInfo car={content} />
        </Content>
      </Wrapper>
    </Backdrop>
    //
  );
};

Modal.propTypes = {
  content: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
