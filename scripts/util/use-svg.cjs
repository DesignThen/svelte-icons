const cheerio = require('cheerio');
/**
 * @param  {string} svg
 * @param  {"outline" | "solid" | "auto"} type
 */
function useSvg(svg, type) {
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
		.replace(`PROPS="PROPS"`, '{...$$$restProps}')
		.replace(`OUTLINE="OUTLINE"`, `stroke="currentColor"`)
		.replace(`SOLID="SOLID"`, `fill="currentColor"`);
	// .replace("<svg", '<script lang="ts"></script><svg');

	return htmlElement.replace('\t', '').replace('\n', '');
}

module.exports = useSvg;
