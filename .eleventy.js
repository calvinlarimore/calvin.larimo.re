module.exports = function (config) {
	config.addPassthroughCopy({ "./src/_includes/style.css": "style.css" });
	config.addPassthroughCopy({ "./src/_includes/FSEX302-alt.ttf": "FSEX302-alt.ttf" });
	
	config.addPassthroughCopy({ "CNAME": "CNAME" });
	config.addPassthroughCopy("static");

	config.addShortcode("year", () => `${new Date().getFullYear()}`);

	config.addFilter("dump", arr => {
		return JSON.stringify(arr, null, 2);
	});

	return {
		dir: {
			input: "./src",
			output: "./build",
			includes: "_includes",
			layouts: "_layouts"
		},
		markdownTemplateEngine: "njk"
	}
}
