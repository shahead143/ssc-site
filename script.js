// =========================
// SCC Scripts (script.js)
// Each significant line has a comment
// =========================
document.querySelectorAll('a[href^="#"]').forEach(a => { // find all in-page links
  a.addEventListener('click', e => {                      // on click
    const id = a.getAttribute('href').slice(1);           // get the target id
    const el = document.getElementById(id);               // find element
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); } // smooth scroll
  });
});
function toWhatsApp(){                                    // open WhatsApp with text
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const text = encodeURIComponent(`Hello, I'm ${name} (${email}). ${msg}`);
  const phone = '923001234567'; // TODO: set your real number
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}
function toEmail(){                                       // fallback mailto
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Project Enquiry');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:hello@scc.com?subject=${subject}&body=${body}`;
}
document.getElementById('year').textContent = new Date().getFullYear(); // set year
