import { Card, CardBody, Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
    return (
        <Container fluid>
            <Row>
                <Col
                    className="py-4 d-flex align-items-center mx-auto justify-content-center content-block-1"
                    md="8"
                >
                    <h2>SKILLS</h2>
                </Col>
            </Row>
            <Row>
                <Col
                    md="8"
                    className="content-block-1 d-flex align-items-center mx-auto py-1 px-5"
                >
                    <Row className="mx-auto" style={{ width: "100%" }}>
                        <Col md="6">
                            <Card
                                className="skill-card mb-2"
                                style={{ backgroundColor: "#212529" }}
                            >
                                <CardBody className="d-flex align-items-center">
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-html5"
                                        size="5x"
                                        color="white"
                                    />
                                    <div
                                        style={{ width: "100%" }}
                                        className="justify-content-center d-flex"
                                    >
                                        <h2
                                            className="mt-2 ms-3"
                                            style={{ color: "white" }}
                                        >
                                            HTML5
                                        </h2>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="mx-auto">
                            <Card
                                className="skill-card"
                                style={{ backgroundColor: "#212529" }}
                            >
                                <CardBody className="d-flex align-items-center">
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-square-js"
                                        size="5x"
                                        color="white"
                                    />
                                    <div
                                        style={{ width: "100%" }}
                                        className="justify-content-center d-flex"
                                    >
                                        <h2
                                            className="mt-2 ms-3"
                                            style={{ color: "white" }}
                                        >
                                            JAVASCRIPT
                                        </h2>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col
                    md="8"
                    className="content-block-1 d-flex align-items-center mx-auto py-1 px-5"
                >
                    <Row className="mx-auto" style={{ width: "100%" }}>
                        <Col md="6" className="mx-auto">
                            <Card
                                className="skill-card mb-2"
                                style={{ backgroundColor: "#212529" }}
                            >
                                <CardBody className="d-flex align-items-center">
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-css3-alt"
                                        size="5x"
                                        color="white"
                                    />{" "}
                                    <div
                                        style={{ width: "100%" }}
                                        className="justify-content-center d-flex"
                                    >
                                        <h2
                                            className="mt-2 ms-3"
                                            style={{ color: "white" }}
                                        >
                                            CSS
                                        </h2>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6" className="mx-auto">
                            <Card
                                className="skill-card"
                                style={{ backgroundColor: "#212529" }}
                            >
                                <CardBody className="d-flex align-items-center">
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-react"
                                        size="5x"
                                        color="white"
                                    />{" "}
                                    <div
                                        style={{ width: "100%" }}
                                        className="justify-content-center d-flex"
                                    >
                                        <h2
                                            className="mt-2 ms-3"
                                            style={{ color: "white" }}
                                        >
                                            REACT
                                        </h2>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

// try two flex columns within the single strap col instead of rows for the skill cards
// chatgpt is awesome, nest in this way: cont - row - col - row - col col
export default Skills;
