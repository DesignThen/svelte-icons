#!/usr/bin/node

const fs = require('fs');
const path = require('path');
const util = require('./helper.cjs');

/**
 * @typedef {import('./types').Task} Task
 * @typedef {import('./types').Barrel} Barrel
 */

/**
 * @param  {string} pathname
 * @returns {string[]}
 */
function getSourceFolders(pathname) {
	/** @type {string[]} **/
	let folders = [];

	fs.readdirSync(pathname, { withFileTypes: true, encoding: 'utf-8' }).forEach((value) => {
		if (!value.isDirectory()) return;
		else folders.push(path.join(pathname, value.name));
	});

	return folders;
}

/**
 * @param  {string} pathname
 * @returns {string}
 */
function getParent(pathname) {
	const parts = pathname.split('/');
	parts.pop();
	return parts.join('/');
}

/**
 * @param  {string} pathname
 * @returns {string[]}
 */
function getSvgAssets(pathname) {
	/** @type {string[]} **/
	let assets = [];

	fs.readdirSync(pathname, { withFileTypes: true, encoding: 'utf-8' }).forEach((value) => {
		if (!value.isFile() || !value.name.endsWith('.svg')) return;
		else {
			assets.push(path.join(pathname, value.name));
		}
	});
	return assets;
}

/**
 * @param  {string} name
 * @param  {Task[]} tasks
 * @param  {boolean} isRoot
 * @returns {Task}
 */
function handleBarrelFile(name, tasks, isRoot = false) {
	const parent = tasks[0]?.pathname.split(name)[0] || '';
	const pathname = path.join(parent, name, 'index.ts');

	const content = tasks
		.map((t) => {
			if (isRoot) {
				let nameRef = t.pathname.replace('/index.ts', '');
				const componentName = util.toComponentName(nameRef, true);
				const componentPath = util.toRelativePath(nameRef);
				const line = `export * as ${componentName} from "${componentPath}"`;
				return line;
			} else {
				const componentName = util.toComponentName(t.pathname, false /* , name */);
				const componentPath = util.toRelativePath(t.pathname);
				const line = `export { default as ${componentName} } from "${componentPath}"`;
				return line;
			}
		})
		.join(';\n');

	if (!pathname) throw new Error(`Couldn't get pathname for barrel file: ${name}`);

	/** @type {Task} **/
	const task = {
		pathname,
		content,
	};

	return task;
}

module.exports = {
	getParent,
	getSourceFolders,
	getSvgAssets,
	handleBarrelFile,
};
