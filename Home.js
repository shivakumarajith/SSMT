
    function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: 'aj.shivakumar123@gmail.com',
        Password: "lkfnvfxtkyejgagc",
        To: 'aj.shivakumar123@gmail.com',
        From: 'aj.shivakumar123@gmail.com',
        Subject: "message from site",
        Body: 'hii',
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }
