import React, { useState } from 'react';
import './App.css'; // Se você quiser usar o CSS já existente, ou pode criar seu próprio estilo.

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      const alturaEmMetros = altura / 100; // Converte a altura para metros
      const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2); // Calcula o IMC
      setImc(imcCalculado);
      classificarIMC(imcCalculado);
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170"
            required
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
