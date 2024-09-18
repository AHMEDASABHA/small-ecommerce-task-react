import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="my-3">
        <Col xs={3}>
          <h2 className="mb-3">Categories</h2>
          <ButtonGroup vertical className="w-75 gap-2">
            <Button
              variant="warning"
              onClick={() => {
                navigate("/products/");
              }}
            >
              Electronics
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                navigate("/products/jewelery");
              }}
            >
              Jewelery
            </Button>

            <Button
              variant="warning"
              onClick={() => {
                navigate("/products/men's clothing");
              }}
            >
              {"Men's clothing"}
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                navigate("/products/women's clothing");
              }}
            >
              {"Women's clothing"}
            </Button>
          </ButtonGroup>
        </Col>
        <Col xs={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
