// eslint-disable-next-line no-unused-vars
export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
