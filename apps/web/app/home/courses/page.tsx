// @ts-nocheck
export default function CoursesPage() {
  return (
    <>
            <section className="main__courses courses">
                <div className="container">
                    <h1 className="courses__title title">
                        Courses
                    </h1>
                    <div className="courses__filters-panel filters-panel">
                        <div className="filters-panel__tags tags">
                            <a className="tags__tag tags__tag--active" href="#">
                                All courses
                                <span>
                                    17
                                </span>
                            </a>
                            <a className="tags__tag tags__tag" href="#">
                                Paid Courses
                                <span>
                                    7
                                </span>
                            </a>
                            <a className="tags__tag tags__tag" href="#">
                                Free Courses
                                <span>
                                    10
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
                                    <option value="0">Most Popular</option>
                                    <option value="1">Most Popular</option>
                                    <option value="2">Most Popular 2</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="courses__inner">
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    development
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    The Ultimate Guide To Usability And UX
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Leila Calderon
                                            <img className="card-list__link-img" src="images/member-icon-12.png" alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="images/new/co1.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $65
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    UX/UI
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Become a UX Designer
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Anthony Clark
                                            <img className="card-list__link-img" src="images/member-icon-11.png" alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="images/new/co2.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $50-75
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    illustration
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Digital Marketing
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Anthony Clark
                                            <img className="card-list__link-img" src="images/member-icon-20.png" alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="images/new/co3.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $150
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    development
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Strategic Leadership and Management
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Leila Calderon
                                            <img className="card-list__link-img" src="images/member-icon-23.png" alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="images/new/co4.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $35
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    web design
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Web Design For Beginners
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Lilly-Rose Holland
                                            <img className="card-list__link-img" src="images/member-icon-4.png"
                                                alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="images/new/co5.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $40-60
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    development
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Fundamentals of Color and Appearance
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Susan Foley
                                            <img className="card-list__link-img" src="images/member-icon-15.png" alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="images/new/co6.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $65
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    ux/ui
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Designing a Low Prototype in Figma
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Anthony Clark
                                            <img className="card-list__link-img" src="images/member-icon-16.png" alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                    <img className="card-box__poster-img" src="images/new/co7.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $120
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="courses__card card card--courses">
                            <div className="card__inner">
                                <p className="card__suptext card__suptext--pink">
                                    illustration
                                </p>
                                <a className="card__title" href="courses-page.html">
                                    Creative Thinking: Techniques and Tools
                                </a>
                                <ul className="card__list card-list">
                                    <li className="card-list__item">
                                        <p className="card-list__rait">
                                            <span>
                                                4.5
                                            </span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g id="icons" clipPath="url(#clip0_114_9488)">
                                                    <path id="Vector"
                                                        d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z"
                                                        fill="#F9D442" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_114_9488">
                                                        <rect width="12" height="12" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            6 Lessons
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <p className="card-list__text">
                                            21 Students
                                        </p>
                                    </li>
                                    <li className="card-list__item">
                                        <a className="card-list__link" href="courses-page.html">
                                            by Leila Calderon
                                            <img className="card-list__link-img" src="images/member-icon-7.png" alt="img" />
                                        </a>
                                    </li>
                                </ul>
                                <a className="card-box__poster" href="courses-page.html">
                                     <img className="card-box__poster-img" src="images/new/co8.jpg" alt="img" />
                                    <p className="card-box__poster-text">
                                        $15
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="courses__paging paging">
                        <p className="paging__text">
                            Viewing 1 - 8 of 8 courses
                        </p>
                    </div>
                </div>
            </section>

    </>
  )
}
