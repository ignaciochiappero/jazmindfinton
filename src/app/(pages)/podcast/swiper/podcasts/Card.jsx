import React from "react";
import Image from "next/image";

const cardData = {
  "laPeleaDelDorado": [
    {
      "id": 1,
      "title": "Episodio 1: La red que atrapa a todos",
      "description": "Explora cómo la crisis económica y la pesca ilegal afectan a los pescadores de Santa Fe.",
      "image": "/images/la-pelea-1.png"
    },
    {
      "id": 2,
      "title": "Episodio 2: El río que ya no da",
      "description": "El impacto de la sequía y la bajante del Paraná en la pesca y la economía local.",
      "image": "/images/la-pelea-2.png"
    },
    {
      "id": 3,
      "title": "Episodio 3: Pescadores en extinción",
      "description": "Cómo la pesca artesanal está desapareciendo debido a la falta de apoyo y competencia.",
      "image": "/images/la-pelea-3.png"
    },
    {
      "id": 4,
      "title": "Episodio 4: El dorado: moneda de cambio",
      "description": "El dorado se convierte en objeto de comercio ilegal en medio de la crisis.",
      "image": "/images/la-pelea-4.png"
    },
    {
      "id": 5,
      "title": "Episodio 5: Los que se quedan en la orilla",
      "description": "Historias de pescadores que abandonan el río en busca de nuevas oportunidades.",
      "image": "/images/la-pelea-5.png"
    },
    {
      "id": 6,
      "title": "Episodio 6: Esperanza bajo las aguas",
      "description": "Proyectos de conservación y cooperativas que luchan por salvar el dorado.",
      "image": "/images/la-pelea-6.png"
    },
    {
      "id": 7,
      "title": "Episodio 7: El futuro del dorado",
      "description": "Posibles soluciones y caminos hacia la sostenibilidad de la pesca en Santa Fe.",
      "image": "/images/la-pelea-7.png"
    }
  ],
  "antesQueSuceda": [
    {
      "id": 1,
      "title": "Carta 1: La amistad",
      "description": "Un recordatorio sobre la importancia de elegir amigos que te impulsen a ser mejor.",
      "image": "/images/antes-que-suceda-1.png"
    },
    {
      "id": 2,
      "title": "Carta 2: Los cambios",
      "description": "Sobre cómo los cambios físicos y emocionales son parte de la adolescencia.",
      "image": "/images/antes-que-suceda-2.png"
    },
    {
      "id": 3,
      "title": "Carta 3: La autoestima",
      "description": "Una reflexión sobre la importancia de quererte a ti misma y aceptar quién eres.",
      "image": "/images/antes-que-suceda-3.png"
    },
    {
      "id": 4,
      "title": "Carta 4: Las decisiones",
      "description": "Consejos sobre cómo tomar decisiones que te acerquen a tus metas.",
      "image": "/images/antes-que-suceda-4.png"
    },
    {
      "id": 5,
      "title": "Carta 5: La familia",
      "description": "Recuerda siempre que la familia está para apoyarte en cada paso.",
      "image": "/images/antes-que-suceda-5.png"
    },
    {
      "id": 6,
      "title": "Carta 6: La educación",
      "description": "La importancia de mantener el enfoque en tus estudios y tu desarrollo personal.",
      "image": "/images/antes-que-suceda-6.png"
    },
    {
      "id": 7,
      "title": "Carta 7: Los sueños",
      "description": "Un mensaje sobre nunca dejar de perseguir tus sueños, no importa lo difícil que parezca.",
      "image": "/images/antes-que-suceda-7.png"
    }
  ]
};

const Card = ({ podcastType, episodeIndex }) => {
  const podcast = cardData[podcastType];
  const episode = podcast[episodeIndex];

  return (
    <div className="bg-pink-100  rounded-3xl w-full max-w-2xl mx-auto text-start bg-white/50 backdrop-blur-md border border-white/20 shadow-lg shadow-white/10 p-2">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Imagen */}
        <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
          <Image
            src={episode.image}
            width={400}
            height={400}
            alt={episode.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col md:w-2/3">
          <h2 className="max-sm:text-sm sm:text-xl font-bold mb-2 text-secondary-400">{episode.title}</h2>
          
          <p className="text-sm text-gray-700 mb-4 flex-grow">
            {episode.description}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center mb-5 gap-2">
            <button className="w-full sm:w-auto px-4 py-1 bg-white hover:bg-red-500 hover:text-white transition-all rounded-full text-pink-600 font-medium text-sm">
              Escuchar en YouTube
            </button>

            <button className="w-full sm:w-auto px-4 max-sm:py-1 sm:py-2 bg-white hover:bg-green-500 hover:text-white transition-all rounded-full text-pink-600 font-medium text-sm">
              Escuchar en Spotify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;