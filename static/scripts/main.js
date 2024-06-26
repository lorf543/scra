new DataTable('#scraList', {
  "autoWidth": true,
  "scrollX": true,
  "scrollY": 600,
  "columnDefs": [
    { "width": "10%", "targets": 0 },
    { "width": "5%", "targets": 1 },
    { "width": "10%", "targets": 2 },
    { "width": "20%", "targets": 3 },
    { "width": "20%", "targets": 4 },
    { "width": "5%", "targets": 5 },
    { "width": "20%", "targets": 6 },
  ]
});

new DataTable('#trackerReturn', {
  "autoWidth": true,
  "scrollX": true,
  "scrollY": 600,
  "columnDefs": [
      { "width": "1%", "targets": 0 },
      { "width": "5%", "targets": 1 },
      { "width": "10%", "targets": 2 },
      { "width": "10%", "targets": 3 },
      { "width": "20%", "targets": 4 },
      { "width": "5%", "targets": 5 },
      { "width": "20%", "targets": 6 },
  ]
});

new DataTable('#tableInbox', {
  "autoWidth": true,
  "scrollY": 600,
  "columnDefs": [
    { "width": "5%", "targets": 0 },
    { "width": "5%", "targets": 1 },
    { "width": "5%", "targets": 2 },
    { "width": "5%", "targets": 3 },
    { "width": "5%", "targets": 4 },
]
});


new DataTable('#Pendinglist', {
  "autoWidth": true,
  "scrollX": true,
  "scrollY": 600,
  "columnDefs": [
    { "width": "1%", "targets": 0 },
    { "width": "5%", "targets": 1 },
    { "width": "10%", "targets": 2 },
    { "width": "15%", "targets": 3 },
    { "width": "10%", "targets": 4 },
    { "width": "10%", "targets": 5 },
    { "width": "5%", "targets": 6 },
    { "width": "5%", "targets": 7 },
    { "width": "15%", "targets": 8 },
]
});


new DataTable('#all_history_notes',{
  "autoWidth": true,
  "scrollX": true,
  "scrollY": 600,
})

// new flatpickr("#test_id", {});

//Table for SCRA candidates
// $(document).ready(function() {
//   var table = $('#scraList').DataTable({
//       "paging": true,
//       "lengthChange": true,
//       "searching": true,
//       "ordering": true,
//       "info": true,
//       "autoWidth": true,
//       "scrollX": true,
//       "scrollY": 600,
//       "columnDefs": [
//           // Add any specific column definitions if needed
//       ]
//   });   
// });



window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  };


  // Get all rows with the class 'customer-row'
  var customerRows = document.querySelectorAll('.customer-row');

  // Add a click event listener to each row
  customerRows.forEach(function (row) {
    row.addEventListener('click', function () {
      // Remove the 'selected' class from all rows
      customerRows.forEach(function (innerRow) {
        innerRow.classList.remove('selected');
      });

      // Add the 'selected' class to the clicked row
      row.classList.add('selected');
    });
  });

});


$(".menu > ul > li").click(function (e) {
  // remove active from already active
  $(this).siblings().removeClass("active");
  // add active to clicked
  $(this).toggleClass("active");
  // if has sub menu open it
  $(this).find("ul").slideToggle();
  // close other sub menu if any open
  $(this).siblings().find("ul").slideUp();
  // remove active class of sub menu items
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});











