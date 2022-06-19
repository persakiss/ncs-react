import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
{/* import { useState } from "react"; */}


const SubHeader = ({ current, detail }) => {

{/* const [cnt, setCnt] = useState(0); */}


  return(
    <Row>
      <Col>
      {/* Breadcrumb onClick={() => setCnt(cnt + 1)}> */}
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/'>Home </Link> {/* cnt */}
          </BreadcrumbItem>
          {detail && (
            <BreadcrumbItem>
              <Link to='/directory'>Directory</Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
        <h2>{current}</h2>
        <hr />
      </Col>
    </Row>
  )
};

export default SubHeader;