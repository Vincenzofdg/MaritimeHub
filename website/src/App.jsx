import { useState, useEffect } from "react";
import mysql from "mysql";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Configuração da conexão
    const connection = mysql.createConnection({
      host: "srv1083.hstgr.io",
      user: "u954605081_gaspar_dev",
      password: "B9t5qrpj5213*",
      database: "u954605081_gaspar_vessels"
    });

    // Realiza a consulta
    connection.connect();
    connection.query("SELECT * FROM vessels", function (error, results, fields) {
      if (error) {
        console.error(error);
      } else {
        setData(results);
      }
    });
    connection.end();
  }, []);

  return (
    <div>
      <h1>Resultados da consulta:</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
