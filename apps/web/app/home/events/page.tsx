// @ts-nocheck
export default function EventsPage() {
  return (
    <>
            <section className="main__events events">
                <div className="container">
                    <h1 className="events__title title">
                        Events
                    </h1>
                    <div className="events__filters-panel filters-panel">
                        <div className="filters-panel__tags tags">
                            <a className="tags__tag tags__tag--active" href="#">
                                All events
                                <span>
                                    8
                                </span>
                            </a>
                            <a className="tags__tag tags__tag" href="#">
                                Paid Events
                                <span>
                                    6
                                </span>
                            </a>
                            <a className="tags__tag tags__tag" href="#">
                                Free Events
                                <span>
                                    2
                                </span>
                            </a>
                        </div>
                        <form className="filters-panel__form filters-panel-form" action="#">
                            <div className="filters-panel-form__search search">
                                <button className="search__btn" type="button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 19C15.4182 19 19 15.4183 19 11C19 6.58172 15.4182 3 11 3C6.58169 3 2.99997 6.58172 2.99997 11C2.99997 15.4183 6.58169 19 11 19Z"
                                            stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <input className="search__input" type="text" placeholder="Search..." />
                            </div>
                            <div className="filters-panel-form__select custom-select">
                                <select>
                                    <option value="0">List</option>
                                    <option value="1">List</option>
                                    <option value="2">List 2</option>
                                </select>
                            </div>
                            <div className="filters-panel-form__select custom-select">
                                <select>
                                    <option value="0">Upcoming</option>
                                    <option value="1">Upcoming</option>
                                    <option value="2">Upcoming 2</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="events__inner">
                        <div className="events__card card card--events">
                            <div className="card__inner">
                                <p className="card__text">
                                    Feb 27 – Mar 2, 2023
                                </p>
                                <a className="card__title card--events-title" href="event.html">
                                    Big Global E-Commerce Conference 2024
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            New York, NY, United States
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="event.html">
                                            by IT Education Centre
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="event.html">
                                    <img className="card-box__poster-img" src="images/new/event1.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $25
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="events__card card card--events">
                            <div className="card__inner">
                                <p className="card__text">
                                    July 14, 2023
                                </p>
                                <a className="card__title card--events-title" href="event.html">
                                    Design Research by UX Australia
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            Virtual &amp; Melbourne, Australia
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="event.html">
                                            by Alex Crook, Brendan Reed
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="event.html">
                                   <img className="card-box__poster-img" src="images/new/event2.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        Free
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="events__card card card--events">
                            <div className="card__inner">
                                <p className="card__text">
                                    Oct 29, 2023
                                </p>
                                <a className="card__title card--events-title" href="event.html">
                                    Interaction 23
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            Zurich, Switzerland
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="event.html">
                                            by Laura Balboa, Jon Yablonski
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="event.html">
                                   <img className="card-box__poster-img" src="images/new/event3.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        Free
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="events__card card card--events">
                            <div className="card__inner">
                                <p className="card__text">
                                    Nov 10-17, 2023
                                </p>
                                <a className="card__title card--events-title" href="event.html">
                                    Strategies for Building a Resilient DesignOps Practice
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            Virtual
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="event.html">
                                            by Andrea Barbarins
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="event.html">
                                   <img className="card-box__poster-img" src="images/new/event4.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $100
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="events__card card card--events">
                            <div className="card__inner">
                                <p className="card__text">
                                    Dec 30, 2024
                                </p>
                                <a className="card__title card--events-title" href="event.html">
                                    Experience Design Conference
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            Paris, France
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="#">
                                            by Clearleft
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="event.html">
                                    <img className="card-box__poster-img" src="images/new/event5.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $70
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="events__card card card--events">
                            <div className="card__inner">
                                <p className="card__text">
                                    Mar 26, 2024
                                </p>
                                <a className="card__title card--events-title" href="event.html">
                                    UX STRAT APAC 2023
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            Bangkok, Thailand
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="#">
                                            by Chelsea Chen, Ruby Pryor
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="event.html">
                                    <img className="card-box__poster-img" src="images/new/event6.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $10 – $40
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}
