// Common JavaScript for all pages

// Tool Button Click Handlers
document.querySelectorAll('.tool-card .btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Tool functionality will be implemented here!');
  });
});

// Image Compression Tool
if (document.getElementById('compress-btn')) {
  document.getElementById('compress-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('image-upload');
    const outputDiv = document.getElementById('output');

    if (fileInput.files.length === 0) {
      alert('Please upload an image first.');
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;

      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Compress image
        canvas.toBlob(
          (blob) => {
            const compressedUrl = URL.createObjectURL(blob);
            outputDiv.innerHTML = `
              <p>Image compressed successfully!</p>
              <a href="${compressedUrl}" download="compressed-image.png" class="btn">Download Compressed Image</a>
            `;
          },
          'image/png',
          0.7 // Compression quality (0.7 = 70%)
        );
      };
    };

    reader.readAsDataURL(file);
  });
}

// Contact Form Handling
if (document.getElementById('contactForm')) {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for contacting us! We will get back to you soon.');

    // Clear form
    document.getElementById('contactForm').reset();
  });
}