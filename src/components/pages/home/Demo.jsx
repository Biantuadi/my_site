import styled from "styled-components";

export default function Demo() {
  return (
    <DemoStyled>
      <img
        src="/demo_crazee_burger.gif"
        alt="demo_crazee_burger"
        className="demo_crazee_burger"
      />
    </DemoStyled>
  );
}

const DemoStyled = styled.div`
  right: 193px;
  top: 147px;
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: white;
  z-index: -1;

  img {
    width: 465px;
    height: 280px;
    border-radius: 0;
    border-top-right-radius: 80px;
    border-top-left-radius: 80px;
    top: 109px;
    right: 18px;
    position: absolute;
  }
`;
