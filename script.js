window.onload = () => {
  loadAllCarousels();
};
/* Replace static quotes by dynamic loading: */

const loadAllCarousels = () => {

  //load carousel for quotes
  $.ajax({url:'https://smileschool-api.hbtn.info/quotes',
      success: (data) => {
        const quoteList = [];
        data.forEach((quote) => {
          quoteList.push(createquote(quote));
        });
        setCarouselItems(quoteList, 1, $('.quotes .carousel-inner'));
      },
      complete, function() {
        $('.loader').hide();
      }
    }
  },
