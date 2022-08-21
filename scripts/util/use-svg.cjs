const cheerio = require("cheerio");
/**
 * @param  {string} svg
 */
function useSvg(svg) {
	const $ = cheerio.load(svg, { xmlMode: true });

	const html = $.parseHTML(svg);
	let element = html[0]?.cloneNode(true);

	if (
		!element ||
		element.type != "tag" ||
		element.nodeType != 1 ||
		element.tagName != "svg"
	) {
		throw new Error(`This ${element?.type} is not an SVG: ${svg}`);
	}

	const el = $(element);

	el.removeAttr("class");
	el.removeAttr("role");
	el.removeAttr("aria-hidden");
	el.removeAttr("style");

	el.attr("style", "width: auto; display: inline-block;");
	el.attr("aria-hidden", "true");
	el.attr("role", "img");

	const htmlElement = el.toString().replace(/#([0-9a-f]{6})/gi, "currentColor");

	return htmlElement;
}

module.exports = useSvg;
