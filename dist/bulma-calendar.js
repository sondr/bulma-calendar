'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var datepicker_langs = {
  ar: {
    weekStart: 0,
    previousMonth: 'الشهر الماضي',
    nextMonth: 'الشهر القادم',
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthsShort: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    weekdays: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
    weekdaysShort: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة']
  },
  bn: {
    weekStart: 1,
    months: ['জানুয়ারী', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
    monthsShort: ['জানুয়ারী', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
    weekdays: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
    weekdaysShort: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার']
  },
  de: {
    weekStart: 1,
    previousMonth: 'Vorheriger Monat',
    nextMonth: 'Nächster Monat',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthsShort: ['Jan', 'Febr', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
    weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  },
  en: {
    weekStart: 1,
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  es: {
    weekStart: 1,
    previousMonth: 'Mes anterior',
    nextMonth: 'Próximo mes',
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  },
  fa: {
    weekStart: 1,
    months: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
    monthsShort: ['ژان', 'فور', 'مار', 'آور', 'مه', 'ژون', 'ژوی', 'اوت', 'سپت', 'اکت', 'نوا', 'دسا'],
    weekdays: ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه', 'یک‌شنبه'],
    weekdaysShort: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه', 'یک']
  },
  fr: {
    weekStart: 1,
    previousMonth: 'Mois précédent',
    nextMonth: 'Mois suivant',
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Auo', 'Sep', 'Oct', 'Nov', 'Déc'],
    weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  },
  hi: {
    weekStart: 1,
    months: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवंबर', 'दिसम्बर'],
    monthsShort: ['जन', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितं', 'अक्टूबर', 'नवं', 'दिसम्बर'],
    weekdays: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    weekdaysShort: ['सूर्य', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि']
  },
  hr: {
    weekStart: 2,
    previousMonth: 'Prošli mjesec',
    nextMonth: 'Slijedeći mjesec',
    months: ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'],
    monthsShort: ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'],
    weekdays: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
    weekdaysShort: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']
  },
  id: {
    weekStart: 1,
    months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
    weekdays: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    weekdaysShort: ['Mgu', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  },
  it: {
    weekStart: 1,
    previousMonth: 'Mese Precedente',
    nextMonth: 'Prossimo Mese',
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthsShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
  },
  ja: {
    weekStart: 1,
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    weekdays: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜'],
    weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
  },
  nb: {
    weekStart: 2,
    previousMonth: 'Forrige Måned',
    nextMonth: 'Neste Måned',
    months: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
    monthsShort: ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    weekdays: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
    weekdaysShort: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør']
  },
  nl: {
    weekStart: 1,
    previousMonth: 'Vorige Maand',
    nextMonth: 'Volgende Maand',
    months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    monthsShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    weekdays: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    weekdaysShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
  },
  pt: {
    weekStart: 1,
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  },
  'pt-BR': {
    weekStart: 1,
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  },
  ru: {
    weekStart: 1,
    previousMonth: 'Предыдущий месяц',
    nextMonth: 'Следующий месяц',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  },
  sr: {
    weekStart: 2,
    previousMonth: 'Prošli mesec',
    nextMonth: 'Sledeći mesec',
    months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
    monthsShort: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
    weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
    weekdaysShort: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub']
  },
  th: {
    weekStart: 1,
    previousMonth: 'เดือนก่อนหน้า',
    nextMonth: 'เดือนถัดไป',
    months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    weekdays: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  },
  tr: {
    weekStart: 1,
    previousMonth: 'Önceki Ay',
    nextMonth: 'Gelecek Ay',
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    monthsShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    weekdaysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
  },
  'zh-cn': {
    weekStart: 1,
    previousMonth: '上个月',
    nextMonth: '下个月',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  }
};

Element.prototype.addEventsListener = function (events, listener) {
  if (listener == undefined) listener = void 0;
  if (!Array.isArray(events)) {
    events = [events];
  }

  for (var i = 0, len = events.length; i < len; i++) {
    this.addEventListener(events[i], listener);
  }

  // events.forEach(event => {
  //   this.addEventListener(event, listener);
  // });
};

var datePicker = function () {
  function datePicker(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, datePicker);

    // Determine click event depending on if we are on Touch device or not
    this._clickEvent = ['touchstart', 'click'];

    this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    /// Set default options and merge with instance defined
    this.options = Object.assign({}, {
      startDate: new Date(),
      minDate: null,
      maxDate: null,
      dateFormat: 'yyyy-mm-dd', // the default data format `field` value
      lang: 'en', // internationalization
      overlay: false,
      closeOnOverlayClick: true,
      closeOnSelect: true,
      // callback functions
      onSelect: null,
      onOpen: null,
      onClose: null,
      onRender: null
    }, options);

    // Initiate plugin
    this._init();
  }

  /**
   * Initiate plugin instance
   * @method _init
   * @return {datePicker} Current plugin instance
   */


  _createClass(datePicker, [{
    key: '_init',
    value: function _init() {
      this._id = 'datePicker' + new Date().getTime() + Math.floor(Math.random() * Math.floor(9999));
      this.lang = typeof datepicker_langs[this.lang] !== 'undefined' ? this.lang : 'en';
      // Set the startDate to the input value
      if (this.element.value) {
        this.options.startDate = this._parseDate(this.element.value);
      }
      // Transform start date according to dateFormat option
      this.options.startDate = this._parseDate(this._getFormatedDate(this.options.startDate, this.options.dateFormat));

      if (this.options.minDate) {
        this.options.minDate = this._parseDate(this._getFormatedDate(this.options.minDate, this.options.dateFormat));
      }
      if (this.options.maxDate) {
        this.options.maxDate = this._parseDate(this._getFormatedDate(this.options.maxDate, this.options.dateFormat));
      }

      this.month = this.options.startDate.getMonth();
      this.year = this.options.startDate.getFullYear();
      this.day = this.options.startDate.getDate();
      this.open = false;

      this._build();
      this._bindEvents();

      return this;
    }

    /**
     * Build datePicker HTML component and append it to the DOM
     * @method _build
     * @return {datePicker} Current plugin instance
     */

  }, {
    key: '_build',
    value: function _build() {
      // Define datePicker Template
      var datePicker = '\n      <div id=\'' + this._id + '\' class="datepicker ' + (this.options.overlay ? 'modal' : '') + '">\n        ' + (this.options.overlay ? '<div class="modal-background"></div>' : '') + '\n        <div class="calendar">\n          <div class="calendar-nav">\n            <div class="calendar-nav-month">\n              <button class="calendar-nav-previous-month button is-small is-text">\n                <svg viewBox="0 0 50 80" xml:space="preserve">\n                  <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n                </svg>\n              </button>\n              <div class="calendar-month">' + datepicker_langs[this.options.lang].months[this.month] + '</div>\n              <button class="calendar-nav-next-month button is-small is-text">\n                <svg viewBox="0 0 50 80" xml:space="preserve">\n                  <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n              </button>\n            </div>\n            <div class="calendar-nav-day">\n              <div class="calendar-day">' + this.day + '</div>\n            </div>\n            <div class="calendar-nav-year">\n              <button class="calendar-nav-previous-year button is-small is-text">\n                <svg viewBox="0 0 50 80" xml:space="preserve">\n                  <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n                </svg>\n              </button>\n              <div class="calendar-year">' + this.year + '</div>\n              <button class="calendar-nav-next-year button is-small is-text">\n                <svg viewBox="0 0 50 80" xml:space="preserve">\n                  <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n              </button>\n            </div>\n          </div>\n          <div class="calendar-container">\n            <div class="calendar-header">\n              <div class="calendar-date">' + this._getDayName(0, true) + '</div>\n              <div class="calendar-date">' + this._getDayName(1, true) + '</div>\n              <div class="calendar-date">' + this._getDayName(2, true) + '</div>\n              <div class="calendar-date">' + this._getDayName(3, true) + '</div>\n              <div class="calendar-date">' + this._getDayName(4, true) + '</div>\n              <div class="calendar-date">' + this._getDayName(5, true) + '</div>\n              <div class="calendar-date">' + this._getDayName(6, true) + '</div>\n            </div>\n            <div class="calendar-body"></div>\n          </div>\n        </div>\n      </div>\n    ';

      // Add datepicker HTML element to Document Body
      document.body.insertAdjacentHTML('beforeend', datePicker);

      // Save pointer to each datePicker element for later use
      this.datePickerContainer = document.getElementById(this._id);
      this.datePickerCalendar = this.datePickerContainer.querySelector('.calendar');
      if (this.options.overlay) {
        this.datePickerOverlay = this.datePickerContainer.querySelector('.modal-background');
        this.datePickerCloseButton = this.datePickerContainer.querySelector('.modal-close');
      }
      this.datePickerCalendarNav = this.datePickerCalendar.querySelector('.calendar-nav');
      this.datePickerCalendarNavMonth = this.datePickerCalendar.querySelector('.calendar-month');
      this.datePickerCalendarNavYear = this.datePickerCalendar.querySelector('.calendar-year');
      this.datePickerCalendarNavDay = this.datePickerCalendar.querySelector('.calendar-day');
      this.datePickerCalendarNavPreviousMonth = this.datePickerCalendarNav.querySelector('.calendar-nav-previous-month');
      this.datePickerCalendarNavNextMonth = this.datePickerCalendarNav.querySelector('.calendar-nav-next-month');
      this.datePickerCalendarNavPreviousYear = this.datePickerCalendarNav.querySelector('.calendar-nav-previous-year');
      this.datePickerCalendarNavNextYear = this.datePickerCalendarNav.querySelector('.calendar-nav-next-year');
      this.datePickerCalendarHeader = this.datePickerCalendar.querySelector('.calendar-header');
      this.datePickerCalendarBody = this.datePickerCalendar.querySelector('.calendar-body');
    }

    /**
     * Bind all events
     * @method _bindEvents
     * @return {void}
     */

  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this = this;

      // Bind event to element in order to display/hide datePicker on click
      this.element.addEventsListener(this._clickEvent, function (e) {
        e.preventDefault();

        if (_this.open) {
          _this.hide();
        } else {
          _this.show();
        }
      });

      if (this.options.overlay) {
        // Bind close event on Close button
        if (this.datePickerCloseButton) {
          this.datePickerCloseButton.addEventsListener(this._clickEvent, function (e) {
            e.preventDefault();
            _this.hide();
          });
        }
        // Bind close event on overlay based on options
        if (this.options.closeOnOverlayClick) {
          this.datePickerOverlay.addEventsListener(this._clickEvent, function (e) {
            e.preventDefault();
            _this.hide();
          });
        }
      }

      // Bind year navigation events
      this.datePickerCalendarNavPreviousYear.addEventsListener(this._clickEvent, function (e) {
        e.preventDefault();
        _this.prevYear();
      });
      this.datePickerCalendarNavNextYear.addEventsListener(this._clickEvent, function (e) {
        e.preventDefault();
        _this.nextYear();
      });

      // Bind month navigation events
      this.datePickerCalendarNavPreviousMonth.addEventsListener(this._clickEvent, function (e) {
        e.preventDefault();
        _this.prevMonth();
      });
      this.datePickerCalendarNavNextMonth.addEventsListener(this._clickEvent, function (e) {
        e.preventDefault();
        _this.nextMonth();
      });
    }

    /**
     * Bind events on each Day item
     * @method _bindDaysEvents
     * @return {void}
     */

  }, {
    key: '_bindDaysEvents',
    value: function _bindDaysEvents() {
      var _this2 = this;

      [].forEach.call(this.datePickerCalendarDays, function (calendarDay) {
        calendarDay.addEventsListener(_this2._clickEvent, function (e) {
          e.preventDefault();
          if (!e.currentTarget.classList.contains('is-disabled')) {
            var date = e.currentTarget.dataset.date.split('-');

            var _date = _slicedToArray(date, 3),
                year = _date[0],
                month = _date[1],
                day = _date[2];

            if (typeof _this2.options.onSelect != 'undefined' && _this2.options.onSelect != null && _this2.options.onSelect) {
              _this2.options.onSelect(new Date(year, month, day));
            }
            _this2.element.value = _this2._getFormatedDate(new Date(year, month, day), _this2.options.dateFormat);
            if (_this2.options.closeOnSelect) {
              _this2.hide();
            }
          }
        });
      });
    }

    /**
     * Get localized day name
     * @method renderDayName
     * @param  {[type]}      day          [description]
     * @param  {Boolean}     [abbr=false] [description]
     * @return {[type]}                   [description]
     */

  }, {
    key: '_getDayName',
    value: function _getDayName(day) {
      var abbr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      day += datepicker_langs[this.options.lang].weekStart;
      while (day >= 7) {
        day -= 7;
      }

      return abbr ? datepicker_langs[this.options.lang].weekdaysShort[day] : datepicker_langs[this.options.lang].weekdays[day];
    }
  }, {
    key: '_renderDay',
    value: function _renderDay(day, month, year, isSelected, isToday, isDisabled, isEmpty, isBetween, isSelectedIn, isSelectedOut) {
      return '\n      <div data-date="' + (year + '-' + month + '-' + day) + '" class="calendar-date' + (isDisabled ? ' is-disabled' : '') + (isBetween ? ' calendar-range' : '') + (isSelectedIn ? ' calendar-range-start' : '') + (isSelectedOut ? ' calendar-range-end' : '') + '">\n        <button class="date-item' + (isToday ? ' is-today' : '') + (isSelected ? ' is-active' : '') + '">' + day + '</button>\n      </div>\n    ';
    }
  }, {
    key: '_renderDays',
    value: function _renderDays() {
      var now = new Date();
      var days = '';

      var numberOfDays = this._getDaysInMonth(this.year, this.month),
          before = new Date(this.year, this.month, 1).getDay();

      // Call onRender callback if defined
      if (typeof this.options.onRender != 'undefined' && this.options.onRender != null && this.options.onRender) {
        this.options.onRender(this);
      }

      // Get start day from options
      if (datepicker_langs[this.options.lang].weekStart > 0) {
        before -= datepicker_langs[this.options.lang].weekStart;
        if (before < 0) {
          before += 7;
        }
      }

      var cells = numberOfDays + before,
          after = cells;
      while (after > 7) {
        after -= 7;
      }

      cells += 7 - after;
      for (var i = 0; i < cells; i++) {
        var day = new Date(this.year, this.month, 1 + (i - before)),
            isBetween = false,
            isSelected = this._compareDates(day, this.options.startDate),
            isSelectedIn = false,
            isSelectedOut = false,
            isToday = this._compareDates(day, now),
            isEmpty = i < before || i >= numberOfDays + before,
            isDisabled = false;

        day.setHours(0, 0, 0, 0);

        if (!isSelected) {
          isSelectedIn = false;
          isSelectedOut = false;
        }

        if (day.getMonth() !== this.month || this.options.minDate && day.getTime() < this.options.minDate.getTime() || this.options.maxDate && day.getTime() > this.options.maxDate.getTime()) {
          isDisabled = true;
        }

        days += this._renderDay(day.getDate(), this.month, this.year, isSelected, isToday, isDisabled, isEmpty, isBetween, isSelectedIn, isSelectedOut);
      }

      this.datePickerCalendarBody.insertAdjacentHTML('beforeend', days);
      this.datePickerCalendarDays = this.datePickerCalendarBody.querySelectorAll('.calendar-date');
      this._bindDaysEvents();
    }

    /**
     * Navigate to the previous month and regenerate calendar
     * @method prevMonth
     * @return {void}
     */

  }, {
    key: 'prevMonth',
    value: function prevMonth() {
      this.month -= 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disablePrevMonth',
    value: function _disablePrevMonth() {
      this.datePickerCalendarNavPreviousMonth.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enablePrevMonth',
    value: function _enablePrevMonth() {
      this.datePickerCalendarNavPreviousMonth.removeAttribute('disabled');
    }

    /**
     * Navigate to the next month and regenerate calendar
     * @method nextMonth
     * @return {}
     */

  }, {
    key: 'nextMonth',
    value: function nextMonth() {
      this.month += 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disableNextMonth',
    value: function _disableNextMonth() {
      this.datePickerCalendarNavNextMonth.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enableNextMonth',
    value: function _enableNextMonth() {
      this.datePickerCalendarNavNextMonth.removeAttribute('disabled');
    }

    /**
     * Navigate to the previous year and regenerate calendar
     * @method prevYear
     * @return {void}
     */

  }, {
    key: 'prevYear',
    value: function prevYear() {
      this.year -= 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disablePrevYear',
    value: function _disablePrevYear() {
      this.datePickerCalendarNavPreviousYear.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enablePrevYear',
    value: function _enablePrevYear() {
      this.datePickerCalendarNavPreviousYear.removeAttribute('disabled');
    }

    /**
     * Navigate to the previous year and regenerate calendar
     * @method nextYear
     * @return {}
     */

  }, {
    key: 'nextYear',
    value: function nextYear() {
      this.year += 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disableNextYear',
    value: function _disableNextYear() {
      this.datePickerCalendarNavNextYear.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enableNextYear',
    value: function _enableNextYear() {
      this.datePickerCalendarNavNextYear.removeAttribute('disabled');
    }

    /**
     * Show datePicker HTML Component
     * @method show
     * @return {void}
     */

  }, {
    key: 'show',
    value: function show() {
      // Set the startDate to the input value
      if (this.element.value) {
        this.options.startDate = this._parseDate(this.element.value);
      }
      this.month = this.options.startDate.getMonth();
      this.year = this.options.startDate.getFullYear();
      this.day = this.options.startDate.getDate();
      this._refreshCalendar();

      if (typeof this.options.onOpen != 'undefined' && this.options.onOpen != null && this.options.onOpen) {
        this.options.onOpen(this);
      }

      this.datePickerContainer.classList.add('is-active');
      if (!this.options.overlay) {
        this._adjustPosition();
      }
      this.open = true;
    }

    /**
     * Hide datePicker HTML Component
     * @method hide
     * @return {void}
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.open = false;
      if (typeof this.options.onClose != 'undefined' && this.options.onClose != null && this.options.onClose) {
        this.options.onClose(this);
      }
      this.datePickerContainer.classList.remove('is-active');
    }

    /**
     * Refresh calendar with new year/month days
     * @method _refreshCalendar
     * @return {[type]}        [description]
     */

  }, {
    key: '_refreshCalendar',
    value: function _refreshCalendar() {
      if (this.month < 0) {
        this.year -= Math.ceil(Math.abs(this.month) / 12);
        this.month += 12;
      }
      if (this.month > 11) {
        this.year += Math.floor(Math.abs(this.month) / 12);
        this.month -= 12;
      }
      this.datePickerCalendarNavMonth.innerHTML = datepicker_langs[this.options.lang].months[this.month];
      this.datePickerCalendarNavYear.innerHTML = this.year;
      this.datePickerCalendarNavDay.innerHTML = this.day;
      this.datePickerCalendarBody.innerHTML = '';

      var minMonth = 0,
          minYear = 0,
          maxMonth = 12,
          maxYear = 9999;

      if (this.options.minDate) {
        minMonth = this.options.minDate.getMonth();
        minYear = this.options.minDate.getFullYear();
      }
      if (this.options.maxDate) {
        maxMonth = this.options.maxDate.getMonth();
        maxYear = this.options.maxDate.getFullYear();
      }

      if (this.year <= minYear) {
        this._disablePrevYear();
      } else {
        this._enablePrevYear();
      }

      if (this.year >= maxYear) {
        this._disableNextYear();
      } else {
        this._enableNextYear();
      }

      if (this.year <= minYear && this.month <= minMonth) {
        this._disablePrevMonth();
      } else {
        this._enablePrevMonth();
      }

      if (this.year >= maxYear && this.month >= maxMonth) {
        this._disableNextMonth();
      } else {
        this._enableNextMonth();
      }

      this._renderDays();
      return this;
    }

    /**
     * Recalculate calendar position
     * @method _adjustPosition
     * @return {void}
     */

  }, {
    key: '_adjustPosition',
    value: function _adjustPosition() {
      var width = this.datePickerCalendar.offsetWidth,
          height = this.datePickerCalendar.offsetHeight,
          viewportWidth = window.innerWidth || document.documentElement.clientWidth,
          viewportHeight = window.innerHeight || document.documentElement.clientHeight,
          scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
          left,
          top,
          clientRect;

      if (typeof this.element.getBoundingClientRect === 'function') {
        clientRect = this.element.getBoundingClientRect();
        left = clientRect.left + window.pageXOffset;
        top = clientRect.bottom + window.pageYOffset;
      } else {
        left = this.element.offsetLeft;
        top = this.element.offsetTop + this.element.offsetHeight;
        while (this.element = this.element.offsetParent) {
          left += this.element.offsetLeft;
          top += this.element.offsetTop;
        }
      }

      this.datePickerCalendar.style.position = 'absolute';
      this.datePickerCalendar.style.left = left + 'px';
      this.datePickerCalendar.style.top = top + 'px';
    }

    /**
     * Destroy datePicker
     * @method destroy
     * @return {[type]} [description]
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.datePickerCalendar.remove();
    }

    /**
     * Returns date according to passed format
     * @method _getFormatedDate
     * @param {Date}   dt     Date object
     * @param {String} format Format string
     *      d    - day of month
     *      dd   - 2-digits day of month
     *      D    - day of week
     *      m    - month number
     *      mm   - 2-digits month number
     *      M    - short month name
     *      MM   - full month name
     *      yy   - 2-digits year number
     *      yyyy - 4-digits year number
     */

  }, {
    key: '_getFormatedDate',
    value: function _getFormatedDate(dt, format) {
      var items = {
        d: dt.getDate(),
        dd: dt.getDate(),
        D: dt.getDay(),
        m: dt.getMonth() + 1,
        mm: dt.getMonth() + 1,
        M: dt.getMonth(),
        MM: dt.getMonth(),
        yy: dt.getFullYear().toString().substr(-2),
        yyyy: dt.getFullYear()
      };

      items.dd < 10 && (items.dd = '0' + items.dd);
      items.mm < 10 && (items.mm = '0' + items.mm);
      items.D = datepicker_langs[this.options.lang].weekdays[items.D ? items.D - 1 : 6];
      items.M = datepicker_langs[this.options.lang].monthsShort[items.M];
      items.MM = datepicker_langs[this.options.lang].months[items.MM];

      return format.replace(/(?:[dmM]{1,2}|D|yyyy|yy)/g, function (m) {
        return typeof items[m] !== 'undefined' ? items[m] : m;
      });
    }

    /**
     * Parse Date string based on the Date Format given
     * @method _parseDate
     * @param  {String}   dateString          Date string to parse
     * @param  {[String}   [format=undefined] Date Format
     * @return {Date}                         Date Object initialized with Date String based on the Date Format
     */

  }, {
    key: '_parseDate',
    value: function _parseDate(dateString) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var date = new Date();
      date.setHours(0, 0, 0, 0);

      if (!format) {
        format = this.options.dateFormat;
      }

      var formatPattern = /((?:mm?)|(?:dd?)|(?:yyy?y?))[^0-9]((?:mm?)|(?:dd?)|(?:yyy?y?))[^0-9]((?:mm?)|(?:dd?)|(?:yyy?y?))/i;
      var datePattern = /(\d+)[^0-9](\d+)[^0-9](\d+)/i;

      var matchFormat = formatPattern.exec(format);
      if (matchFormat) {
        var matchDate = datePattern.exec(dateString);
        if (matchDate) {
          switch (matchFormat[1][0]) {
            case 'd':
              date.setDate(matchDate[1]);
              break;
            case 'm':
              date.setMonth(matchDate[1] - 1);
              break;
            case 'y':
              date.setFullYear(matchDate[1]);
              break;
          }

          switch (matchFormat[2][0]) {
            case 'd':
              date.setDate(matchDate[2]);
              break;
            case 'm':
              date.setMonth(matchDate[2] - 1);
              break;
            case 'y':
              date.setFullYear(matchDate[2]);
              break;
          }

          switch (matchFormat[3][0]) {
            case 'd':
              date.setDate(matchDate[3]);
              break;
            case 'm':
              date.setMonth(matchDate[3] - 1);
              break;
            case 'y':
              date.setFullYear(matchDate[3]);
              break;
          }
        }
      }

      return date;
    }

    /**
     * Check if given year is LeapYear or not
     * @method _isLeapYear
     * @param  {Integer}   year Year to check
     * @return {Boolean}        True if LeapYear then False
     */

  }, {
    key: '_isLeapYear',
    value: function _isLeapYear(year) {
      // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    /**
     * Get the number of days in month
     * @method _getDaysInMonth
     * @param  {Integer}       year  Year to check if we are facing a leapyear or not
     * @param  {Integer}       month Month for which we want to know the amount of days
     * @return {Integer}              Days amount
     */

  }, {
    key: '_getDaysInMonth',
    value: function _getDaysInMonth(year, month) {
      return [31, this._isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }

    /**
     * Compare two dates
     * @method _compareDates
     * @param  {Date}     a First date to compare
     * @param  {Date}     b Second Date to compare with
     * @return {Boolean}    True if dates are equal then false
     */

  }, {
    key: '_compareDates',
    value: function _compareDates(a, b) {
      // weak date comparison
      a.setHours(0, 0, 0, 0);
      b.setHours(0, 0, 0, 0);
      return a.getTime() === b.getTime();
    }
  }]);

  return datePicker;
}();

exports.default = datePicker;