import React from 'react';
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card
          title="Curso Copptec"
          images="../images/med.jpg"
          old_price="1.500"
          newPrice="899,90"
          rupess="R$"
          alt="Curso de Pos"
          exp_date="22-03-2020"
        />
        <Card
          title="Curso Copptec"
          images="../images/direito.png"
          old_price="2.200"
          newPrice="1.220"
          rupess="R$"
          alt="Curso de Pos"
          exp_date="22-03-2020"
        />
        <Card
          title="Curso Copptec"
          images="../images/efomm.png"
          old_price="2.200"
          newPrice="700"
          rupess="R$"
          alt="Curso de pos"
          exp_date="22-03-2020"
        />
        <Card
          title="Curso Copptec"
          images="../images/quimica.png"
          old_price="1.200"
          newPrice="1.270"
          rupess="R$"
          alt="Curso de pos"
          exp_date="22-03-2020"
        />
      </div>
    </div>
  );
}
export default App;