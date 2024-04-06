import SkillCard from "./SkillCard"
import { AxiosIcon, CSSicon, ExpressIcon, GitIcon, HTMLIcon, JavaScriptIcon, JestIcon, MicrosoftSqlServerIcon, NodeIcon, PostmanIcon, ReactIcon, SQLiteIcon, SequelizeIcon, SwaggerIcon, TailwindIcon } from "../images/icons"

const SkillList = () => {
    return(
        <div className="container mt-2">
        <h2>Habilidades</h2>
        <div class="row ">
            <div className="col col-lg-2">
                <SkillCard imagen={<HTMLIcon/>} titulo="HTML"></SkillCard>
            </div>
            <div className="col col-lg-2">
               <SkillCard imagen={<CSSicon/>} titulo="CSS"></SkillCard> 
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<JavaScriptIcon/>} titulo="JavaScript"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<ReactIcon/>} titulo="React"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<TailwindIcon/>} titulo="Tailwind"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<GitIcon/>} titulo="Git"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<NodeIcon/>} titulo="Node.js"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<ExpressIcon/>} titulo="Express.js"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<AxiosIcon/>} titulo="Axios"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<PostmanIcon/>} titulo="Postman"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<MicrosoftSqlServerIcon/>} titulo="SQL Server"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<SequelizeIcon/>} titulo="Sequelize"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<SQLiteIcon/>} titulo="SQLite"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<JestIcon/>} titulo="Jest"></SkillCard>
            </div>
            <div className="col col-lg-2">
                <SkillCard imagen={<SwaggerIcon/>} titulo="Swagger"></SkillCard>
            </div>
        </div>
    </div>
    )
}

export default SkillList