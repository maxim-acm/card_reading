jQuery(document).ready(function(){

    // preload images
    preload([
        'cards-images/Cards_v-1.jpg',
        'cards-images/Cards_v-2.jpg',
        'cards-images/Cards_v-3.jpg',
        'cards-images/Cards_v-4.jpg',
        'cards-images/Cards_v-5.jpg',
        'cards-images/Cards_v-6.jpg',
        'cards-images/Cards_v-7.jpg',
        'cards-images/Cards_v-8.jpg',
        'cards-images/Cards_v-9.jpg',
        'cards-images/Cards_v-10.jpg',
        'cards-images/Cards_v-11.jpg',
        'cards-images/Cards_v-12.jpg',
        'cards-images/Cards_v-13.jpg',
        'cards-images/Cards_v-14.jpg',
        'cards-images/Cards_v-15.jpg',
        'cards-images/Cards_v-16.jpg',
        'cards-images/Cards_v-17.jpg',
        'cards-images/Cards_v-18.jpg',
        'cards-images/Cards_v-19.jpg',
        'cards-images/Cards_v-20.jpg',
        'cards-images/Cards_v-21.jpg',
        'cards-images/Cards_v-22.jpg',
        'cards-images/Cards_v-23.jpg',
        'cards-images/Cards_v-24.jpg',
        'cards-images/Cards_v-25.jpg',
        'cards-images/Cards_v-26.jpg',
        'cards-images/Cards_v-27.jpg',
        'cards-images/Cards_v-28.jpg',
        'cards-images/Cards_v-29.jpg',
        'cards-images/Cards_v-30.jpg',
        'cards-images/Cards_v-31.jpg',
        'cards-images/Cards_v-32.jpg',
        'cards-images/Cards_v-33.jpg',
        'cards-images/Cards_v-34.jpg',
        'cards-images/Cards_v-35.jpg',
        'cards-images/Cards_v-36.jpg',
        'cards-images/Cards_v-37.jpg',
        'cards-images/Cards_v-38.jpg',
        'cards-images/Cards_v-39.jpg',
        'cards-images/Cards_v-40.jpg',
        'cards-images/Cards_v-41.jpg',
        'cards-images/Cards_v-42.jpg',
        'cards-images/Cards_v-43.jpg',
        'cards-images/Cards_v-44.jpg',
        'cards-images/Cards_v-45.jpg',
        'cards-images/Cards_v-46.jpg',
        'cards-images/Cards_v-47.jpg',
        'cards-images/Cards_v-48.jpg',
        'cards-images/Cards_v-49.jpg',
        'cards-images/Cards_v-50.jpg',
        'cards-images/Cards_v-51.jpg',
        'cards-images/Cards_v-52.jpg',
        'cards-images/Cards_v-53.jpg',
        'cards-images/Cards_v-54.jpg',
        'cards-images/Cards_v-55.jpg',
        'cards-images/Cards_v-56.jpg',
        'cards-images/Cards_v-57.jpg',
        'cards-images/Cards_v-58.jpg',
        'cards-images/Cards_v-59.jpg',
        'cards-images/Cards_v-60.jpg'

    ]);

    function preload(images) {
        if (typeof document.body == "undefined") return;
        try {

            var div = document.createElement("div");
            var s = div.style;
            s.position = "absolute";
            s.top = s.left = 0;
            s.display = "none";
            document.body.appendChild(div);
            div.innerHTML = "<img src=\"" + images.join("\" /><img src=\"") + "\" />";
            var lastImg = div.lastChild;
            lastImg.onload = function() { document.body.removeChild(document.body.lastChild); };
        }
        catch(e) {
            // Error. Do nothing.
        }
    }
});