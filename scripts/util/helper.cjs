const path = require("path");

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
 * @param  {string} [prefix]
 */
function toFilename(pathname, extension, prefix) {
	const withoutPath = pathname.split("/").pop();
	const withoutExtension = withoutPath?.split(".").shift();
	const asFilename = withoutExtension?.toLowerCase().replace(/\s/g, "-");
	const pre = prefix ? `${prefix}-` : "";

	if (!asFilename) throw new Error(`Could not format filename: ${pathname}`);
	else if (extension) {
		return pre + asFilename + `.${extension}`;
	} else {
		return pre + asFilename;
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
 * @param  {string} [prefix]
 */
function toComponentName(value, prefix) {
	const pre = prefix ? `${capitalize(prefix)} ` : "";
	const name = pre + toTitleCase(value).split(".").shift();
	const withoutSpaces = name?.replace(/\s/g, "");
	if (!withoutSpaces) throw new Error(`Could not format component name: ${value}`);
	return withoutSpaces;
}
/**
 * @param  {string} pathname
 */
function toRelativePath(pathname) {
	const srcPath = pathname.split("src/lib/").pop();
	if (!srcPath) throw new Error(`Could not handle relative path: ${path}`);
	const relativePath = path.join(`$lib`, srcPath);
	return relativePath;
}

module.exports = {
	capitalize,
	toComponentName,
	toFilename,
	toRelativePath,
	toTitleCase,
};
