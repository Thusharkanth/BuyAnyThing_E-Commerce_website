// xmlFileLoader.js
function loadXmlFile(xmlFileUrl, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', xmlFileUrl, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const xmlDoc = xhr.responseXML;
        callback(xmlDoc);
      }
    };
    xhr.send();
  }
  
  // Load the XML file and display the reviews
  loadXmlFile('student4/comment/UserReviews.xml', function(xmlDoc) {
    const reviews = xmlDoc.getElementsByTagName('reviews');
    const reviewContainer = document.getElementById('review-container');
    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      const reviewHtml = `
        <div class="review">
          <h2>${review.getElementsByTagName('name')[0].textContent}</h2>
          <p>${review.getElementsByTagName('date')[0].textContent}</p>
          <p>${review.getElementsByTagName('stars')[0].textContent}</p>
          <p>${review.getElementsByTagName('comment')[0].textContent}</p>
        </div>
      `;
      reviewContainer.innerHTML += reviewHtml;
    }
  });