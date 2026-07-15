import './habilities.css';
import htmlIcon from './html-tec.png';
import cssIcon from './css-tec.png';
import gitIcon from './git-tec.png';
import githubIcon from './github-tec.png';
import figmaIcon from './figma-tec.png';
import photoshopIcon from './photoshop-tec.png';
import illustratorIcon from './illustrator-tec.png';

const tools = [
    { name: 'HTML 5', icon: htmlIcon },
    { name: 'CSS 3', icon: cssIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Photoshop', icon: photoshopIcon },
    { name: 'Illustrator', icon: illustratorIcon },
];

function Habilities() {
    return (
        <div className="Habilities" id="habilidades">
            <p className="Title">Habilidades</p>
            <p className="Subtitle">Herramientas y tecnologías</p>
            <ul className="abilities-list">
                {tools.map((tool) => (
                    <li key={tool.name} className="ability-card">
                        <img src={tool.icon} alt={tool.name} className="ability-icon" />
                        <span className="ability-name">{tool.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Habilities;