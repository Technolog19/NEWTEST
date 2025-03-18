document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
  
    if (!/^\+?[0-9\s\-\(\)]+$/.test(phone)) {
        alert('Пожалуйста, введите корректный номер телефона.');
        return;
    }
  
    this.submit();
  });
  
  
  
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a.scroll-to-form','a.button_page').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            document.getElementById('order-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  });



//   =============================
document.addEventListener('DOMContentLoaded', function() {
    const commentDates = document.querySelectorAll('.comment_date');

    const totalComments = commentDates.length;

    const currentDate = new Date();

    const startDate = new Date();
    startDate.setDate(currentDate.getDate() - 10);

    const timeDiff = currentDate.getTime() - startDate.getTime();

    const step = timeDiff / (totalComments - 1);

    commentDates.forEach((dateElement, index) => {
        const commentDate = new Date(startDate.getTime() + step * index);

        const formattedDate = `${String(commentDate.getDate()).padStart(2, '0')}.${String(commentDate.getMonth() + 1).padStart(2, '0')}.${commentDate.getFullYear()}`;

        dateElement.textContent = formattedDate;
    });
});