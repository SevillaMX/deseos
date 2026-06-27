/**
 * Clone exacto de group-profile.html del Design Lab
 * Sin contenido propio — clonamos estructura y clases 1:1
 */

export const dynamic = 'force-dynamic'

export default async function InicioPage() {
  return (
    <>
      {/* ── section-top (idéntico al DL) ── */}
      <div className="section-top section-top--space">
        <div className="container">
          <div className="section-top__inner">
            <div className="section-top__content section-top-content">
              <p className="section-top-content__suptext">
                Public Group
              </p>
              <h1 className="section-top-content__title title">
                Graphic Design
              </h1>
              <ul className="section-top-content__list card-list">
                <li className="card-list__item">
                  <p className="card-list__text">
                    Active 19 days ago
                  </p>
                </li>
                <li className="card-list__item">
                  <a className="card-list__link" href="#">
                    Group Administrators
                    <img className="card-list__link-img" src="/dl/images/member-icon-12.png" alt="img" />
                    <img className="card-list__link-img" src="/dl/images/member-icon-3.png" alt="img" />
                  </a>
                </li>
              </ul>
              <div className="section-top-content__buttons">
                <a className="section-top-content__buttons-link section-top-content__buttons-link--green" href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5927 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82668 2 9.00001 2.33333 8.00001 3.33333C7.00001 2.33333 6.17334 2 5.00001 2C4.02755 2 3.09492 2.38631 2.40729 3.07394C1.71965 3.76158 1.33334 4.69421 1.33334 5.66667C1.33334 7.2 2.33334 8.36667 3.33334 9.33333L8.00001 14L12.6667 9.33333Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Subscribe</span>
                </a>
                <a className="section-top-content__buttons-link" href="#">
                  Leave Group
                </a>
              </div>
            </div>
            <div
              className="section-top__img"
              data-background-image="/dl/images/new/gs1.jpg"
            />
          </div>
        </div>
      </div>

      {/* ── group-profile (idéntico al DL) ── */}
      <section className="main__group-profile group-profile">
        <div className="container">

          {/* Tabs */}
          <div className="group-profile__tabs tabs">
            <button className="tabs__btn tabs__btn--active" type="button" id="0">Home</button>
            <button className="tabs__btn" type="button" id="1">Info</button>
            <button className="tabs__btn" type="button" id="2">Media</button>
            <button className="tabs__btn" type="button" id="3">
              Members <span>10</span>
            </button>
            <button className="tabs__btn" type="button" id="4">Forum</button>
          </div>

          <div className="group-profile__inner">
            <div className="group-profile__wrapper group-profile__wrapper--active" id="0">

              {/* ── Posts feed ── */}
              <section className="group-profile__posts group-profile-posts">
                <div className="group-profile-posts__top">
                  <p className="group-profile-posts__top-text">RSS</p>
                  <div className="group-profile-posts__top-select custom-select">
                    <select>
                      <option value="0">Everything</option>
                      <option value="1">Everything</option>
                      <option value="2">Everything 2</option>
                    </select>
                  </div>
                </div>

                <div className="group-profile-posts__inner">

                  {/* Post 1 */}
                  <div className="group-profile-posts__post post">
                    <div className="post__body post-body">
                      <div className="post-body__top post-body-top">
                        <a className="post-body-top__link" href="#">
                          <img className="post-body-top__link-img" src="/dl/images/member-icon-10.png" alt="img" />
                        </a>
                        <div className="post-body-top__box">
                          <p className="post-body-top__box-text">
                            <a href="#">Susan Foley</a>
                            {' '}posted an update in the group{' '}
                            <span>Graphic Design</span>
                          </p>
                          <p className="post-body-top__box-subtext">6 months ago</p>
                        </div>
                        <div className="post-body-top__options card-options">
                          <div className="card-options__btn">
                            <span /><span /><span />
                          </div>
                          <div className="card-options__inner">
                            <a className="card-options__link" href="#">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="icons">
                                  <path id="Vector" d="M8 11.3335V14.6668" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path id="Vector_2" d="M3.33333 11.3335H12.6667V10.1602C12.6665 9.91211 12.5972 9.66901 12.4665 9.45819C12.3358 9.24738 12.1488 9.07721 11.9267 8.96683L10.74 8.36683C10.5179 8.25644 10.3309 8.08628 10.2002 7.87547C10.0695 7.66465 10.0001 7.42155 10 7.1735V4.00016H10.6667C11.0203 4.00016 11.3594 3.85969 11.6095 3.60964C11.8595 3.35959 12 3.02045 12 2.66683C12 2.31321 11.8595 1.97407 11.6095 1.72402C11.3594 1.47397 11.0203 1.3335 10.6667 1.3335H5.33333C4.97971 1.3335 4.64057 1.47397 4.39052 1.72402C4.14048 1.97407 4 2.31321 4 2.66683C4 3.02045 4.14048 3.35959 4.39052 3.60964C4.64057 3.85969 4.97971 4.00016 5.33333 4.00016H6V7.1735C5.99987 7.42155 5.93054 7.66465 5.79981 7.87547C5.66909 8.08628 5.48214 8.25644 5.26 8.36683L4.07333 8.96683C3.85119 9.07721 3.66425 9.24738 3.53352 9.45819C3.40279 9.66901 3.33347 9.91211 3.33333 10.1602V11.3335Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                              </svg>
                              <span>Pin to Top</span>
                            </a>
                            <a className="card-options__link" href="#">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66667 10.0002C2.66667 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66667 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66667 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66667 2.00016 2.66667 2.00016V10.0002Z" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.66667 14.6667V10" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Report</span>
                            </a>
                            <a className="card-options__link" href="#">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4H14" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66667C4 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.33333 4.00016V2.66683C5.33333 2.00016 6 1.3335 6.66667 1.3335H9.33333C10 1.3335 10.6667 2.00016 10.6667 2.66683V4.00016" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.66667 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.33333 7.3335V11.3335" stroke="#0E1218" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span>Delete</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="post-body__view post-body-view">
                        <a className="post-body-view__link" href="#">
                          <img className="post-body-view__link-img" src="/dl/images/new/34525.jpg" alt="img" />
                        </a>
                      </div>

                      <div className="post-body__info post-body-info">
                        <div className="post-body-info__box post-body-info-box">
                          <ul className="post-body-info-box__list post-body-info-box-list">
                            <li className="post-body-info-box-list__item">
                              <a className="post-body-info-box-list__link" href="#">
                                <img className="post-body-info-box-list__link-img" src="/dl/images/member-icon-8.png" alt="img" />
                              </a>
                            </li>
                            <li className="post-body-info-box-list__item">
                              <a className="post-body-info-box-list__link" href="#">
                                <img className="post-body-info-box-list__link-img" src="/dl/images/member-icon-21.png" alt="img" />
                              </a>
                            </li>
                            <li className="post-body-info-box-list__item">
                              <a className="post-body-info-box-list__link" href="#">
                                <img className="post-body-info-box-list__link-img" src="/dl/images/member-icon-25.png" alt="img" />
                              </a>
                            </li>
                            <li className="post-body-info-box-list__item">
                              <p className="post-body-info-box-list__text">6+</p>
                            </li>
                          </ul>
                          <p className="post-body-info-box__text">liked this post</p>
                        </div>
                        <p className="post-body-info__text">
                          <span>2</span> Comments
                        </p>
                      </div>

                      <form className="post-body__assessment post-body-assessment" action="#">
                        <button className="post-body-assessment__btn post-body-assessment__btn--unlike" type="button">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66675 8.09556L2.66675 3.4289M5.00008 8.37063V4.00033C5.00008 3.26395 5.59704 2.66699 6.33341 2.66699H11.5936C12.2201 2.66699 12.7622 3.10328 12.8961 3.7154L13.8231 7.9531C13.914 8.36886 13.5974 8.76223 13.1718 8.76223H10.6667C9.93037 8.76223 9.33341 9.35918 9.33341 10.0956V11.0174C9.33341 11.7077 9.05917 12.3698 8.57101 12.858C8.2775 13.1515 7.78793 13.0989 7.56346 12.7497L5.21184 9.09164C5.07359 8.87658 5.00008 8.6263 5.00008 8.37063Z" stroke="#6D9985" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          <span>Unlike</span>
                        </button>
                        <button className="post-body-assessment__btn" type="button">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_137_2244)">
                              <path d="M9.33325 6.00016C9.33325 6.35378 9.19278 6.69292 8.94273 6.94297C8.69268 7.19302 8.35354 7.3335 7.99992 7.3335H3.99992L1.33325 10.0002V2.66683C1.33325 1.9335 1.93325 1.3335 2.66659 1.3335H7.99992C8.35354 1.3335 8.69268 1.47397 8.94273 1.72402C9.19278 1.97407 9.33325 2.31321 9.33325 2.66683V6.00016Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M12.0001 6H13.3334C13.687 6 14.0262 6.14048 14.2762 6.39052C14.5263 6.64057 14.6667 6.97971 14.6667 7.33333V14.6667L12.0001 12H8.00008C7.64646 12 7.30732 11.8595 7.05727 11.6095C6.80722 11.3594 6.66675 11.0203 6.66675 10.6667V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_137_2244">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Comment</span>
                        </button>
                      </form>
                    </div>

                    {/* Comments */}
                    <div className="post__comments post-comments comments">
                      <div className="comments__inner">
                        <div className="comments__wrapper">
                          <div className="comments__item comments-item">
                            <div className="comments-item__options card-options">
                              <div className="card-options__btn">
                                <span /><span /><span />
                              </div>
                            </div>
                            <div className="comments-item__img">
                              <img className="comments-item__image" src="/dl/images/member-icon-19.png" alt="img" />
                            </div>
                            <div className="comments-item__inner">
                              <p className="comments-item__name">Philippa Bush</p>
                              <p className="comments-item__date">a year ago</p>
                              <p className="comments-item__text">Where is that? Looks beautiful.</p>
                              <a className="comments-item__link" href="#">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.99935 11.3332L2.66602 7.99984L5.99935 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M13.3327 12V10.6667C13.3327 9.95942 13.0517 9.28115 12.5516 8.78105C12.0515 8.28095 11.3733 8 10.666 8H2.66602" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Reply</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="comments__wrapper">
                          <div className="comments__item comments-item">
                            <div className="comments-item__options card-options">
                              <div className="card-options__btn">
                                <span /><span /><span />
                              </div>
                            </div>
                            <div className="comments-item__img">
                              <img className="comments-item__image" src="/dl/images/member-icon-12.png" alt="img" />
                            </div>
                            <div className="comments-item__inner">
                              <p className="comments-item__name">Tina Alvarez</p>
                              <p className="comments-item__date">a year ago</p>
                              <p className="comments-item__text">Looks professional.</p>
                              <div className="comments-item__pictures">
                                <img className="comments-item__pictures-image" src="/dl/images/new/23425.jpg" alt="img" />
                              </div>
                              <a className="comments-item__link" href="#">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.99935 11.3332L2.66602 7.99984L5.99935 4.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M13.3327 12V10.6667C13.3327 9.95942 13.0517 9.28115 12.5516 8.78105C12.0515 8.28095 11.3733 8 10.666 8H2.66602" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Reply</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Post 1 */}

                </div>
              </section>

              {/* ── Aside ── */}
              <aside className="group-profile__aside group-profile-aside">

                {/* Group Administrators */}
                <div className="group-profile-aside__aside-block aside-block">
                  <h3 className="aside-block__title">Group Administrators</h3>
                  <div className="aside-block__item aside-block-item">
                    <a className="aside-block-item__img" href="#">
                      <img className="aside-block-item__img-image" src="/dl/images/member-icon-11.png" alt="img" />
                    </a>
                    <div className="aside-block-item__box aside-block-item-box">
                      <p className="aside-block-item-box__text"><a href="#">Lilly-Rose Holland</a></p>
                      <p className="aside-block-item-box__subtext">@lillyrose.flower</p>
                    </div>
                  </div>
                  <div className="aside-block__item aside-block-item">
                    <a className="aside-block-item__img" href="#">
                      <img className="aside-block-item__img-image" src="/dl/images/member-icon-20.png" alt="img" />
                    </a>
                    <div className="aside-block-item__box aside-block-item-box">
                      <p className="aside-block-item-box__text"><a href="#">Timothy Stuart</a></p>
                      <p className="aside-block-item-box__subtext">@tim.stuart.3d</p>
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="group-profile-aside__aside-block aside-block">
                  <h3 className="aside-block__title">Activity Feed</h3>
                  {[
                    { img: 'member-icon-12.png', name: 'Katie Campbell', action: 'posted an update in the group', group: 'Graphic Design', time: '3 month ago' },
                    { img: 'member-icon-25.png', name: 'Leila Calderon', action: 'posted a photo', group: '', time: '4 month ago' },
                    { img: 'member-icon-18.png', name: 'Katie Campbell', action: 'and Farrell Villa are now friends', group: '', time: '7 month ago' },
                    { img: 'member-icon-22.png', name: 'Katie Campbell', action: 'posted an update', group: '', time: '10 month ago' },
                  ].map((item, i) => (
                    <div key={i} className="aside-block__item aside-block-item">
                      <a className="aside-block-item__img" href="#">
                        <img className="aside-block-item__img-image" src={`/dl/images/${item.img}`} alt="img" />
                      </a>
                      <div className="aside-block-item__box aside-block-item-box">
                        <p className="aside-block-item-box__text">
                          <a href="#">{item.name}</a>
                          {' '}{item.action}{' '}
                          {item.group && <span>{item.group}</span>}
                        </p>
                        <p className="aside-block-item-box__subtext">{item.time}</p>
                      </div>
                    </div>
                  ))}
                  <a className="aside-block__link" href="#">Show All</a>
                </div>

                {/* Recent Posts */}
                <div className="group-profile-aside__aside-block aside-block aside-block--medium-squeres">
                  <h3 className="aside-block__title">Recent Posts</h3>
                  {[
                    { img: 'group-img-11.jpg', title: 'Tackle Your closest Spring cleaning', date: 'May 14, 2023' },
                    { img: 'group-img-6.jpg',  title: 'How to create a visual brand identity', date: 'Apr 02, 2023' },
                  ].map((item, i) => (
                    <div key={i} className="aside-block__item aside-block-item">
                      <a className="aside-block-item__img" href="#">
                        <img className="aside-block-item__img-image" src={`/dl/images/${item.img}`} alt="img" />
                      </a>
                      <div className="aside-block-item__box aside-block-item-box">
                        <p className="aside-block-item-box__text"><a href="#">{item.title}</a></p>
                        <p className="aside-block-item-box__subtext">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </aside>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}
