import React from "react";
import Card from "./Card";

const CardList = () => {
    return (
        <div className="container mt-2">
            <h2>Proyectos</h2>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <Card imagen={require("../images/Clima App.jpg")} titulo="Gestion de Produccion" texto="Aplicacion de gestion de produccion" web="https://faesa.netlify.app/" repositorio="https://github.com/leomendoza261/Faesa"></Card>
                </div>
                <div class="col">
                    <Card imagen={require("../images/Clima App.jpg")} titulo="Clima App" texto="Aplicacion del clima" web="https://zesty-mousse-04c21f.netlify.app/" repositorio="https://github.com/leomendoza261/Clima-app"></Card>
                </div>
                <div class="col">
                    <Card imagen={require("../images/Transporte App.jpg")} titulo="Transporte App" texto="Transporte publico de Buenos Aires" web="https://jazzy-cupcake-28c8c8.netlify.app/" repositorio="https://github.com/leomendoza261/bus-api"></Card>
                </div>
                <div class="col">
                    <Card imagen={require("../images/piedra, papel y tijeras.jpg")} titulo="Piedra, Papel y Tijeras" texto="Clasico juego de piedra, papel y tijeras" web="https://6563acfdfdb1c330d1781994--steady-cassata-0bb7b2.netlify.app/" repositorio="https://github.com/leomendoza261/Calculadora"></Card>
                </div>
                <div class="col">
                    <Card imagen={require("../images/Calculadora.jpg")} titulo="Calculadora" texto="Calculadora de operaciones basicas" web="https://64bfd410ce2bb200af268fbb--iridescent-scone-34ece7.netlify.app/" repositorio="https://github.com/leomendoza261/Calculadora"></Card>
                </div>
                <div class="col">
                    <Card imagen={require("../images/Contador de clicks.jpg")} titulo="Contador" texto="Contador de clics" web="https://64c010cf14973e070e519cf2--venerable-kashata-a4ef6a.netlify.app/" repositorio="https://github.com/leomendoza261/Contador-de-clicks"></Card>
                </div>
                <div class="col">
                    <Card imagen={require("../images/NFT Card.jpg")} titulo="NFT Card" texto="NFT card Equilibrium #3429 by Pedro Mendoza" web="https://quirky-torvalds-4605f9.netlify.app/" repositorio="https://github.com/leomendoza261/NTF-Card"></Card>
                </div>
                <div class="col">
                    <Card imagen={require("../images/Huddle.jpg")} titulo="Huddle" texto="Huddle reimagina la forma en que construimos comunidades." web="https://wizardly-edison-951ee2.netlify.app/" repositorio="https://github.com/leomendoza261/Huddle"></Card>
                </div>
            </div>
        </div>

    );
};
export default CardList;