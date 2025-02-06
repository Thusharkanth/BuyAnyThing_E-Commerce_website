window.onload = function() {
    var galleryItems = document.getElementsByClassName('gallery-item');

    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener('mouseover', function() {
            var img = this.getElementsByTagName('img')[0];
            var description = this.getElementsByClassName('description')[0];
            img.style.opacity = '0.3';
            description.style.display = 'block';
        });

        galleryItems[i].addEventListener('mouseout', function() {
            var img = this.getElementsByTagName('img')[0];
            var description = this.getElementsByClassName('description')[0];
            img.style.opacity = '1';
            description.style.display = 'none';
        });
    }
};
