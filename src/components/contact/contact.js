import { useState } from "react";
import "./contact.css";
import mailIcon from "./mail-icon.svg";
import locationIcon from "./location-icon.svg";
import scheduleIcon from "./schedule-icon.svg";

const infoItems = [
    { icon: mailIcon, text: "nathan.zaid.t.o@gmail.com", alt: "Correo electrónico" },
    { icon: locationIcon, text: "Aguascalientes, México", alt: "Ubicación" },
    { icon: scheduleIcon, text: "Disponible para proyectos.", alt: "Disponibilidad" },
];

function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mgogvpga", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <div className="Contact" id="contacto">
            <div className="ContactContainer">
                <div className="ContactText">
                    <p className="Title">Contacto</p>
                    <p className="Subtitle">
                        ¿Tienes algún proyecto en mente?
                    </p>

                    <p className="Text">
                        ¿Necesitas ayuda con tu proyecto web? Cuéntame más detalles y trabajaremos juntos para hacerlo realidad.
                    </p>
                    <div className="InfoList">
                        {infoItems.map((item) => (
                            <div className="infoItem" key={item.text}>
                                <img src={item.icon} alt={item.alt} className="infoIcon" />
                                <p className="info">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ContactForm">
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Asunto"
                    />

                    <textarea
                        name="message"
                        placeholder="Escribe tu mensaje..."
                        rows="7"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Enviando..." : "Enviar"}
                    </button>

                </form>

                {status === "success" && (
                    <p className="Text">
                        ¡Gracias! Tu mensaje ha sido enviado correctamente.
                    </p>
                )}

                {status === "error" && (
                    <p className="Text">
                        Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.
                    </p>
                )}
            </div>
            </div>
        </div>
    );
}

export default Contact;