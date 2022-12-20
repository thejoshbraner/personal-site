import { Card, CardBody, Row, Col, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = () => {
    return (
        <Card className="skill-card" style={{ backgroundColor: "#212529" }}>
            <CardBody className="d-flex align-items-center">
                <FontAwesomeIcon
                    icon="fa-brands fa-square-js"
                    size="5x"
                    color="white"
                />
                <h2 className="mt-3 ms-3" style={{ color: "white" }}>
                    JAVASCRIPT
                </h2>
            </CardBody>
        </Card>
    );
};
export default SkillCard;
