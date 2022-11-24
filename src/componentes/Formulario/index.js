import React from "react";
import "./formulario.css";

function Formulario() {

    return (
        <section className="section">
            <section>
                <h2>ENVIE UM E-MAIL</h2>
            </section>

            <section className="formulario">
                <div className="dados">
                    <input placeholder="Nome *"></input>
                    <input placeholder="Email *"></input>
                </div>
                <textarea placeholder="Menssagem"></textarea>
                <button>ENVIAR</button>

            </section>
        </section>

    );
}

export default Formulario;