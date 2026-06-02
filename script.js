
      const height = document.getElementById("height");
      const width = document.getElementById("width");

      function updateDimensions() {
        width.innerText = window.innerWidth;
        height.innerText = window.innerHeight;
      }
      updateDimensions();
      window.addEventListener("resize", function () {
        updateDimensions();
      });//your JS code here. If required.
    <script>
      const height = document.getElementById("height");
      const width = document.getElementById("width");

      function updateDimensions() {
        width.innerText = window.innerWidth;
        height.innerText = window.innerHeight;
      }
      updateDimensions();
      window.addEventListener("resize", function () {
        updateDimensions();
      });