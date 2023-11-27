document.addEventListener('DOMContentLoaded', function () {
  const rectangles = document.querySelectorAll('.rectangle');

  rectangles.forEach(rectangle => {
    const content = rectangle.querySelector('.content');
    const additionalContent = rectangle.querySelector('.additional-content');
    const toggleBtn = rectangle.querySelector('.toggle-btn');

    content.addEventListener('click', function () {
      // Collapse all rectangles
      rectangles.forEach(r => {
        if (r !== rectangle && r.classList.contains('expanded')) {
          r.classList.remove('expanded');
          r.querySelector('.additional-content').style.display = 'none';
          r.querySelector('.toggle-btn i').classList.remove('fa-times'); // Remove the times icon
          r.querySelector('.toggle-btn i').classList.add('fa-plus'); // Add the plus icon
        }
      });

      // Toggle the clicked rectangle
      rectangle.classList.toggle('expanded');
      if (rectangle.classList.contains('expanded')) {
        additionalContent.style.display = 'block';
        toggleBtn.querySelector('i').classList.remove('fa-plus'); // Remove the plus icon
        toggleBtn.querySelector('i').classList.add('fa-xmark'); // Add the times icon
      } else {
        additionalContent.style.display = 'none';
        toggleBtn.querySelector('i').classList.remove('fa-xmark'); // Remove the times icon
        toggleBtn.querySelector('i').classList.add('fa-plus'); // Add the plus icon
      }
    });
  });
});
