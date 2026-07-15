import './projects.css';
import project1Image from './infera.svg';
import project2Image from './UrbanGo.JPG';

function Projects() {
    return (
        <div className="Projects" id="proyectos">
            <p className="Title">Proyectos</p>
            <p className="Subtitle">Algunos de mis proyectos</p>
            <div className="projects-container">
                <article className="project-card">
                    <img
                        className="project-image"
                        src={project1Image}
                        alt="Vista previa del proyecto 1"
                    />
                    <div className="project-content">
                        <h3 className="project-title">Infera</h3>
                        <p className="project-description">
                            Aplicacion gamificada para aprender finanzas personales, con retos, logros y recompensas.
                        </p>
                        <div className="project-tags">
                            <span>Kotlin</span>
                            <span>Ilustrator</span>
                            <span>Figma</span>
                        </div>
                        <a
                            className="project-link"
                            href="https://github.com/IceSCream-Development/Infera/tree/v2.1-Logros-Completo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver repositorio
                        </a>
                    </div>
                </article>

                <article className="project-card">
                    <img
                        className="project-image"
                        src={project2Image}
                        alt="Vista previa del proyecto 2"
                    />
                    <div className="project-content">
                        <h3 className="project-title">UrbanGo</h3>
                        <p className="project-description">
                            Aplicacion de transporte urbano que permitira a los usuarios planificar sus viajes, ver rutas y horarios en tiempo real, y recibir notificaciones sobre cambios en el servicio.
                        </p>
                        <div className="project-tags">
                            <span>Kotlin</span>
                            <span>Figma</span>
                            <span>Firebase</span>
                        </div>
                        <a
                            className="project-link"
                            href="https://github.com/Angel-Anselmo/UrbanGo/tree/v0.5"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver repositorio
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Projects;