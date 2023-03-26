import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

export default function Location() {
    return(
        <div class="p-3 mb-2 bg-success text-black" style={{height: '50vh'}}>
            <div>
                <Form.Select aria-label="Default select example" size='lg' style={{width: '7.5vw'}}>
                    <option>US</option>
                    <option value="1">CA</option>
                    <option value="2">UK</option>
                    <option value="3">MX</option>
                </Form.Select>
            </div>
            <div style={{margin: '5vw'}}>
                <h1>Order groceries for delivery or pickup today</h1>
                <p>Whatever you want from local stores, brought right to your door.</p>
                <InputGroup className="mb-3" style={{width: '40vw'}}>
                    <Form.Control
                        placeholder="Enter your address"
                        aria-label="Enter your address"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Go
                    </Button>
                </InputGroup>

            </div>
        </div>
    )
}