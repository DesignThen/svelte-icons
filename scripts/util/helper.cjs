/**
 * @param  {string} word
 */
function capitalize(word) {
	const letters = word.split("");
	const capital = letters.shift();
	const rest = letters.join("");

	if (!capital) throw new Error(`Could not capitalize: ${word}`);

	return capital.toUpperCase() + rest.toLowerCase();
}

/**
 * @param  {string} pathname
 * @param  {string} [extension]
 */
function toFilename(pathname, extension) {
	const withoutPath = pathname.split("/").pop();
	const withoutExtension = withoutPath?.split(".").shift();
	const asFilename = withoutExtension?.toLowerCase().replace(/\s/g, "-");

	if (!asFilename) throw new Error(`Could not format filename: ${pathname}`);
	else if (extension) {
		return asFilename + `.${extension}`;
	} else {
		return asFilename;
	}
}

/**
 * @param  {string} value
 */
function toTitleCase(value) {
	const filename = toFilename(value);
	const withoutDashes = filename.replace(/-/g, " ");
	const asTitleCase = withoutDashes.replace(/\w\S*/g, capitalize);
	return asTitleCase;
}

/**
 * @param  {string} value
 */
function toComponentName(value) {
	const name = toTitleCase(value).split(".").shift();
	const withoutSpaces = name?.replace(/\s/g, "");
	if (!withoutSpaces) throw new Error(`Could not format component name: ${value}`);
	return withoutSpaces;
}

module.exports = {
	capitalize,
	toComponentName,
	toFilename,
	toTitleCase,
};
