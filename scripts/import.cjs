#!/usr/bin/node

const fs = require("fs");
const path = require("path");
const util = require("./util/helper.cjs");
const files = require("./util/files.cjs");
const useSvg = require("./util/use-svg.cjs");

/**
 * @typedef {import('./util/types').FileMetadata} FileMetadata
 * @typedef {import('./util/types').Task} Task
 * @typedef {import('./util/types').Barrel} Barrel
 */

const path_to_import = path.resolve(__dirname, "../import");
const path_to_components = path.resolve(__dirname, "../src/lib");

/** @type {string[]} **/
let folders = files.getSourceFolders(path_to_import);

/** @type {Task[]} **/
let tasks = [];

/** @type {Barrel} **/
let barrel = {};

/** @type {Task[]} **/
let root = [];

console.log("🚧 Importing from: ", folders);

console.log(`🚧 building task list...`);

/**
 * @param  {string} filepath
 */
function handleIconType(filepath) {
	if (filepath.includes("/simple-icons/")) return "solid";
	// if (filepath.includes("/solid/")) return "solid";
	//else if (filepath.includes("/outline/")) return "outline";
	else return "auto";
}

// 1. Handle tasks for SVG files
folders.forEach((pathname) => {
	const assets = files.getSvgAssets(pathname);

	assets.forEach((filepath) => {
		const metadata = getFileMetadata(filepath);
		const contentSvg = fs.readFileSync(metadata._input, { encoding: "utf-8" });
		const contentSvelte = useSvg(contentSvg, handleIconType(filepath));

		/** @type {Task} **/
		const task = {
			pathname: metadata._output,
			content: contentSvelte,
		};
		tasks.push(task);

		const asset_parent_folder = metadata._parent.split("/").pop() || "";
		const prev = barrel[asset_parent_folder];
		if (prev) {
			barrel[asset_parent_folder] = [...prev, task];
		} else {
			barrel[asset_parent_folder] = [task];
		}
	});
});

// 2. Handle tasks for barrel files

Object.keys(barrel).forEach((key) => {
	const value = barrel[key] || [];
	const task = files.handleBarrelFile(key, value);

	tasks.push(task);
	root.push(task);
});

// const rootBarelFile = files.handleBarrelFile("lib", root, true);
// tasks.push(rootBarelFile);

// 3. Run all tasks

const to_do = tasks.length;
console.log(`🚧 ${to_do} tasks to complete...`);

tasks.forEach(({ content, pathname }, ix) => {
	const parent = files.getParent(pathname);
	try {
		fs.mkdirSync(parent, { recursive: true });
		fs.writeFileSync(pathname, content, { encoding: "utf-8", flag: "w" });
	} catch (err) {
		console.error(`⛔️ Failed on [${ix + 1}/${to_do}]`);
		console.log("⛔️  parent: ", parent);
		console.log("⛔️  pathname: ", pathname);
		throw err;
	}
});

console.log(`✅ ${to_do} tasks finished!`);

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
	const componentFileName = util.toFilename(inputPathname, "svelte");
	const componentFilePath = path.join(componentParentPath, componentFileName);

	return {
		_input: filePath,
		_output: componentFilePath,
		_parent: componentParentPath,
	};
}
