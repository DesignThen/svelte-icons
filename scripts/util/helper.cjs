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
 */
function resolveIconType(value) {
	const [_, path] = value.split("lib/");
	if (!path) throw new Error(`Could not format component name: ${value}`);

	const [icon_type] = path.split("/");

	if (icon_type?.startsWith("heroicon")) {
		const [_, size, type] = icon_type.split("-");
		if (!type || !size) {
			throw new Error(`Could not format heroicon component name: ${value}`);
		}

		return { prefix: `Hi` + capitalize(size), suffix: capitalize(type) };
	} else if (icon_type?.startsWith("simple-icons")) {
		return { prefix: "Si", suffix: "" };
	} else throw new Error(`icon_type: ${icon_type} not supported in resolveIconType`);
}

/**
 * @param  {string} value
 */
function fixNumberName(value) {
	if (
		value === "1001tracklists" ||
		value === "1password" ||
		value === "3m" ||
		value === "42" ||
		value === "4chan" ||
		value === "4d" ||
		value === "500px"
	) {
		return `I` + value;
	} else return value;
}

/**
 * @param  {string} value
 * @param  {boolean} as_root
 */
function toComponentName(value, as_root) {
	const icon_type = as_root ? resolveIconType(value) : { prefix: "", suffix: "" };

	const prefix = ` ${icon_type.prefix} `;
	const suffix = ` ${icon_type.suffix} `;

	const name = prefix + toTitleCase(value).split(".").shift() + suffix;
	const withoutSpaces = name?.replace(/\s/g, "");
	if (!withoutSpaces) throw new Error(`Could not format component name: ${value}`);
	return fixNumberName(withoutSpaces);
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
