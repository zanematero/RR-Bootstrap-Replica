import logo from "../images/Instacart.png"
import Button from 'react-bootstrap/Button'

export default function Nav() {
    return(
        <div >
            <div style={{display: 'inline'}}>
                <a href="/">
                    <img src={logo} alt="Instacart" style={{width: '17.5vw', height: '15vh'}}/>
                </a>
            </div>
            <div style={{position: "absolute", top: "5vh", right: "5vw"}}>
                <ul style={{listStyleType: 'none'}}>
                    <li style={{display: 'inline'}}><Button variant="outline-dark">Log In</Button></li>
                    <li style={{display: 'inline'}}> <Button variant="success">Sign Up</Button></li>
                </ul>
            </div>
        </div>
    )
}