const $body = $("body");
const $header = $(".page-header");
const $navCollapse = $(".navbar-collapse");
const scrollClass = "scroll";

$(window).on("scroll", () => {
  if (this.matchMedia("(min-width: 992px)").matches) {
    const scrollY = $(this).scrollTop();
    scrollY > 0
      ? $body.addClass(scrollClass)
      : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});

$(".page-header .nav-link, .navbar-brand").on("click", function (e) {
  e.preventDefault();
  // const href = $(this).attr("href");
  // $("html, body").animate({
  //   scrollTop: $(href).offset().top - 71
  // }, 600);
});
var welcomeText = ['Welcome to DoTheCode Digital', 'Welcome to Digital India', 'Welcome to DoTheCode Tech', 'Welcome to expand the techonology'],
  part,
  i = 0,
  offset = 0,
  len = welcomeText.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 79;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= welcomeText[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = welcomeText[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;

      }
      else {
        offset--;
      }
    }
    $('#welcomeText').text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
  const topCourseAid = [{
    courseCode: '',
    courseName: '',
    courseShortName: 'CCC',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'BCC',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'DCA',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'ADCA',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'HDCA',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'HADCA',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'DWD',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'Tally',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'CDH',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'MDCAT',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'DCAT',
    duration: '',
    isNew: false
  },
  {
    ourseCode: '',
    courseName: '',
    courseShortName: 'ADCHN',
    duration: '',
    isNew: false
  }];
  var appendTopNewAidCourse = '';
  topCourseAid.forEach((data) => {
    appendTopNewAidCourse += data.isNew ? `<div class='marquee-tag'>${data.courseShortName} <img class='set-new-tag' src='/assests/new_red.gif'></div>` : `<div class='marquee-tag'>${data.courseShortName}</div>`
  })
  $('#course-marquee-add').append(appendTopNewAidCourse)
})