import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about_me"
      className="mt-10 w-full h-screen  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            à propos de moi
          </p>
        </div>

        <p className="text-xl mt-20">
        Développeuse passionnée, j’ai des compétences en HTML, CSS, JavaScript, Python et MySQL, ainsi qu’en outils comme React JS et Django.
         Je suis dévouée et motivée, toujours à la recherche de nouveaux défis pour affiner mes compétences dans le développement et la data. 
         Je m’efforce constamment d’apprendre et de rester à jour avec les dernières tendances et technologies émergentes dans le domaine.

        Je suis une personne dévouée et motivée qui est toujours à la recherche de nouveaux défis pour affiner 
        mes compétences dans le monde du développement et de la data. 
        </p>

        <br />

        <p className="text-xl">
        Mes objectifs quotidiens sont de prendre de nouvelles compétences, de les mettre en pratique et de les perfectionner.
        , maîtriser le domaine de la data, 
         et de possèder une solide compréhension de la programmation orientée objet .
        Compléter mes connaissances backend, avec le langage python, afin de
         développer des fonctionnalités avancées et de travailler avec des bases de données pour créer 
         des sites web dynamiques et personnalisés 
        </p>
      </div>
    </div>
  );
};

export default About;