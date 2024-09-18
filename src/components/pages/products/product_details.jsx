import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const product = useLoaderData();
  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <Container>
      <Row className="my-3">
        <Col xs={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col xs={6}>
          <h1>{product.title}</h1>
          <h4>{product.description}</h4>
          <h3>{product.price}</h3>
          <Button variant="warning" className="w-100">
            Add to cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
