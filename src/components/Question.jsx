import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import "../styles/question.css";
import questions from "../data/preguntas";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
export const Question = () => {
  const [{ user }, dispatch] = useStateValue();

  const [preguntas, setpreguntas] = useState([]);
  const [puntaje, setPuntaje] = useState(0);
  const [correctas, setcorrectas] = useState(0);
  const [partida, setpartida] = useState(true);
  const [indice, setIndice] = useState();
  const [preguntaActual, setpreguntaActual] = useState();
  const [contestado, setcontestado] = useState(false);
  const [marcada, setmarcada] = useState();
  const [porcentaje, setporcentaje] = useState();
  const history = useHistory();

  var numPreguntas = localStorage.getItem("numPreguntas");

  //Cada vez que cambie el indice actualiza la pregunta actual

  //Carga las preguntas de arreglo
  useEffect(async () => {
    const data = await questions(numPreguntas)
      .then((res) => {
        setpreguntas(res);
        setIndice(0);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setpreguntaActual(preguntas[indice]);
  }, [indice]);

  const verificarRes = (answer) => {
    setmarcada(answer);
    if (answer == preguntaActual.correct && !contestado) {
      setcontestado(true);
      setcorrectas(correctas + 1);
    } else {
      setcontestado(true);
    }
  };

  const NextQuestion = () => {
    setIndice(indice + 1);
    setcontestado(false);
  };

  const Terminar = () => {
    setpartida(false);
    //calcular porcentaje de correctas
    let porcentaje = (correctas / numPreguntas) * 100;
    let intPorcentaje = Math.round(porcentaje);
    setporcentaje(intPorcentaje);
  };

  const replay = () => {
    window.location.reload();
  };

  return (
    <div className="question">
      <div className="container ">
        <div className="question-container">
          <div className="text-center text-white">
            <h1>Quiz App</h1>
          </div>
          {partida && contestado && (
            <div className="d-flex w-100 h-100 m-4 justify-content-around">
              {marcada != preguntaActual.correct ? (
                <div className="alerta w-80">
                  <Alert
                    style={{
                      width: "700px",
                      Maxheight: "100%",
                      fontSize: "14px",
                    }}
                    variant="danger"
                  >
                    <b>Incorrecto.</b> {preguntaActual.messageIncorrect}
                  </Alert>
                </div>
              ) : (
                <div className="alerta w-80">
                  <Alert
                    style={{
                      width: "700px",
                      Maxheight: "100%",
                      fontSize: "14px",
                    }}
                    variant="success"
                  >
                    <b>Correcto!</b> {preguntaActual.messageCorrect}
                  </Alert>
                </div>
              )}

              <div className="buttons ">
                {preguntas.length != indice + 1 ? (
                  <button
                    onClick={NextQuestion}
                    className="btn btn-success btn-lg "
                  >
                    Siguiente Pregunta
                  </button>
                ) : (
                  <button onClick={Terminar} className="btn btn-success ">
                    Terminar Intento
                  </button>
                )}
              </div>
            </div>
          )}

          {!partida ? (
            <div className="d-flex h-100 w-100 mb-3 text-center justify-content-around align-items-center flex-column text-white">
              <h1>Partida terminada</h1>
              <h2>
                Haz contestado correctamente {correctas}/{preguntas.length}{" "}
                preguntas.
              </h2>
              {porcentaje < 20 && (
                <>
                <h1>No te desanimes, hay gente mas weona en el gobierno.</h1>
                <img 
                  style={{ height: "300px", width: "300px" }}
                src="https://lh3.googleusercontent.com/proxy/hm16biZcnhZF0eYP5pEgaLy3SYc1jFFjwizWq7q6tr9MkDLUJye67deWV16An96V19dzxzQKvJ_N3MneFCBKPRCPVmGS2aY6YdT3QJN78bOsZCXxpNyC7V3cWV3si-zMNBYQzRoGSeYssO9C" alt="No te desanimes :C"/>
                </>
                  
              )}
              {porcentaje >= 20 && porcentaje < 50 && (
                <>
                <h1>Sigue practicando! al menos te esforzaste.</h1>
                <img 
                  style={{ height: "320px", width: "400px" }}
                src="https://pbs.twimg.com/media/EgJtBGpWsAER0b3.jpg" alt="Sigue practicando!"/>
                </>
              )}
              {porcentaje >= 50 && porcentaje < 80 && (
                <>
                <h1>Casi lo logras crack!</h1>
                <img 
                  style={{ height: "300px", width: "300px" }}
                src="https://i.pinimg.com/originals/33/6f/07/336f07fa9a740da2c4acf7804ce05b48.jpg" 
                alt=" Casi lo logras!"  />
                </>
              )}
              {porcentaje >= 80 && porcentaje < 99 && (
                <>
                  <h1>¿Que eres? ¿un hacker?</h1>
                  <img
                    style={{ height: "300px", width: "300px" }}
                    src="https://toppng.com/uploads/preview/hacker-11556286709jrkbybk4op.png"
                    alt="img-hacker"
                    srcset=""
                  />
                </>
              )}
              {porcentaje == 100 && (
                <>
                  <h1>¿Beep Boop? ¿Estas seguro que no eres un robot?</h1>
                  <img
                    style={{ height: "300px", width: "300px" }}
                    src="https://images.vexels.com/media/users/3/178004/isolated/preview/e655dd1060eecb6094a56774f224cdfa-dibujo-de-ojo-de-mano-de-caja-de-robot-by-vexels.png"
                    alt="img-robot"
                  />
                </>
              )}
              <h1></h1>

              <button
                onClick={replay}
                className="btn btn-success p-3"
                style={{ width: "250px" }}
              >
                Volver a intentarlo
              </button>
            </div>
          ) : (
            <>
              {preguntaActual != undefined && (
                <>
                  <div className="d-flex  w-100 mb-3 justify-content-around text-white">
                    <h3>Resp. Correctas : {correctas}</h3>
                    <h3>
                      Pregunta {indice + 1}/{preguntas.length}
                    </h3>
                    <h3>Jugador: {user}</h3>
                  </div>
                  <div className="card question-card mt-2">
                    {preguntaActual.question}
                  </div>
                  <div className="answers-container">
                    {preguntaActual.answers.map((answer) =>
                      contestado ? (
                        <div
                          className="answer"
                          style={
                            contestado && answer.res != preguntaActual.correct
                              ? { backgroundColor: "red", color: "white" }
                              : { backgroundColor: "green", color: "white" }
                          }
                        >
                          {answer.res}
                        </div>
                      ) : (
                        <div
                          className="answer"
                          onClick={() => verificarRes(answer.res)}
                        >
                          {answer.res}
                        </div>
                      )
                    )}

                    {/*    {
                    preguntaActual.answers.map((answer) => (
                      <div className="answer" key={answer.id} onClick = {() => verificarRes(answer)}>
                          {answer.res}
                      </div>
                    ))
                  } */}

                    {/*   <div className="answer">
                  Respuesta 1
              </div>
              <div className="answer">
                  Respuesta 1
              </div>
              <div className="answer">
                  Respuesta 1
              </div> */}
                  </div>
                </>
              )}{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
