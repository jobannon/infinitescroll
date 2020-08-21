$(document).on('turbolinks:load') {
  $(".posts").infiniteScroll({
    navSelector: "nav.pagination",
    nextSelector: "nav.pagination a[rel=next]",
    itemSelector: "#posts tr.post"
});
