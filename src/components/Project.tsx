import React from "react";
import { useTranslation } from "react-i18next";
import s from "../styles/project.module.css";
import { PanelsTopLeft } from "lucide-react";

type Props = {
  readonly image: string;
  readonly imageAlt: string;
  readonly header: string;
  readonly description: string;
  readonly details: string[];
  readonly status: string;
  readonly tech: string;
  readonly github: string;
  readonly website: string;
};

export default function Project(props: Props): React.JSX.Element {
  const [showDetails, setShowDetails] = React.useState<boolean>(false);

  const { t } = useTranslation();

  function modalToggle(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === "Escape") {
      setShowDetails(false);
    }
  }

  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (showDetails) {
      modalWrapperRef.current?.focus();
    }
  }, [showDetails]);

  return (
    <>
      <button
        className={s.projectCard}
        onClick={() => setShowDetails((prev) => !prev)}
      >
        <img src={props.image} alt={props.imageAlt} />
        <h3>{props.header}</h3>
        <p className={s.projectDesc}>{props.description}</p>
        <p className={s.status}>{props.status}</p>
      </button>

      {showDetails && (
        <div
          className={s.cardDetailWrap}
          ref={modalWrapperRef}
          onClick={() => setShowDetails((prev) => !prev)}
          onKeyDown={(e) => {
            modalToggle(e);
          }}
          tabIndex={0}
        >
          <div
            className={s.cardDetail}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={s.imageContainer}>
              <img src={props.image} alt={props.imageAlt} />
            </div>

            <div className={s.info}>
              <h3>{props.header}</h3>
              <p className={s.projectDesc}>{props.description}</p>

              <ul>
                {props.details.map((line) => {
                  return <li key={line}>{line}</li>;
                })}
              </ul>

              <p>
                <span>{t("tech-used")}</span>
                {props.tech}
              </p>

              <div className={s.btnContainer}>
                <button
                onClick={() => window.open(props.github, "_blank")}
                className={s.btn}
              >
                <div className="github icon"></div>
                {t("githubLink")}
              </button>
              { props.website.length > 0 && (
                <a href={props.website} target="_blank">
                  <button className={s.btn}>
                    <PanelsTopLeft />
                    Website
                  </button>
                </a>
              )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}