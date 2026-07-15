import "./aboutme.css";
import detailsIcon from "./details-icon.svg";
import timeIcon from "./time-icon.svg";
import creativityIcon from "./creativity-icon.svg";
import coffeeImage from "./coffee.png";

function AboutMe() {
    return (
        <div className="AboutMe" id="sobremi">
            <div className="AboutMeContent">
                <p className="Title">Sobre mi</p>
                <p className="Subtitle">Diseñador Frontend</p>
                <p className="Text">
                    Soy un diseñador frontend apasionado por crear experiencias digitales atractivas y funcionales. Me especializo en el desarrollo de interfaces de usuario intuitivas y visualmente impactantes, utilizando las últimas tecnologías web para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.
                </p>
                <div className="SubsubtitleWrap">
                    <img src={detailsIcon} alt="Detalles" className="SubsubtitleIcon" />
                    <p className="Subsubtitle">Atencion a los detalles</p>
                </div>
                <p className="Text">
                    Presto atención a los detalles en cada proyecto, asegurándome de que cada elemento esté perfectamente alineado y funcione como se espera. Esta dedicación al detalle me permite crear experiencias de usuario de alta calidad.
                </p>
                <div className="SubsubtitleWrap">
                    <img src={timeIcon} alt="Rendimiento" className="SubsubtitleIcon" />
                    <p className="Subsubtitle">Rendimiento</p>
                </div>
                <p className="Text">
                    Me esfuerzo por optimizar el rendimiento de mis diseños, asegurándome de que sean rápidos y eficientes. Creo en la importancia de un buen rendimiento para proporcionar una experiencia de usuario superior.
                </p>
                <div className="SubsubtitleWrap">
                    <img src={creativityIcon} alt="Creatividad" className="SubsubtitleIcon" />
                    <p className="Subsubtitle">Creatividad</p>
                </div>
                <p className="Text">
                    Me encanta pensar de manera creativa y encontrar soluciones innovadoras para los desafíos del diseño frontend. Creo que la creatividad es clave para crear experiencias de usuario únicas y memorables.
                </p>
            </div>
            <div className="AboutMeImageWrap">
                <img src={coffeeImage} alt="Café" className="AboutMeImage" />
            </div>
        </div>
    );
}

export default AboutMe;
