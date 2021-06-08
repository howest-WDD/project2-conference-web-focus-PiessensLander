'use strict'

const getSpeakers = function (response) {
    document.querySelector(".js-speakers").innerHTML = "";
    for (let i of response.data) {
        document.querySelector(".js-speakers").innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5 mb-2">
        <div class="c-card p-4">
          <div class="c-card__header mb-3">
            <h3>${i.voornaam} ${i.familienaam}</h3>
          </div>
          <div class="c-card__image mb-3">
            <img src="https://www.troyhunt.com/content/images/2016/12/P1220073.jpg" alt="Speaker">
          </div>
          <div class="c-card__description mb-3 d-flex">
            <p>${i.bio.eng}</p>
          </div>
          <div class="c-card__footer d-flex flex-wrap justify-content-between">
            <a class="c-btn c-btn--outline py-2 px-4 px-xl-5 w-auto">
              <i class="far fa-heart me-2"></i>Like
            </a>
            <a href="speaker-detail.php?speakerid=${i.id}" class="c-btn c-btn--pink py-2 px-5 w-auto">
              More info
            </a>
          </div>
        </div>
      </div>`
    }
    document.querySelector('.js-pagination').innerHTML = `
        <p>Page 1 of ${response.last_page}</p>
        <div class="c-pagination__pages d-flex">
          <div class="c-pagination__firstpage c-pagination__pages--active p-2 d-flex justify-content-center align-items-center">
            <a href="#" class="c-pagination__link">1</a>
          </div>
          <div class="c-pagination__page p-2 d-flex justify-content-center align-items-center">
            <a href="#">2</a>
          </div>
          <div class="c-pagination__page p-2 d-flex justify-content-center align-items-center">
            <a href="#">3</a>
          </div>
          <div class="c-pagination__page p-2 d-flex justify-content-center align-items-center">
            <a href="#">4</a>
          </div>
          <div class="c-pagination__page c-pagination__next p-2 d-flex justify-content-center align-items-center">
            <a href="#"><i class="fas fa-chevron-right"></i></a>
          </div>
        </div>
    `
    document.querySelector('.c-pagination__firstpage').addEventListener("click", function () {
        handleData(response.first_page_url, getSpeakers);
    });
    document.querySelector('.c-pagination__next').addEventListener("click", function () {
        handleData(response.next_page_url, getSpeakers);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.info('DOM geladen');
    handleData("http://api.laprudence.be/project2/v2/sprekers", getSpeakers)
});