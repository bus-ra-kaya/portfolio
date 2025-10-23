import React from "react";
import {useTranslation} from "react-i18next";

interface ProjectProps{
  readonly image: string,
  readonly imageAlt: string,
  readonly header: string,
  readonly description: string,
  readonly status: string,
  readonly tech: string,
  readonly github: string,
};


export default function Project (props:ProjectProps): React.JSX.Element{
  
  const [showDetails,setShowDetails] = React.useState<boolean>(false);

  const { t } = useTranslation();

  const details = t(`${props.header}.details`, {returnObjects: true}) as string[];

  return (
    <>
    <button className="project-card"
    onClick={() => setShowDetails(prev => !prev)}
    >
      <img src={props.image} alt={props.imageAlt} />
      <h3>{props.header}</h3>
      <p className="project-desc">{props.description}</p>
      <p className="status">{props.status}</p>
    </button>

    {showDetails && 
      <button className="card-detail-wrap" onClick={() => setShowDetails(prev => !prev)}>
        <div className="card-detail">

          <img src={props.image} alt={props.imageAlt} />

          <div className="info">
            <section>
              <h3>{props.header}</h3>
              <p className="project-desc">{props.description}</p>
              {t("details")} <ul> {details.map((line) => {
                return <li key={line}>{line}</li>
              })}</ul>
              <p>{t("tech-used")} {props.tech}</p>
            </section>
            <button onClick={() => window.open(props.github, "_blank")} className="github-btn">
            <div className="github icon"></div>{t("githubLink")}
            </button>
          </div>

        </div>
      </button>
    }
    </>
  )
}