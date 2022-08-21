const fs = require("fs");
const path = require("path");

/**
 * @typedef {import('./types').FileMetadata} FileMetadata
 */

const path_to_import = path.resolve(__dirname, "import");
const path_to_components = path.resolve(__dirname, "../src/lib");

/** @type {string[]} **/
let folders = [];

/** @type {FileMetadata[]} **/
let files = [];

fs.readdirSync(path_to_import, { withFileTypes: true, encoding: "utf-8" }).forEach((value) => {
	if (!value.isDirectory()) return;
	else folders.push(path.join(path_to_import, value.name));
});

console.log("Importing from: ", folders);

folders.forEach((pathname) => {
	const dir = fs.readdirSync(pathname, {
		withFileTypes: true,
		encoding: "utf-8",
	});

	dir.forEach((value) => {
		if (!value.isFile() || !value.name.endsWith(".svg")) return;
		else {
			const filepath = path.join(pathname, value.name);
			const metadata = getFileMetadata(filepath);
			files.push(metadata);
		}
	});
});

files.forEach(({ _input, _output, _parent, name, pathname }) => {
	console.log({ _input, _output, _parent, name, pathname });
	const svgContent = fs.readFileSync(_input, { encoding: "utf-8" });
	fs.mkdirSync(_parent, { recursive: true });
	fs.writeFileSync(_output, svgContent, { encoding: "utf-8", flag: "w+" });
});

// Utilities

/**
 * @param  {string} filePath
 * @returns {FileMetadata}
 */
function getFileMetadata(filePath) {
	const pathParts = filePath.split("/");
	const inputPathname = pathParts.pop();
	const inputParentPathname = pathParts.pop();

	if (!inputParentPathname) throw new Error(`Couldn't get FOLDER from path: ${filePath}`);
	if (!inputPathname) throw new Error(`Couldn't get FILE from path: ${filePath}`);

	const componentParentPath = path.join(path_to_components, inputParentPathname);
	const componentFileName = pathnameToFilename(inputPathname) + ".svelte";
	const componentFilePath = path.join(componentParentPath, componentFileName);
	const componentName = filenameToComponentName(componentFileName);

	return {
		_input: filePath,
		_output: componentFilePath,
		_parent: componentParentPath,
		pathname: componentFileName,
		name: componentName,
	};
}

/**
 * @param  {string} pathname
 */
function pathnameToFilename(pathname) {
	const withoutExtension = pathname.split(".")[0];
	if (!withoutExtension) throw new Error(`Could not format name: ${name}`);
	return withoutExtension.toLowerCase().replace(/\s/g, "-");
}

/**
 * @param  {string} filename
 */
function filenameToComponentName(filename) {
	const name = filename.replace(/-/g, " ");
	return toTitleCase(name).replace(/\s/g, "");
}

/**
 * @param  {string} str
 */
function toTitleCase(str) {
	return str.replace(/\w\S*/g, (txt) => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
