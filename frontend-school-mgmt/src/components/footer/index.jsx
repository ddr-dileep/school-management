import { Assets } from "../../utils/Assets";
import { AppHeading } from "../Heading";
import './footer.scss';
import Container from "react-bootstrap/Container";

export function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-left">
            <img
              src={Assets.logoIcon}
              alt="logo"
              className="footer-left-image"
            />
            <AppHeading title="Smart" className="footer-left-logo-title"/>
          </div>
        </div>
      </Container>
    </div>
  );
}
