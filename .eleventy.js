module.exports = function(eleventyConfig) {
  // Merge data when cascading data
  eleventyConfig.setDataDeepMerge(true);

  // Useful for dynamically selecting partials on the fly
  eleventyConfig.addShortcode("whichPartial", function(data) {
    return `${data}`;
  });

  // reverse an array? note: I'm still wildly unclear on the difference between filters and shortcodes and when i should
  // use one or the other. so here's two options.
  eleventyConfig.addFilter("reverseThatArray", function(value) {
    return value.reverse();
  });

  eleventyConfig.addShortcode("scReverse", function(value) {
    return value.reverse();
  });

  // Return Config object.
  return {
    dir: {
      input: "pages",
      includes: "../templates/partials",
      layouts: "../templates/layouts",
      output: "./build"
    }
  };
};
