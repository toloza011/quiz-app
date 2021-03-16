import { useState } from 'react';
import { Button, Card, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import '../styles/login.css'
import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router';





export const Login = () => {

    const [user, setUser] = useState("");
    const [{ }, dispatch] = useStateValue();
    const history = useHistory();

    const [numPreguntas, setnumPreguntas] = useState(5);



    const Loguear = (e) => {
        e.preventDefault();

        //Ejecutamos dispatch
        dispatch({
            type: 'login',
            user: user
        });
        localStorage.setItem('userName', user);
        localStorage.setItem('numPreguntas',numPreguntas);
        history.push("/Test");

    }

    return (
        <div className="login">
            <Card className="card-login">
                <div className="title mb-4">
                    <h1>Quiz App</h1>
                </div>
                <h1>Bienvenid@</h1>

                <Form onSubmit={Loguear} className="form-login m-2">
                   
                   <Form.Group>
                   <Form.Label>Nombre de usuario</Form.Label>
                   <InputGroup
                        className="w-100">
                       

                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Esteban Toloza"
                            aria-label="Nombre"
                            aria-describedby="basic-addon1"
                            className="col-12 "
                            size="lg"
                            required
                            onChange={(e) => setUser(e.target.value)}
                        />

                    </InputGroup>
                       
                 </Form.Group>    
                   
                    <Form.Group  className="col-7"  controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Numero de preguntas</Form.Label>
                        <Form.Control value={numPreguntas} onChange={(e) => setnumPreguntas(e.target.value)}  className="col-12 " as="select" size="md" custom>
                            <option>3</option>
                            <option>5</option>
                            <option>8</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className="btn btn-success btn-hover text-white btn-outline-primary" type="submit" >
                        Comenzar
                </Button>
                </Form>


            </Card>
        </div>
    )
}
