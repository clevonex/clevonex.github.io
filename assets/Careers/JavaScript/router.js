var router = new Navigo(null, true);

router.on("/careers/", function () {
  // Load the "careers.html" content into the desired section of your page
  fetch("assets/Careers/careers.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("content").innerHTML = html;
    });

  // Update the URL to reflect the desired "/careers/" path
  history.pushState(null, null, "/careers/");
});

// Make sure to call the following method to start listening for route changes
router.resolve();
