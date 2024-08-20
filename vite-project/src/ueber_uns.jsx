import React from 'react';
import useIntersectionObserver from './intersector.jsx';

export default function UeberUns() {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
  const [textRef, isTextVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [imgRef, isImgVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="ueber-uns" id="IDUeberUns">
      <div className="container-row1">
        <img src="/DomejoStudiosLogoBlackTp.png" alt="" 
        className={isImgVisible ? 'slideInLeft' : ''} 
        ref={imgRef}/>
        <p className={isTextVisible ? 'slideInRight' : ''} 
          ref={textRef}>
          Wir bauen <span>moderne Landingpages, Portfolios </span> und <span>One-Page Webseiten</span>, die Ihre Marke vollständig repräsentieren und mit <span>Ihrer Zielgruppe</span> in Resonanz stehen.
        </p>
      </div>
      <div className="container-row2">
        <figure 
          className={`ueber-uns-fig ${isVisible1 ? 'slideInDown' : ''}`} 
          ref={ref1}
        >
          <figcaption>
            Bei Domejo Studio liefern wir Qualität und optimieren jedes Detail
          </figcaption>
        </figure>

        <figure 
          className={`ueber-uns-fig ${isVisible2 ? 'slideInDown' : ''}`} 
          ref={ref2}
        >
          <figcaption>
            Das Ziel ist, Ihre Website sichtbar und gut auffindbar im Internet zu machen.
          </figcaption>
        </figure>

        <figure 
          className={`ueber-uns-fig ${isVisible3 ? 'slideInDown' : ''}`} 
          ref={ref3}
        >
          <figcaption>
            Wir bieten Wartung, Sicherheit und Webdesign-Beratung für Ihre optimale Online-Präsenz.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
