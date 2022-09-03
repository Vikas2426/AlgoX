/* eslint-disable no-loop-func */
import Button from './Button';
import StyledHeader from './styles/StyledHeader.styled';

function Header() {
  const clickHandler = () => {
    // const i = 0;
    for (let i = 0; i < 48; i += 1) {
      // eslint-disable-next-line no-undef
      const docBars = document.querySelectorAll('.bars');
      const style1 = docBars[i].style;
      const style2 = docBars[i + 1].style;
      setTimeout(() => {
        style1.backgroundColor = 'pink';
        style2.backgroundColor = 'pink';
        const temp = style1.height;
        style1.height = style2.height;
        style2.height = temp;
      }, 1000 * i);

      setTimeout(() => {
        style1.backgroundColor = 'turquoise';
        style2.backgroundColor = 'turquoise';
      }, 1000 * (i + 1));
    }
  };
  return (
    <StyledHeader>
      <div>
        <Button name="Bubble Sort" clickHandler={clickHandler} />
        <Button name="Insertion Sort" />
        <Button name="Selection Sort" />
        <Button name="Merge Sort" />
      </div>
    </StyledHeader>
  );
}

export default Header;
