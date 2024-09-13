const imageUpload = document.getElementById("image-upload"); // Grabs the file input element
const gallery = document.getElementById("gallery"); // Grabs the gallery div

imageUpload.addEventListener("change", (event) => {
  const files = event.target.files;

  //Make the file as an array and loop through it
  Array.from(files).forEach((file) => {
    //Create a file reader
    const reader = new FileReader();

    //After competing the readingDataUrl get the data and add to the parent
    reader.onload = (e) => {
      //create a img element
      const img = document.createElement("img");
      img.src = e.target.result;

      // create a div
      const imageGallery = document.createElement("div");
      imageGallery.classList.add("gallery-item");

      imageGallery.appendChild(img);

      img.onload = () => {
        //Get the aspect ratio
        const ratio = img.naturalHeight / img.naturalWidth;

        //total row that will take
        const rowSpan = Math.ceil(ratio * 10);
        imageGallery.style.gridRowEnd = `span ${rowSpan}`;
      };

      gallery.appendChild(imageGallery);
    };

    //Get the file and read it as a 64bit data
    reader.readAsDataURL(file);
  });
});
