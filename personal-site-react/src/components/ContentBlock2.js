import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentBlock2 = (props) => {
    return (
        <div className="container-fluid px-0">
            <div className="mx-auto row d-flex justify-content-center align-items-center content-block-2">
                <div className="col-6 d-flex justify-content-center">
                    <p className="big-p">{props.msg}</p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <h1 className="stylized-text">{props.head}</h1>
                </div>
            </div>
        </div>
    );
};

export default ContentBlock2;
