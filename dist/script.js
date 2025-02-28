//global variables
var monthEl = $(".c-main");
var dataCel = $(".c-cal__cel");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var monthText = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var indexMonth = month;
var todayBtn = $(".c-today__btn");
var addBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
today = year + "-" + month + "-" + day;


// ------ set default events -------
function defaultEvents(dataDay,dataName,dataNotes,classTag){
  var date = $('*[data-day='+dataDay+']');
  date.attr("data-name", dataName);
  date.attr("data-notes", dataNotes);
  date.addClass("event");
  date.addClass("event--" + classTag);
}

defaultEvents('2025-03-01', 'Olimpiada de Limba Engleză (Toate Clasele) Etapa Județeană - Proba Scrisă', '', 'important');
defaultEvents('2025-03-08', 'Olimpiada de Limba Engleză (Toate Clasele) Etapa Județeană - Proba Orală', '', 'important');
defaultEvents('2025-03-09', 'Olimpiada de Fizică (Toate Clasele) Etapa Județeană', '', 'important');
defaultEvents('2025-03-14', 'Olimpiada de Limba și Literatura Română (Toate Clasele) Etapa Județeană', '', 'important');
defaultEvents('2025-03-15', 'Olimpiada de Limba Franceză (Toate Clasele) Etapa Județeană', '', 'important');
defaultEvents('2025-03-15', 'Olimpiada de Inovare și Creație Digitală - InfoEducație (Toate Clasele) Etapa Județeană', '', 'important');
defaultEvents('2025-03-29', 'Olimpiada de Informatică Aplicată - AcadNet (Toate Clasele) Etapa Județeană', '', 'important');
defaultEvents('2025-04-01', 'Olimpiada de Matematică (clasele IX-XII) Etapa Națională', '', 'important');
defaultEvents('2025-04-05', 'Olimpiada de Limba și Literatura Română (clasele IX-XII) Etapa Națională', '', 'important');
defaultEvents('2025-04-06', 'Olimpiada de Matematică (clasele V-VIII) Etapa Națională', '', 'important');
defaultEvents('2025-04-10', 'Olimpiada de Limba și Literatura Română (clasele V-VIII) Etapa Națională', '', 'important');
defaultEvents('2025-04-10', 'Olimpiada de Fizică (clasele VI-XII) Etapa Națională', '', 'important');
defaultEvents('2025-04-13', 'Olimpiada de Informatică (liceu) Etapa Națională', '', 'important');
defaultEvents('2025-04-14', 'Olimpiada de Informatică (gimnaziu) Etapa Națională', '', 'important');
defaultEvents('2025-04-15', 'Olimpiada de Istorie (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-17', 'Olimpiada de Limba Italiană (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-18', 'Olimpiada de Limba Spaniolă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-19', 'Olimpiada de Limba Rusă Modernă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-20', 'Olimpiada de Limba Germană Modernă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-21', 'Olimpiada de Limba Maghiară Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-22', 'Olimpiada de Geografie (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-22', 'Olimpiada de Chimie (clasele VII-XII) Etapa Națională', '', 'important');
defaultEvents('2025-04-22', 'Olimpiada de Limba Franceză (clasele VII-XII) Etapa Națională', '', 'important');
defaultEvents('2025-04-23', 'Olimpiada de Chimie (clasele VII-XII) Etapa Națională', '', 'important');
defaultEvents('2025-04-24', 'Olimpiada de Limba Engleză (clasele VII-XII) Etapa Națională', '', 'important');
defaultEvents('2025-04-25', 'Olimpiada de Limba și Literatura Rromani (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-26', 'Olimpiada de Religie (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-27', 'Olimpiada de Arte Vizuale, Arhitectură și Istoria Artelor (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-28', 'Olimpiada de Muzică (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-29', 'Olimpiada de Tehnologii (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-04-30', 'Olimpiada de Educație Tehnologică și Aplicații Practice (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-01', 'Olimpiada de Educație Fizică și Sport (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-02', 'Olimpiada de Pedagogie-Psihologie (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-03', 'Olimpiada de Științe Socio-Umane (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-04', 'Olimpiada de Economie (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-05', 'Olimpiada de Logică, Argumentare și Comunicare (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-06', 'Olimpiada de Astronomie și Astrofizică (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-07', 'Olimpiada de Științe pentru Juniori (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-08', 'Olimpiada de Științe ale Pământului (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-09', 'Olimpiada de Lectură ca Abilitate de Viață (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-10', 'Olimpiada de Creativitate Științifică (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-11', 'Olimpiada de Inovare și Creație Digitală - InfoEducație (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-12', 'Olimpiada de Informatică Aplicată - AcadNet (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-13', 'Olimpiada de Meșteșuguri Artistice Tradiționale (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-14', 'Olimpiada de Arta Actorului (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-15', 'Olimpiada de Limba Latină (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-16', 'Olimpiada de Limba Greacă Veche (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-17', 'Olimpiada de Limba Croată Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-18', 'Olimpiada de Limba Sârbă Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-19', 'Olimpiada de Limba Slovacă Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-20', 'Olimpiada de Limba Cehă Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-21', 'Olimpiada de Limba Bulgară Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-22', 'Olimpiada de Limba Ucraineană Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-23', 'Olimpiada de Limba Turcă Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-24', 'Olimpiada de Limba Tătară Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-25', 'Olimpiada de Limba Polonă Maternă (Toate Clasele) Etapa Națională', '', 'important');
defaultEvents('2025-05-26', 'Olimpiada de Limba Chineză (Toate Clasele) Etapa Națională', '', 'important');

defaultEvents('2025-03-10', 'Concursul Național de Matematică "Ion Barbu-Dan Barbilian" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-03-15', 'Concursul Național de Fizică "Ștefan Procopiu" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-03-20', 'Concursul Național de Chimie "Raluca Ripan" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-03-25', 'Concursul Național de Biologie "George Emil Palade" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-03-30', 'Concursul Național de Informatică "Mihai Drăgănescu" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-04-05', 'Concursul Național de Geografie "George Vâlsan" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-04-10', 'Concursul Național de Istorie "Nicolae Iorga" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-04-15', 'Concursul Național de Limba și Literatura Română "Mihai Eminescu" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-04-20', 'Concursul Național de Limba Engleză "Shakespeare School" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-04-25', 'Concursul Național de Limba Franceză "Pierre de Ronsard" (Toate Clasele) Etapa Județeană', '', 'festivity');
defaultEvents('2025-05-01', 'Concursul Național de Matematică "Ion Barbu-Dan Barbilian" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-05-05', 'Concursul Național de Fizică "Ștefan Procopiu" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-05-10', 'Concursul Național de Chimie "Raluca Ripan" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-05-15', 'Concursul Național de Biologie "George Emil Palade" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-05-20', 'Concursul Național de Informatică "Mihai Drăgănescu" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-05-25', 'Concursul Național de Geografie "George Vâlsan" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-05-30', 'Concursul Național de Istorie "Nicolae Iorga" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-06-05', 'Concursul Național de Limba și Literatura Română "Mihai Eminescu" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-06-10', 'Concursul Național de Limba Engleză "Shakespeare School" (Toate Clasele) Etapa Națională', '', 'festivity');
defaultEvents('2025-06-15', 'Concursul Național de Limba Franceză "Pierre de Ronsard" (Toate Clasele) Etapa Națională', '', 'festivity');


// ------ functions control -------

//button of the current day
todayBtn.on("click", function() {
  if (month < indexMonth) {
    var step = indexMonth % month;
    movePrev(step, true);
  } else if (month > indexMonth) {
    var step = month - indexMonth;
    moveNext(step, true);
  }
});

//higlight the cel of current day
dataCel.each(function() {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});

//window event creator
addBtn.on("click", function() {
  winCreator.addClass("isVisible");
  $("body").addClass("overlay");
  dataCel.each(function() {
    if ($(this).hasClass("isSelected")) {
      today = $(this).data("day");
      document.querySelector('input[type="date"]').value = today;
    } else {
      document.querySelector('input[type="date"]').value = today;
    }
  });
});
closeBtn.on("click", function() {
  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
});
saveBtn.on("click", function() {
  var inputName = $("input[name=name]").val();
  var inputDate = $("input[name=date]").val();
  var inputNotes = $("textarea[name=notes]").val();
  var inputTag = $("select[name=tags]")
    .find(":selected")
    .text();

  dataCel.each(function() {
    if ($(this).data("day") === inputDate) {
      if (inputName != null) {
        $(this).attr("data-name", inputName);
      }
      if (inputNotes != null) {
        $(this).attr("data-notes", inputNotes);
      }
      $(this).addClass("event");
      if (inputTag != null) {
        $(this).addClass("event--" + inputTag);
      }
      fillEventSidebar($(this));
    }
  });

  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
  $("#addEvent")[0].reset();
});

//fill sidebar event info
function fillEventSidebar(self) {
  $(".c-aside__event").remove();
  var thisName = self.attr("data-name");
  var thisNotes = self.attr("data-notes");
  var thisImportant = self.hasClass("event--important");
  var thisBirthday = self.hasClass("event--birthday");
  var thisFestivity = self.hasClass("event--festivity");
  var thisEvent = self.hasClass("event");
  
  switch (true) {
    case thisImportant:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--important'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisBirthday:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--birthday'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisFestivity:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--festivity'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisEvent:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event'>" +
        thisName +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
   }
};
dataCel.on("click", function() {
  var thisEl = $(this);
  var thisDay = $(this)
  .attr("data-day")
  .slice(8);
  var thisMonth = $(this)
  .attr("data-day")
  .slice(5, 7);

  fillEventSidebar($(this));

  $(".c-aside__num").text(thisDay);
  $(".c-aside__month").text(monthText[thisMonth - 1]);

  dataCel.removeClass("isSelected");
  thisEl.addClass("isSelected");

});

//function for move the months
function moveNext(fakeClick, indexNext) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "-=100%"
    });
    $(".c-paginator__month").css({
      left: "-=100%"
    });
    switch (true) {
      case indexNext:
        indexMonth += fakeClick;
        break;
    }
  }
}
function movePrev(fakeClick, indexPrev) {
  for (var i = 0; i < fakeClick; i++) {
    $(".c-main").css({
      left: "+=100%"
    });
    $(".c-paginator__month").css({
      left: "+=100%"
    });
    switch (true) {
      case indexPrev:
        indexMonth -= fakeClick;
        break;
    }
  }
}

//months paginator
function buttonsPaginator(buttonId, mainClass, monthClass, next, prev) {
  switch (true) {
    case next:
      $(buttonId).on("click", function() {
        if (indexMonth >= 2) {
          $(mainClass).css({
            left: "+=100%"
          });
          $(monthClass).css({
            left: "+=100%"
          });
          indexMonth -= 1;
        }
        return indexMonth;
      });
      break;
    case prev:
      $(buttonId).on("click", function() {
        if (indexMonth <= 11) {
          $(mainClass).css({
            left: "-=100%"
          });
          $(monthClass).css({
            left: "-=100%"
          });
          indexMonth += 1;
        }
        return indexMonth;
      });
      break;
  }
}

// Global variables update
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
var favoriteBtn = $("#favoriteBtn");
favoriteBtn.on('click', function() {
  const selectedCell = $('.c-cal__cel.isSelected');
  if (selectedCell.length === 0) return;
  
  const date = selectedCell.data('day');
  const eventName = selectedCell.attr('data-name');
  const notes = selectedCell.attr('data-notes') || '';
  
  if (!eventName) {
    alert("Please add an event before favoriting this date.");
    return;
  }
  
  let favorites = getFavorites();
  const existingIndex = favorites.findIndex(f => f.date === date);
  
  if (existingIndex === -1) {
    favorites.push({ date, event: eventName, notes });
  } else {
    favorites.splice(existingIndex, 1);
  }
  
  saveFavorites(favorites);
  updateFavoritesList();
  updateFavoriteButtonState(date);
});


function updateFavoriteButtonState(date) {
  const favorites = getFavorites();
  const isFavorited = favorites.some(f => f.date === date);
  favoriteBtn.text(isFavorited ? '★ Remove' : '★ Add to Favorites');
}


// Modified favorites list update
function updateFavoritesList() {
  const favorites = getFavorites();
  $('.favorites-list').empty();
  
  favorites.forEach(fav => {
    const dateCell = $(`[data-day="${fav.date}"]`);
    if (dateCell.length > 0 && dateCell.attr('data-name')) {
      const eventDate = new Date(fav.date);
      const now = new Date();
      let nextDate = new Date(eventDate);
      
      if (nextDate < now) nextDate.setFullYear(nextDate.getFullYear() + 1);
      
      const diffDays = Math.ceil((nextDate - now) / (1000 * 60 * 60 * 24));
      const showTilde = nextDate.getFullYear() > eventDate.getFullYear();
      
      $('.favorites-list').append(`
        <div class="favorite-item">
          <div>
            <span class="favorite-date">${fav.date}</span>
            <span class="favorite-event"> - ${fav.event}</span>
            ${fav.notes ? `<span class="favorite-notes">• ${fav.notes}</span>` : ''}
          </div>
          <div>
            <span class="days-until">${showTilde ? '~' : ''}${diffDays} days</span>
            <button class="remove-favorite" data-date="${fav.date}">×</button>
          </div>
        </div>
      `);
    }
  });
}


// Handle remove button clicks
$('.favorites-list').on('click', '.remove-favorite', function() {
  const date = $(this).data('date');
  let favorites = getFavorites();
  favorites = favorites.filter(f => f.date !== date);
  saveFavorites(favorites);
  updateFavoritesList();
  updateFavoriteButtonState(date);
});

// Update favorite button text when date is selected
dataCel.on("click", function() {
  const date = $(this).data('day');
  const hasEvent = $(this).attr('data-name') !== undefined;
  
  favoriteBtn.prop('disabled', !hasEvent);
  updateFavoriteButtonState(date);

  // Existing calendar UI updates
  const thisDay = $(this).attr("data-day").slice(8);
  const thisMonth = $(this).attr("data-day").slice(5, 7);
  fillEventSidebar($(this));
  $(".c-aside__num").text(thisDay);
  $(".c-aside__month").text(monthText[thisMonth - 1]);
  dataCel.removeClass("isSelected");
  $(this).addClass("isSelected");
});

let currentUser = null;
const users = JSON.parse(localStorage.getItem('users')) || [];

// Auth UI elements
const hamburgerBtn = $('.hamburger-btn');
const authDropdown = $('.auth-dropdown');
const authModal = $('.auth-modal');
const closeButn = $('.close-btn');
const authTitle = $('.auth-title');
const authForm = $('#authForm');
const authSubmit = $('.auth-submit');
const hamburgerBtnClose = $('.close-btn2');
let isLoginMode = true;

function getFavorites() {
  if (currentUser) {
    const user = users.find(u => u.username === currentUser);
    return user ? user.favorites : [];
  }
  return JSON.parse(localStorage.getItem('guestFavorites')) || [];
}

function saveFavorites(favorites) {
  if (currentUser) {
    const userIndex = users.findIndex(u => u.username === currentUser);
    if (userIndex !== -1) {
      users[userIndex].favorites = favorites;
      localStorage.setItem('users', JSON.stringify(users));
    }
  } else {
    localStorage.setItem('guestFavorites', JSON.stringify(favorites));
  }
}


// Toggle auth dropdown
hamburgerBtn.on('click', () => authDropdown.toggleClass('show'));
hamburgerBtnClose.on('click', () => authDropdown.toggleClass('show'));


$('#loginBtn').on('click', () => {
  isLoginMode = true;
  authTitle.text('Login');
  authSubmit.text('Login');
  authModal.show();
  authDropdown.removeClass('show');
});

$('#registerBtn').on('click', () => {
  isLoginMode = false;
  authTitle.text('Register');
  authSubmit.text('Register');
  authModal.show();
  authDropdown.removeClass('show');
});

// Close modal
closeButn.on('click', () => authModal.hide());

// Auth form submission
authForm.on('submit', (e) => {
  e.preventDefault();
  const username = $('#username').val();
  const password = $('#password').val();

  if (isLoginMode) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      currentUser = username;
      sessionStorage.setItem('currentUser', username);
      authModal.hide();
      
      // Directly load user's favorites without merging
      updateFavoritesList();
      updateAuthUI();
    } else {
      alert('Invalid credentials');
    }
  } else {
    if (users.some(u => u.username === username)) {
      alert('Username already exists');
    } else {
      users.push({ username, password, favorites: [] });
      localStorage.setItem('users', JSON.stringify(users));
      currentUser = username;
      sessionStorage.setItem('currentUser', username);
      authModal.hide();
      updateAuthUI();
    }
  }
});

// Update UI based on auth status
function updateAuthUI() {
  if (currentUser) {
    $('#loginBtn, #registerBtn').hide();
    $('#logoutBtn').show();
    hamburgerBtn.html(`<i class="fa fa-user"></i> ${currentUser}`);
    $('.logout-btn').on('click', logout);
  } else {
    $('#loginBtn, #registerBtn').show();
    $('#logoutBtn').hide();
    hamburgerBtn.html('<i class="fa fa-bars"></i> Meniu');
  }
}

// Modify the logout function to clear guest favorites if desired
function logout() {
  // Optional: Uncomment next line if you want to clear guest favorites on logout
  //localStorage.removeItem('guestFavorites');
  currentUser = null;
  sessionStorage.removeItem('currentUser');
  updateAuthUI();
  updateFavoritesList();
}

async function sendContact(ev) {
  ev.preventDefault();
  const senderMessage = document
    .getElementById('messageInput').value;

  const senderDate = document
    .getElementById('link-input').value;

  const webhookBody = {
    embeds: [{
      title: 'Contact Form Submitted',
      fields: [
        { name: 'Link', value: senderDate },
        { name: 'Data', value: senderMessage }
      ]
    }],
  };

  const webhookUrl = 'https://discord.com/api/webhooks/1343850983582597222/cGo3SHn42fFqdEhPpGsboxp7HnEuZVnOhEPWe9g3PYFUGC3klf4nS9O8FoIZ8NHDIJ_3';

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
  });

  if(response.ok)
    alert("mesaj trimis");
  else alert("eroare");
}

currentUser = sessionStorage.getItem('currentUser');
updateAuthUI();

buttonsPaginator("#next", monthEl, ".c-paginator__month", false, true);
buttonsPaginator("#prev", monthEl, ".c-paginator__month", true, false);

//launch function to set the current month
moveNext(indexMonth - 1, false);

//fill the sidebar with current day
$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);

updateFavoritesList();
