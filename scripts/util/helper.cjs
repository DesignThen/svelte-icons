const path = require('path');
const cheerio = require('cheerio');

/**
 * @param  {string} word
 */
function capitalize(word) {
	const letters = word.split('');
	const capital = letters.shift();
	const rest = letters.join('');

	if (!capital) throw new Error(`Could not capitalize: ${word}`);

	return capital.toUpperCase() + rest.toLowerCase();
}

/**
 * @param  {string} pathname
 * @param  {string} [extension]
 * @param  {string} [prefix]
 */
function to_filename(pathname, extension, prefix) {
	const withoutPath = pathname.split('/').pop();
	const withoutExtension = withoutPath?.split('.').shift();
	const asFilename = withoutExtension?.toLowerCase().replace(/\s/g, '-');
	const pre = prefix ? `${prefix}-` : '';

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
function to_title_case(value) {
	const filename = to_filename(value);
	const withoutDashes = filename.replace(/-/g, ' ');
	const asTitleCase = withoutDashes.replace(/\w\S*/g, capitalize);
	return asTitleCase;
}
/**
 * @param  {string} value
 */
function resolve_icon_type(value) {
	const [_, path] = value.split('lib/');
	if (!path) throw new Error(`Could not format component name: ${value}`);

	const [icon_type] = path.split('/');

	if (icon_type?.startsWith('heroicon')) {
		const [_, size, type] = icon_type.split('-');
		if (!type || !size) {
			throw new Error(`Could not format heroicon component name: ${value}`);
		}

		return { prefix: `Hi` + capitalize(size), suffix: capitalize(type) };
	} else if (icon_type?.startsWith('simple-icons')) {
		return { prefix: 'Si', suffix: '' };
	} else throw new Error(`icon_type: ${icon_type} not supported in resolveIconType`);
}

/**
 * @param  {string} value
 */
function fix_number_name(value) {
	const first_char = value[0] + '';

	if (isNaN(Number(first_char))) return value;
	else {
		return `I` + value;
	}
}

/**
 * @param  {string} value
 * @param  {boolean} as_root
 */
function to_component_name(value, as_root) {
	const icon_type = as_root ? resolve_icon_type(value) : { prefix: '', suffix: '' };

	const prefix = ` ${icon_type.prefix} `;
	const suffix = ` ${icon_type.suffix} `;

	const name = prefix + to_title_case(value).split('.').shift() + suffix;
	const withoutSpaces = name?.replace(/\s/g, '');
	if (!withoutSpaces) throw new Error(`Could not format component name: ${value}`);
	return fix_number_name(withoutSpaces);
}
/**
 * @param  {string} pathname
 */
function to_relative_path(pathname) {
	const srcPath = pathname.split('src/lib/').pop();
	if (!srcPath) throw new Error(`Could not handle relative path: ${path}`);
	const relativePath = path.join(`$lib`, srcPath);
	return relativePath;
}

/**
 * @param  {string} svg
 * @param  {"outline" | "solid" | "auto"} type
 */
function format_svg(svg, type) {
	const $ = cheerio.load(svg, { xmlMode: true });

	const html = $.parseHTML(svg);
	let element = html[0]?.cloneNode(true);

	if (!element || element.type != 'tag' || element.nodeType != 1 || element.tagName != 'svg') {
		throw new Error(`This ${element?.type} is not an SVG: ${svg}`);
	}

	const el = $(element);

	el.removeAttr('class');
	el.removeAttr('role');
	el.removeAttr('aria-hidden');
	el.removeAttr('style');
	type !== 'auto' && el.removeAttr('fill');

	el.attr('style', 'display: inline-block;');
	el.attr('aria-hidden', 'true');
	el.attr('role', 'img');

	el.attr('PROPS', 'PROPS');
	type === 'outline' && el.attr('OUTLINE', 'OUTLINE');
	type === 'solid' && el.attr('SOLID', 'SOLID');

	const htmlElement = el
		.toString()
		.replace(/#([0-9a-f]{6})/gi, 'currentColor')
		.replace(`PROPS="PROPS"`, '{...restProps}')
		.replace(`OUTLINE="OUTLINE"`, `stroke="currentColor"`)
		.replace(`SOLID="SOLID"`, `fill="currentColor"`);
	// .replace("<svg", '<script lang="ts"></script><svg');

	const component_content = htmlElement.replace('\t', '').replace('\n', '');
	const component_init = `<script lang="ts">const { ...restProps } = $props<{ [x: string]: unknown }>();</script>`;

	return component_init + '\n' + component_content;
}

module.exports = {
	format_svg,
	to_component_name,
	to_filename,
	to_relative_path,
};
