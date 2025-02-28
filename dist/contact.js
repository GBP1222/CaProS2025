
async function sendReview(ev) {
  ev.preventDefault();
  const ratingValue = document.querySelector('input[name="rating"]:checked')?.value || '3 and a half';;

  const webhookBody = {
    embeds: [{
      title: 'Contact Form Submitted',
      fields: [
        { name: 'Review', value: ratingValue }
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

  if(response.ok){
    alert("trimis");
  }else alert("eroare");
}

async function sendFeedback(ev) {
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