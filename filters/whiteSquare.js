app.filter('whiteSquare', function() {
    return function(data) {
      if (!data) {
        return "\u25A1"
      } else {
        return "\u25A0"
      };
    };
});
