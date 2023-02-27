import React from "react";
import "./hero.css";
import "../../index.css";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";

export default function Hero() {
  const handleClickScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="hero" id="hero">
        <div className="hero-img">
          <img src={"/static/images/logo.png"} width="260px" alt="" />
          <div className="title-hero">
            La confiance n'est rien sans la qualité
          </div>
          <input
            type="button"
            onClick={handleClickScroll}
            className="btn-hero"
            value="Contacter Nous"
          />
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------
      -----------------------------------who we are section -----------------------------------
      --------------------------------------------------------------------------------------- */}
      <section id="who-we-are" className="who-we-are">
        <div className="title-section">Qui Nous Sommes</div>
        <p className="p-section">
          Notre société a pour secteur d'activité "Travaux divers" fondé depuis
          2023 . Nous avons pour domaine Construction et Services , avec une
          équipe de spécialistes qui ont une grande expérience dans leur
          domaine.
        </p>
      </section>
      {/* ----------------------------------------------------------------------------------
      -----------------------------------secteur section -----------------------------------
      --------------------------------------------------------------------------------------- */}
      <section id="secteur" className="secteur">
        <div className="title-section">Secteurs</div>
        <div className="container">
          <div className="secteur-cards">
            <div className="card-secteur">
              <div className="card-tite"> Construction </div>
              <img
                src={"/static/images/logo-secteur-3.svg"}
                alt=""
                className="card-img"
              />
              <p className="desc-card">
                construire vos maisons de rêve avec qualités, rapidete et prix
                imbattable
              </p>
            </div>
            <div className="card-secteur">
              <div className="card-tite"> menuisier travaux</div>
              <img
                src={"/static/images/logo-secteur-1.svg"}
                alt=""
                className="card-img"
              />
              <p className="desc-card">
                nous faisant tous travaux de menuiserie en bonne qualité et à
                vos choix
              </p>
            </div>
            <div className="card-secteur">
              <div className="card-tite"> Peintures Décoratives </div>
              <img
                src={"/static/images/logo-secteur-5.svg"}
                alt=""
                className="card-img"
              />
              <p className="desc-card">
                Avec un large choix de couleurs et un equipe expérimentée nous
                vous donnerent un tres bon resultat
              </p>
            </div>
            <div className="card-secteur">
              <div className="card-tite"> location des engins </div>
              <img
                src={"/static/images/logo-secteur-2.svg"}
                alt=""
                className="card-img"
              />
              <p className="desc-card">
                des engins en bon état et dernière modele à louer avec à
                imbattables
              </p>
            </div>
            <div className="card-secteur">
              <div className="card-tite"> fournisseur </div>
              <img
                src={"/static/images/logo-secteur-4.svg"}
                alt=""
                className="card-img"
              />
              <p className="desc-card">
                fournir tous produits et matériels ( construction, bureautique,
                marchandise ..... )
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------------------------------
      -----------------------------------travaux  section -----------------------------------
      --------------------------------------------------------------------------------------- */}
      <section className="Travaux" id="travaux">
        <div className="title-section">Nos Travaux</div>
        <div className="container">
          <div className="travaux-cards">
            <div className="travaux-card">
              <img
                className="img-card-travaux"
                src={"/static/images/3.jpg"}
                alt=""
              />
              <div className="desc-card-travaux">
                <div className="title-card-travaux">Cuisine</div>
                <p className="desc-travaux">
                  la conception de la cuisine de vos rêves et réalise son
                  installation dans les moindres détails
                </p>
              </div>
            </div>
            <div className="travaux-card">
              <img
                className="img-card-travaux"
                src={"/static/images/2.jpg"}
                alt=""
              />
              <div className="desc-card-travaux">
                <div className="title-card-travaux">Intérieure</div>
                <p className="desc-travaux">
                  Créez une ambiance chaleureuse. Ajoutez une touche moderne à
                  votre intérieur
                </p>
              </div>
            </div>
            <div className="travaux-card">
              <img
                className="img-card-travaux"
                src={"/static/images/1.jpg"}
                alt=""
              />
              <div className="desc-card-travaux">
                <div className="title-card-travaux">Façade</div>
                <p className="desc-travaux">
                  La façade de votre maison comme vous voulez être . À vous de
                  rêve et nous la réalisation
                </p>
              </div>
            </div>
            <div className="travaux-card">
              <img
                className="img-card-travaux"
                src={"/static/images/4.jpg"}
                alt=""
                srcset=""
              />
              <div className="desc-card-travaux">
                <div className="title-card-travaux">Extérieur </div>
                <p className="desc-travaux">
                  Conseils pour aménager votre extérieur à moindre coût
                </p>
              </div>
            </div>
            <div className="travaux-card">
              <img
                className="img-card-travaux"
                src={"/static/images/5.jpg"}
                alt=""
              />
              <div className="desc-card-travaux">
                <div className="title-card-travaux">Peinture </div>
                <p className="desc-travaux">
                  Décoration intérieure pour votre maison avec des peintures et
                  travail de qualité
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
      -----------------------------------contact  section -----------------------------------
      --------------------------------------------------------------------------------------- */}
      <Contact />
    </div>
  );
}
