import React from "react";

const Card = ( props ) => {
    return (
        <div class="card mb-2">
            <img src={ props.imagen } class="card-img-top img-hover" alt="NFT Card site" />
                <div class="card-body">
                    <h5 class="card-title">{props.titulo}</h5>
                    <p class="card-text">{props.texto}</p>
                    <a href={props.web} class="btn btn-dark me-2 hoverable">{props.titulo}</a>
                    <a href={props.repositorio} class="btn btn-dark me-1 hoverable">Repositorio</a>
                </div>
        </div>
    );
};
export default Card
