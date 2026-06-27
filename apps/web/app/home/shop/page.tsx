// @ts-nocheck
export default function ShopPage() {
  return (
    <>
            <section className="main__shop shop">
                <div className="container">
                    <h1 className="shop__title title">
                        Shop
                    </h1>
                    <div className="shop__filters-panel filters-panel">
                        <p className="filters-panel__text">
                            Showing 10–18 of 35 results
                        </p>
                        <form className="filters-panel__form filters-panel-form" action="#">
                            <div className="filters-panel-form__range filters-panel-form-range">
                                <p className="filters-panel-form-range__text">
                                    Price:
                                </p>
                                <input className="filters-panel-form-range__input" type="text" value="$10" />
                                <p className="filters-panel-form-range__text">
                                    —
                                </p>
                                <input className="filters-panel-form-range__input" type="text" value="$120" />
                            </div>
                            <div className="filters-panel-form__select custom-select">
                                <select>
                                    <option value="0">Select a Category</option>
                                    <option value="1">Select a Category</option>
                                    <option value="2">Select a Category 2</option>
                                </select>
                            </div>
                            <div className="filters-panel-form__select custom-select">
                                <select>
                                    <option value="0">Default Sorting</option>
                                    <option value="1">Default Sorting</option>
                                    <option value="2">Default Sorting 2</option>
                                </select>
                            </div>
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
                        </form>
                    </div>
                    <div className="shop__inner">
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-2.jpg" alt="img" />
                                    <p className="card-box__poster-suptext">
                                        sale     
                                    </p>
                                </a>
                                <p className="card__subtext">
                                    Accessories
                                </p>
                                <a className="card__title" href="product.html">
                                    Body Cream
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">

                                    </del>
                                    <ins className="card-price__current">
                                        $16 – $30
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-1.jpg" alt="img" />
                                    <p className="card-box__poster-suptext">
                                        sale     
                                    </p>
                                </a>
                                <p className="card__subtext">
                                    Accessories
                                </p>
                                <a className="card__title" href="product.html">
                                    Clock
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                        $22
                                    </del>
                                    <ins className="card-price__current">
                                        $18
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-3.jpg" alt="img" />
                                </a>
                                <p className="card__subtext">
                                    Clothes
                                </p>
                                <a className="card__title" href="product.html">
                                    Magazine
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                 
                                    </del>
                                    <ins className="card-price__current">
                                        $94
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-4.jpg" alt="img" />
                                    <p className="card-box__poster-suptext">
                                        sale     
                                    </p>
                                </a>
                                <p className="card__subtext">
                                    Decor
                                </p>
                                <a className="card__title" href="product.html">
                                    Coffee Cup
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                        $30
                                    </del>
                                    <ins className="card-price__current">
                                        $25
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-5.jpg" alt="img" />
                                    <p className="card-box__poster-suptext card-box__poster-suptext--pink">
                                        new
                                    </p>
                                </a>
                                <p className="card__subtext">
                                    Clothes
                                </p>
                                <a className="card__title" href="product.html">
                                    T-Shirt
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                     
                                    </del>
                                    <ins className="card-price__current">
                                        $153
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-6.jpg" alt="img" />
                                </a>
                                <p className="card__subtext">
                                    Accessories
                                </p>
                                <a className="card__title" href="product.html">
                                    Fashion Bag
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                     
                                    </del>
                                    <ins className="card-price__current">
                                        $45 – $55
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-7.jpg" alt="img" />
                                </a>
                                <p className="card__subtext">
                                    Clothes
                                </p>
                                <a className="card__title" href="product.html">
                                    Eco Shopper
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                     
                                    </del>
                                    <ins className="card-price__current">
                                        $63
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-8.jpg" alt="img" />
                                    <p className="card-box__poster-suptext">
                                        sale     
                                    </p>
                                </a>
                                <p className="card__subtext">
                                    Accessories
                                </p>
                                <a className="card__title" href="product.html">
                                    Bath Decor
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                     
                                    </del>
                                    <ins className="card-price__current">
                                        $7
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                        <div className="shop__card card card--shop">
                            <div className="card__inner">
                                <a className="card-box__poster" href="product.html">
                                    <img className="card-box__poster-img" src="images/shop-img-9.jpg" alt="img" />
                                    <p className="card-box__poster-suptext card-box__poster-suptext--pink">
                                        new
                                    </p>
                                </a>
                                <p className="card__subtext">
                                    Decor
                                </p>
                                <a className="card__title" href="product.html">
                                    Bottle
                                </a>
                                <div className="card__price card-price">
                                    <del className="card-price__past">
                                     
                                    </del>
                                    <ins className="card-price__current">
                                        $108
                                    </ins>
                                </div>
                                <a className="card__link" href="product.html">
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="shop__paging paging">
                        <p className="paging__text">
                            Showing 10–18 of 35 results
                        </p>
                        <ul className="paging__list">
                            <li className="paging__list-item">
                                <a className="paging__list-link paging__list-link--back" href="#">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.66663 4L12.1952 7.5286C12.4556 7.78894 12.4556 8.21106 12.1952 8.4714L8.66663 12M4.66663 4L8.19522 7.5286C8.45557 7.78894 8.45557 8.21106 8.19522 8.4714L4.66663 12"
                                            stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </a>
                            </li>
                            <li className="paging__list-item">
                                <a className="paging__list-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="paging__list-item">
                                <p className="paging__list-text">
                                    2
                                </p>
                            </li>
                            <li className="paging__list-item">
                                <a className="paging__list-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="paging__list-item">
                                <a className="paging__list-link" href="#">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.66663 4L12.1952 7.5286C12.4556 7.78894 12.4556 8.21106 12.1952 8.4714L8.66663 12M4.66663 4L8.19522 7.5286C8.45557 7.78894 8.45557 8.21106 8.19522 8.4714L4.66663 12"
                                            stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

    </>
  )
}
