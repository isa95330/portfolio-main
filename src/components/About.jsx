import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="à propos de moi"
      className="mt-10 w-full h-screen  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            à propos de moi
          </p>
        </div>

        <p className="text-xl mt-20">
        Je suis une développeuse passionnée, avec une expertise en développement web et en data engineering. 
        Ma maîtrise de langages et technologies tels que HTML, CSS, JavaScript, Python, MySQL, React JS, et Django,
        me permet de créer des applications dynamiques et sur mesure. Je suis constamment en quête de nouveaux défis pour perfectionner mes compétences.

        Mon expérience en tant que développeuse m'a permis de concevoir et de développer une application basée sur des équations complexes pour maximiser les quantités de production,
        calculer les stocks, et optimiser la logistique dans un environnement industriel. J'ai également acquis des compétences en data engineering, 
        travaillant avec des outils tels que dbt, Airflow, BigQuery, ainsi qu'avec des services AWS comme S3 et EC2, et en intégrant des API.

        </p>

        <br />

        <p className="text-xl">
        Mes objectifs quotidiens sont de continuer à développer et à perfectionner mes compétences,
        tant en backend qu'en data engineering, 
        afin de proposer des solutions toujours plus performantes et adaptées aux besoins des entreprises.
        Je suis déterminée à rester à la pointe des technologies émergentes pour offrir des services innovants et efficaces.

        </p>
      </div>
    </div>
  );
};

export default About;