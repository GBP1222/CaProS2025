
async function sendReview(ev) {
  ev.preventDefault();
  const ratingValue = document.querySelector('input[name="rating"]:checked')?.value || '3 and a half';;

  const webhookBody = {
    embeds: [{
      title: 'Review Form',
      fields: [
        { name: 'Review', value: ratingValue }
      ]
    }],
  };

  const webhookUrl = 'https://discord.com/api/webhooks/1345843188736331808/srSkQv1wXfsTjClELeZvqreQuimXSHNPqTFM0VPn7hBo4sYyp_Atmm3Xt5W734Hgboar';

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
  });
}

async function sendFeedback(ev) {
  ev.preventDefault();
  const contactName = document
    .getElementById('contactNameInput').value;

  const contactMail = document
    .getElementById('contactMailInput').value;

  const contactMessage = document
    .getElementById('contactMessageInput').value;

  const webhookBody = {
    embeds: [{
      title: 'Feedback Form',
      fields: [
        { name: 'Nume', value: contactName },
        { name: 'Mail', value: contactMail },
        { name: 'Message', value: contactMessage }
      ]
    }],
  };

  const webhookUrl = 'https://discord.com/api/webhooks/1345843406248869970/QgT7PWN4drhH9C_mFr1P1WY3orwH5-Sgg8KxY-Ffl5dI1trM00ALauLM_tFzoweOOIF3';

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
  });
}

var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
} 