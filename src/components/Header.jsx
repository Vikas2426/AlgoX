import Button from './Button';
import StyledHeader from './styles/StyledHeader.styled';

function Header() {
  return (
    <StyledHeader>
      <div>
        <Button name="Bubble Sort" />
        <Button name="Insertion Sort" />
        <Button name="Selection Sort" />
        <Button name="Merge Sort" />
      </div>
    </StyledHeader>
  );
}

export default Header;
