import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profilepic from "../../assets/img/profilepic.jpg";

const ProfilePic = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col
                    md="8"
                    className="content-block-1 d-flex flex-column align-items-center mx-auto p-5"
                >
                    <img className="profilepic mt-5" src={profilepic} />
                    <h2 className="mt-5">Hey! I'm Josh.</h2>
                    <p className="mt-2 mb-5">
                        This is my testbed for a react website. I intend to
                        eventually replace stuff with portfolio-style content.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePic;
