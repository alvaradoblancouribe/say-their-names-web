import styled from "styled-components";

const Profile = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 10px 0px;
  padding: 10px; */
`;

const PersonalInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  /* width: 726px;
  height: 360px;
  margin: 10px 0px;
  padding: 10px; */
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
const Photo = styled.div`
  width: 40%;
  min-height: 500px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PersonSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      margin: 0px;
    }
  }
`;

const H4 = styled.h4`
  margin: 0px;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: rgba(16, 16, 16, 0.47129);
`;

const Div = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  margin: 10px;
`;

const Age = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 25%;
  border-right: 1px solid #d8d8d8;
  h2 {
    margin: 0px;
  }
`;

const Children = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  padding-left: 15px;
  h2 {
    margin: 0px;
  }
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 217px;
  margin: 10px;
  h2 {
    margin: 0px;
  }
`;

const Button = styled.div`
  margin: 1rem 0px;
  button {
    width: 244px;
    height: 46px;
    color: white;
    background-color: black;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    :hover {
      opacity: 0.9;
    }
  }
`;

const ShareSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 247px;
  /* height: 20px; */
  p {
    margin: 5px 0px;
  }
`;

const Share = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  p {
    margin: 5px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
  }
`;

const H2 = styled.h2`
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #101010;
  text-transform: uppercase;
`;

const Context = styled.section`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 2rem;
  }
`;

export {
  Profile,
  PersonalInformation,
  Photo,
  PersonSection,
  Name,
  H4,
  Div,
  Age,
  Children,
  Location,
  ShareSection,
  Button,
  H2,
  Share,
  Context,
};