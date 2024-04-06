const SkillCard = ( props ) => {
    return (
        <div class=" text-center mt-2 hoverable" >
            <div>
                {props.imagen}
                <p>{props.titulo}</p>
            </div>
        </div>
    );
};
export default SkillCard