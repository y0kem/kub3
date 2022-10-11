
new AirDatepicker('#airdatepicker', {
})

const items = [
    {
        id: 1,
        title: 'Благодаря поддержке предпринимателей. Златоустовские поликлиники оснастили холодильными установками для хранения вакцины',
        subtitle: 'Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят...',
        img: 'news-1.png'
    },
    {
        id: 2,
        title: 'Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции. Роддом Златоуста вновь откроет свои двери 8 февраля',
        subtitle: 'Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят...',
        img: 'news-2.png'
    },
    {
        id: 3,
        title: 'Осторожно, сосульки! Оттепель на этой неделе привела к тому, что на крышах многих домов образовались опасные ледяные наросты',
        subtitle: 'Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят...',
        img: 'news-3.png'
    },
    {
        id: 4,
        title: 'В четыре раза меньше вопросов, чем обычно. В Златоусте прошло первое в 2021-м году Собрание депутатов',
        subtitle: 'Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят...',
        img: 'news-4.png'
    },
    {
        id: 5,
        title: 'В Златоусте сотрудники теротдела проверят магазин, из которого выбрасывали строительный мусор на контейнерную площадку',
        subtitle: 'ДЧ: Первое Собрание депутатов 2021 года: планируется работа на весь год',
        img: 'news-5.png'
    },
    {
        id: 6,
        title: 'ДЧ: Первое Собрание депутатов 2021 года: планируется работа на весь год',
        subtitle: 'Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят...',
        img: 'news-6.png'
    },
];

// Variables
const postsPerPage = 1;
let iterator = 0;

let maxPages = calcMaxPages();
let currentPage = 0;

// UI Elements
const news = document.querySelector('.news-slider__wrapper');

const pagination = document.querySelector('.pagination');

// Calls
renderNews(items);
renderPaginator();

pagination.addEventListener('click', (e) => {
  switch (e.target.className) {
    case 'prev-btn':
      prevStep();
      break;
    case 'num-btn':
      setCurrentPage(+e.target.dataset.page);
      break;
    case 'next-btn':
      nextStep();
      break;
  }

  normalizeCurrentPage();
  calcIterator();

  renderNews(items);
})

// Functions
// Pagination functions
function calcMaxPages() {
  return Math.ceil(items.length / postsPerPage);
}

function nextStep() {
  currentPage++;
  console.log(currentPage);
}

function prevStep() {
  currentPage--;
}

function setCurrentPage(pageNum) {
  currentPage = pageNum;
}

function normalizeCurrentPage() {
  if (currentPage >= maxPages) {
    currentPage = maxPages - 1;
  }

  if (currentPage < 0) {
    currentPage = 0;
  }
}

function calcIterator() {
  iterator = currentPage * postsPerPage;
}

function renderPaginator() {
  pagination.innerHTML = prevTemplate() + numPagesTemplate() + nextTemplate();
}

function prevTemplate() {
  return `
    <div class="prev-btn"><img src="./assets/icons/arrow-slider-prev.svg"></div>
  `;
}

function numPagesTemplate() {
  let result = '';

  for (let i = 0; i < maxPages; i++) {
    result += `<div class="num-btn" data-page="${i}">${i + 1}</div>`;
  }

  return result;
}

function nextTemplate() {
  return `
    <div class="next-btn"><img src="./assets/icons/arrow-slider-next.svg"></div>
  `;
}

//
function renderNews(items) {
  const limit = (iterator + postsPerPage < items.length) ? iterator + postsPerPage : items.length;

  const newsPart = items.slice(iterator, iterator + postsPerPage);

  news.innerHTML = manyNews(newsPart);
}

function manyNews(items) {
  let result = "";

  items.forEach(item => {
    result += newsTemplate(item);
  });

  return result;
}

function newsTemplate(item) {
  return `
    <div class="news-slide">
      <div class="news-slide_link"><a href="#"><img src="./assets/icons/arrow.svg"></a></div>
        <div class="news-slide__img"><img src="./assets/images/${item.img}"></div>
        <div class="news-slide__text">
          <div class="info-block">
            <div class="info-text">Общество</div>
            <div class="info-date">02/02/2021</div>
          </div>
        <div class="title-block">
          <h2 class="news-slide_title">${item.title}</h2>
        </div>
        <div class="subtitle-block">${item.subtitle}</div>
      </div>
    </div>
  `;
}

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);