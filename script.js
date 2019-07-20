/*Fix for static menu bar in-page links*/
function scrollTo(anchorName)
{
  // We get the height of the menu bar, and add a little padding (5). This will be our offset. 
  var scrollOffset =  -5 + (-1 * document.getElementById('menubar').scrollHeight );
  //Now we scroll to where the browser thinks the anchor is
  var element_to_scroll_to = document.getElementById(anchorName);
  element_to_scroll_to.scrollIntoView({behavior: "instant", block: "start", inline: "start"});
  //But that is behind the static menu bar, so we scoot back a bit to see where we want to be, via the offset
  window.scrollBy(0, scrollOffset);
  return 1;
} //function scrollTo

/*Fix for static menu bar blocking content on resized windows*/
function adjustMargin ()
{
  // We get the height of the menu bar
  var newmargin = document.getElementById('menubar').scrollHeight;
  //Adjust the top margin so that all content is viewable and can be scrolled to
  document.body.style.marginTop = newmargin + "px";
  return 1;  
} //function adjustMargin

window.onload = adjustMargin;

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });