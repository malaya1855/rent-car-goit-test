import PropTypes from "prop-types";
import { Message } from "./UniversalMessage.styled";

export const UniversalMessage = ({ content }) => {
  return <Message>{content}</Message>;
};
UniversalMessage.propTypes = {
  content: PropTypes.string.isRequired,
};
