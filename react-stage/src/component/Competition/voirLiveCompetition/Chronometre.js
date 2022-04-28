import { React, useEffect, useState } from 'react'

const Chronometre = ({ pushTime }) => {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  const enregistrer=()=>{
    pushTime(time)
    setTime(0)
  }

  return (
    <div>
      <div className="chronometre">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button className="btn btn-success" onClick={() => setRunning(true)}>Start</button>
          <button className="btn btn-danger" onClick={() => setRunning(false)}>Stop</button>
        </div>
      </div>
      <div className="formInscription">
        <button className="button" onClick={() => enregistrer()}>Enregistrer</button>
      </div>
    </div>
  )

}

export default Chronometre