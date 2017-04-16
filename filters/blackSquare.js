app.filter('blackSquare', function() {
    return function(data) {
      if (!data) {
        return "\u2001"
      } else {
        return "\u25A0"
      };
    }
});
