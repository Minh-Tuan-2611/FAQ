var title = document.createElement('h2');
title.classList.add('title');
title.innerHTML = 'FAQ ?'

var app = document.getElementById('app');

var msg1 = new message('What kind of payment do you support ?', 'We support credit card, PayPal and Stripe .');
var msg2 = new message('Do you support free delivery ?', 'No, I don\'t support free delivery .');
var msg3 = new message('What\'s your warranty policy ?', 'We support 2 years warranty .');

app.appendChild(title);
app.appendChild(msg1.render());
app.appendChild(msg2.render());
app.appendChild(msg3.render());

var x;