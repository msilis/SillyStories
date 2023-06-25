import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function InputForm(): JSX.Element {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="friendNameInput">
        <Form.Label>Enter a friend's Name</Form.Label>
        <Form.Control type="text" placeholder="Friend's Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="colourInput">
        <Form.Label>Give me a colour</Form.Label>
        <Form.Control type="text" placeholder="Colour" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="foodInput">
        <Form.Label>Give me the name of a food</Form.Label>
        <Form.Control type="text" placeholder="Food" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cityInput">
        <Form.Label>I need the name of a city</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="animalInput">
        <Form.Label>Give me the name of an animal</Form.Label>
        <Form.Control type="text" placeholder="Animal" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
