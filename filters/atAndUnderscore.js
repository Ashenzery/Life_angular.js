app.filter('test', function() {
    return function(data) {
      if (!data) {
        return "_";
      } else {
        return "@";
      };
    }
});
