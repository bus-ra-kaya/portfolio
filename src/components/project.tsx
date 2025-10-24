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

  function modalToggle(e: React.KeyboardEvent<HTMLElement>){
    if(e.key === "Escape"){
      setShowDetails(false);
    }
  }

  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if(showDetails) {
      modalWrapperRef.current?.focus();
    }
  }, [showDetails]);

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
      <div className="card-detail-wrap" ref={modalWrapperRef} onClick={() => setShowDetails(prev => !prev)}
      onKeyDown={(e) => {modalToggle(e)}} tabIndex={0}>
        <div className="card-detail" onClick={(e) => e.stopPropagation()}>

          <img src={props.image} alt={props.imageAlt} />

          <div className="info">
           
              <h3>{props.header}</h3>
              <p className="project-desc">{props.description}</p> 
              
              <ul> {details.map((line) => {
                return <li key={line}>{line}</li>
              })}</ul>
              
              <p>
                <span> {t("tech-used")} </span> 
                {props.tech}</p>
          
            <button onClick={() => window.open(props.github, "_blank")} className="github-btn">
            {t("githubLink")}
            </button>
          </div>

        </div>
      </div>
    }
    </>
  )
}