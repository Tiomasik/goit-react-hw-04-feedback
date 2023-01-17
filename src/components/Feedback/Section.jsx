import PropTypes from 'prop-types';
import { StyleSection } from './Section.styled';


const Section = ({ title, children }) => (
  <StyleSection>
    <h2>{ title }</h2>
    { children }
  </StyleSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Section;

