import PropTypes from "prop-types";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function ProductsList() {
  const products = useLoaderData();
  return (
    <Container>
      <Row>
        {products != [] &&
          products.map((product) => {
            return (
              <Col key={product.id} xs={4}>
                <SingleProduct product={product} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
SingleProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

function SingleProduct(props) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const product = props.product;
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button
          variant="primary"
          className="w-100"
          onClick={() => handleNavigate(`/details/${product.id}`)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
