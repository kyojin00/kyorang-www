/*
  ✏️ 회사 정보는 여기 한 곳만 고치면 모든 페이지의 상단 메뉴·하단 정보에 반영돼요.
*/
var SITE = {
  name: '새벽산업',
  nameEn: 'SAEBYEOK',
  ceo: '홍길동',
  bizNo: '000-00-00000',
  address: '전남 여수시 율촌면 산단로 00',
  phone: '061-000-0000',
  fax: '061-000-0001',
  email: 'contact@saebyeok.co.kr',
  menu: [
    ['index.html', '홈'],
    ['about.html', '회사소개'],
    ['services.html', '사업분야'],
    ['notice.html', '공지사항'],
    ['contact.html', '문의하기'],
  ],
}

;(function () {
  var here = location.pathname.split('/').pop() || 'index.html'
  var links = SITE.menu.map(function (m) {
    return '<a href="' + m[0] + '"' + (m[0] === here ? ' class="on"' : '') + '>' + m[1] + '</a>'
  }).join('')

  var header = document.getElementById('header')
  if (header) {
    header.innerHTML =
      '<div class="wrap bar">' +
      '<a class="logo" href="index.html"><i></i>' + SITE.name + '<small>' + SITE.nameEn + '</small></a>' +
      '<nav class="menu">' + links + '</nav>' +
      '<button class="burger" aria-label="메뉴"><span></span><span></span><span></span></button>' +
      '</div>'
    header.querySelector('.burger').addEventListener('click', function () {
      header.classList.toggle('open')
    })
  }

  var footer = document.getElementById('footer')
  if (footer) {
    footer.innerHTML =
      '<div class="wrap">' +
      '<p class="f-name">' + SITE.name + '</p>' +
      '<p>대표 ' + SITE.ceo + ' · 사업자등록번호 ' + SITE.bizNo + '<br>' + SITE.address + '<br>' +
      'TEL ' + SITE.phone + ' · FAX ' + SITE.fax + ' · ' + SITE.email + '</p>' +
      '<p class="f-links"><a href="terms.html">이용약관</a><a href="privacy.html"><b>개인정보처리방침</b></a></p>' +
      '<p class="f-copy">© ' + new Date().getFullYear() + ' ' + SITE.name + '. All rights reserved.</p>' +
      '</div>'
  }

  document.querySelectorAll('[data-site]').forEach(function (el) {
    el.textContent = SITE[el.dataset.site]
  })
})()
