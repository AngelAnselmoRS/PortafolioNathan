import './iam.css';
import linkedinIcon from './linkedin.png';
import githubIcon from './github.png';

function IAM() {
    return (
        <div className='iam' id='inicio'>
            <div className='iam-fondo'></div>
            <div className='presentacion'>
                <p className='Saludo'>Hola, soy</p>
                <p className='Nombre'>Nathan Zaid</p>
                <p className='Titulo'>Diseñador Frontend</p>
                <p className='Descripcion'>Desarrollo experiencias digitales que combinan diseño, rendimiento y usabilidad.</p>
                <div className='BotonesIam'>
                    <a href="#contacto" className='BotonProyectos'>Ver Proyectos</a>
                    <a href='#sobremi' className='BotonSobreMi'>Sobre mi</a>
                </div>
                <div className='contacts'>
                    <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://mx.linkedin.com/in/nathan-zaid-torres-oliva-9301aa368&ved=2ahUKEwjEkIabu9OVAxXrmWoFHZvnDxkQFnoECCMQAQ&usg=AOvVaw38_e78BCnMLhySvvZ1lg4a" target="_blank" rel="noopener noreferrer" className='contactLink'>
                        <img src={linkedinIcon} alt='LinkedIn' className='contactIcon' />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/NathanTorres09?tab=overview&from=2026-07-01&to=2026-07-14" target="_blank" rel="noopener noreferrer" className='contactLink'>
                        <img src={githubIcon} alt='GitHub' className='contactIcon' />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default IAM;
