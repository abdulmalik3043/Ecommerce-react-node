import styled from "styled-components";
import { Announcement } from "@material-ui/icons";

const Container = styled.div`
  height: 30px;
  background-color: powderblue;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announce = () => {
  return <Container><Announcement></Announcement> What are you waiting for! Free Shipping on Orders Above 299</Container>;
};

export default Announce;