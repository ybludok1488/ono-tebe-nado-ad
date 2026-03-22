/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Youtube, Pin as Pinterest } from "lucide-react";

const VKIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.162 18.994c-6.098 0-9.57-4.172-9.714-11.109h3.05c.103 5.089 2.341 7.247 4.117 7.692V7.885h2.87v4.393c1.757-.186 3.609-2.175 4.233-4.393h2.87a9.38 9.38 0 0 1-3.876 5.53 9.61 9.61 0 0 1 4.547 5.58h-3.15c-.619-1.932-2.165-3.413-4.117-3.609v3.609h-1.129v-.001z"/>
  </svg>
);

const Header = () => (
  <header className="header">
    <nav className="header__menu">
      <ul className="header__links-list">
        <li className="header__links-list-item header__links-list-item_no-bullit">
          <a className="header__link header__link_active" href="#">главная</a>
        </li>
        <li className="header__links-list-item">
          <a className="header__link" href="#">посмотреть лоты</a>
        </li>
        <li className="header__links-list-item">
          <a className="header__link" href="#">об аукционе</a>
        </li>
      </ul>
    </nav>
    <a className="header__logo">
      <img className="header__logo-image" src="/Logo.png" alt="Логотип Оно тебе надо" />
    </a>
    <address className="address header__address">
      <a className="address__link" href="tel:+99995555555">+9 999 555 5555</a><br />
      <a className="address__link" href="mailto:info@sobaka.ge">info@sobaka.ge</a>
      <p>наб. Принсенграхт 263-265, Амстердам</p>
    </address>
  </header>
);

const Hero = () => (
  <section className="cover">
    <div className="overlay"></div>
    <h1 className="cover__title">
      <span className="aligned-text">Оно</span>
      <span className="aligned-text">тебе</span>
      <span className="aligned-text">надо</span>
    </h1>
    <div className="cover__description">
      <p className="cover__description-text">Аукцион вещей, в которые никто не верил</p>
      <button className="bet-button" type="button">Сделать ставку</button>
    </div>
  </section>
);

const Lots = () => (
  <section className="lots">
    <h2 className="lots__heading">Лоты</h2>
    <ul className="lots__card-list">
      <li className="lots__card-list-item">
        <a className="card-link" href="#">
          <article className="card card_type_film">
            <div className="overlay"></div>
            <h3 className="card__title">Фильм режиссёра, который бросил киношколу</h3>
            <p className="card__text">Не просто бросил, а ушёл с первой лекции. Какой была бы ваша ставка, если бы вы не знали, что режиссёр — Пол Томас Андерсон?</p>
          </article>
        </a>
      </li>
      <li className="lots__card-list-item">
        <a className="card-link" href="#">
          <article className="card card_type_book">
            <div className="overlay"></div>
            <h3 className="card__title">Книга, где описан один скучный день из жизни рекламного агента</h3>
            <p className="card__text">Объёмом почти в тысячу страниц. Иногда без знаков препинания и с переходами на древнеанглийский. Сколько бы вы поставили на «Улисса» Джеймса Джойса?</p>
          </article>
        </a>
      </li>
      <li className="lots__card-list-item">
        <a className="card-link" href="#">
          <article className="card card_type_picture">
            <div className="overlay"></div>
            <h3 className="card__title">Картина, которую повторит даже 5-летний сын маминой подруги</h3>
            <p className="card__text">Ну действительно, там линия, тут кружочек... Сколько бы вы на такое поставили, если бы не знали, что это — одна из революционных работ Кандинского?</p>
          </article>
        </a>
      </li>
    </ul>
    <a className="lots__look-more-link" href="#">посмотреть больше</a>
  </section>
);

const About = () => (
  <section className="about">
    <div className="about__column">
      <div className="about__logo">
        <img className="about__logo-image" src="/Logo.png" alt="Белый логотип Оно тебе надо" />
      </div>
    </div>
    <div className="about__column">
      <h2 className="about__title">Об аукционе</h2>
      <div className="about__text">
        <p>
          Здесь вы не встретите очередное пафосное собрание невероятно дорогого антиквариата. Наши лоты вообще не должны были попасть ни на один аукцион. Потому что кому нужен дневник девочки-подростка или картина, которую может нарисовать даже ребёнок? Кому нужны все эти странные вещи, созданные любителями?
        </p>
        <p>
          Слишком сложные или, наоборот, слишком простые. Опережающие своё время. В пух и прах растерзанные критиками. Непринятые и непонятые. Когда-то они казались просто неудачными. Но, несмотря на критику, кажущуюся простоту или сложность, сейчас без этих лотов невозможно представить современную культуру. Когда в эти вещи не верил никто, продолжали верить их создатели. И сейчас эти лоты стали культовыми.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <address className="address">
      <a className="address__link" href="tel:+99995555555">+9 999 555 5555</a><br />
      <a className="address__link" href="mailto:info@sobaka.ge">info@sobaka.ge</a>
      <p>наб. Принсенграхт 263-265, Амстердам</p>
    </address>
    <nav className="footer__menu">
      <ul className="footer__menu-list">
        <li className="footer__menu-list-item">
          <a className="footer__menu-link footer__menu-link_active" href="#">главная</a>
        </li>
        <li className="footer__menu-list-item">
          <a className="footer__menu-link" href="#">посмотреть лоты</a>
        </li>
        <li className="footer__menu-list-item">
          <a className="footer__menu-link" href="#">об аукционе</a>
        </li>
      </ul>
    </nav>
    <ul className="footer__social-list">
      <li className="footer__social-list-item">
        <a className="footer__social-link" href="#">
          <Youtube className="footer__social-icon" />
        </a>
      </li>
      <li className="footer__social-list-item">
        <a className="footer__social-link" href="#">
          <VKIcon className="footer__social-icon" />
        </a>
      </li>
      <li className="footer__social-list-item">
        <a className="footer__social-link" href="#">
          <Pinterest className="footer__social-icon" />
        </a>
      </li>
    </ul>
  </footer>
);

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Lots />
        <About />
      </main>
      <Footer />
    </>
  );
}
