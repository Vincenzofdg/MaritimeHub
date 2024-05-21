function MainVessel({data}) {
  const { name, date, local, status_color } = data;

  return (
    <div className="vessel-container" style={{backgroundColor: status_color}}>
      <p id="vessel-name">{name}</p>
      <p id="vessel-place">Local: {local}</p>
      <div className="vessel-date-container">
        <p id="vessel-date-title">Previsão</p>
        <p id="vessel-date-time">Data: <strong>{(date.split(' '))[0]}</strong></p>
        <p id="vessel-date-time">Hora: <strong>{(date.split(' '))[1]}</strong></p>
      </div>
    </div>
  )
}

export default MainVessel;