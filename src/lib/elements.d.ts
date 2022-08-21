/*
	These types have been taken from svelte2tsx
	https://github.com/sveltejs/language-tools/tree/master/packages/svelte2tsx
*/

// TODO: Figure out how to correctly include types from another package

type EventHandler<
	E extends Event = Event,
	T extends EventTarget = HTMLElement,
> = svelte.JSX.EventHandler<E, T>;

type ClipboardEventHandler<T extends EventTarget> = svelte.JSX.ClipboardEventHandler<T>;
type CompositionEventHandler<T extends EventTarget> = svelte.JSX.CompositionEventHandler<T>;
type DragEventHandler<T extends EventTarget> = svelte.JSX.DragEventHandler<T>;
type FocusEventHandler<T extends EventTarget> = svelte.JSX.FocusEventHandler<T>;
type FormEventHandler<T extends EventTarget> = svelte.JSX.FormEventHandler<T>;
type ChangeEventHandler<T extends EventTarget> = svelte.JSX.ChangeEventHandler<T>;
type KeyboardEventHandler<T extends EventTarget> = svelte.JSX.KeyboardEventHandler<T>;
type MouseEventHandler<T extends EventTarget> = svelte.JSX.MouseEventHandler<T>;
type TouchEventHandler<T extends EventTarget> = svelte.JSX.TouchEventHandler<T>;
type PointerEventHandler<T extends EventTarget> = svelte.JSX.PointerEventHandler<T>;
type UIEventHandler<T extends EventTarget> = svelte.JSX.UIEventHandler<T>;
type WheelEventHandler<T extends EventTarget> = svelte.JSX.WheelEventHandler<T>;
type AnimationEventHandler<T extends EventTarget> = svelte.JSX.AnimationEventHandler<T>;
type TransitionEventHandler<T extends EventTarget> = svelte.JSX.TransitionEventHandler<T>;
type MessageEventHandler<T extends EventTarget> = svelte.JSX.MessageEventHandler<T>;

interface DOMAttributes<T extends EventTarget> {
	// jsx-dom specific
	/* children?: Children;
	innerText?: string;
	namespaceURI?: string;
	ref?: ((e: T) => void) | Ref<T>; */

	// Clipboard Events
	oncopy?: ClipboardEventHandler<T> | undefined | null;
	oncut?: ClipboardEventHandler<T> | undefined | null;
	onpaste?: ClipboardEventHandler<T> | undefined | null;

	// Composition Events
	oncompositionend?: CompositionEventHandler<T> | undefined | null;
	oncompositionstart?: CompositionEventHandler<T> | undefined | null;
	oncompositionupdate?: CompositionEventHandler<T> | undefined | null;

	// Focus Events
	onfocus?: FocusEventHandler<T> | undefined | null;
	onfocusin?: FocusEventHandler<T> | undefined | null;
	onfocusout?: FocusEventHandler<T> | undefined | null;
	onblur?: FocusEventHandler<T> | undefined | null;

	// Form Events
	onchange?: FormEventHandler<T> | undefined | null;
	oninput?: FormEventHandler<T> | undefined | null;
	onreset?: FormEventHandler<T> | undefined | null;
	onsubmit?: EventHandler<SubmitEvent, T> | undefined | null;
	oninvalid?: EventHandler<Event, T> | undefined | null;
	onbeforeinput?: EventHandler<InputEvent, T> | undefined | null;

	// Image Events
	onload?: EventHandler | undefined | null;
	onerror?: EventHandler | undefined | null; // also a Media Event

	// Detail Events
	ontoggle?: EventHandler<Event, T> | undefined | null;

	// Keyboard Events
	onkeydown?: KeyboardEventHandler<T> | undefined | null;
	onkeypress?: KeyboardEventHandler<T> | undefined | null;
	onkeyup?: KeyboardEventHandler<T> | undefined | null;

	// Media Events
	onabort?: EventHandler<Event, T> | undefined | null;
	oncanplay?: EventHandler<Event, T> | undefined | null;
	oncanplaythrough?: EventHandler<Event, T> | undefined | null;
	oncuechange?: EventHandler<Event, T> | undefined | null;
	ondurationchange?: EventHandler<Event, T> | undefined | null;
	onemptied?: EventHandler<Event, T> | undefined | null;
	onencrypted?: EventHandler<Event, T> | undefined | null;
	onended?: EventHandler<Event, T> | undefined | null;
	onloadeddata?: EventHandler<Event, T> | undefined | null;
	onloadedmetadata?: EventHandler<Event, T> | undefined | null;
	onloadstart?: EventHandler<Event, T> | undefined | null;
	onpause?: EventHandler<Event, T> | undefined | null;
	onplay?: EventHandler<Event, T> | undefined | null;
	onplaying?: EventHandler<Event, T> | undefined | null;
	onprogress?: EventHandler<Event, T> | undefined | null;
	onratechange?: EventHandler<Event, T> | undefined | null;
	onseeked?: EventHandler<Event, T> | undefined | null;
	onseeking?: EventHandler<Event, T> | undefined | null;
	onstalled?: EventHandler<Event, T> | undefined | null;
	onsuspend?: EventHandler<Event, T> | undefined | null;
	ontimeupdate?: EventHandler<Event, T> | undefined | null;
	onvolumechange?: EventHandler<Event, T> | undefined | null;
	onwaiting?: EventHandler<Event, T> | undefined | null;

	// MouseEvents
	onauxclick?: MouseEventHandler<T> | undefined | null;
	onclick?: MouseEventHandler<T> | undefined | null;
	oncontextmenu?: MouseEventHandler<T> | undefined | null;
	ondblclick?: MouseEventHandler<T> | undefined | null;
	ondrag?: DragEventHandler<T> | undefined | null;
	ondragend?: DragEventHandler<T> | undefined | null;
	ondragenter?: DragEventHandler<T> | undefined | null;
	ondragexit?: DragEventHandler<T> | undefined | null;
	ondragleave?: DragEventHandler<T> | undefined | null;
	ondragover?: DragEventHandler<T> | undefined | null;
	ondragstart?: DragEventHandler<T> | undefined | null;
	ondrop?: DragEventHandler<T> | undefined | null;
	onmousedown?: MouseEventHandler<T> | undefined | null;
	onmouseenter?: MouseEventHandler<T> | undefined | null;
	onmouseleave?: MouseEventHandler<T> | undefined | null;
	onmousemove?: MouseEventHandler<T> | undefined | null;
	onmouseout?: MouseEventHandler<T> | undefined | null;
	onmouseover?: MouseEventHandler<T> | undefined | null;
	onmouseup?: MouseEventHandler<T> | undefined | null;

	// Selection Events
	onselect?: EventHandler<Event, T> | undefined | null;
	onselectionchange?: EventHandler<Event, T> | undefined | null;
	onselectstart?: EventHandler<Event, T> | undefined | null;

	// Touch Events
	ontouchcancel?: TouchEventHandler<T> | undefined | null;
	ontouchend?: TouchEventHandler<T> | undefined | null;
	ontouchmove?: TouchEventHandler<T> | undefined | null;
	ontouchstart?: TouchEventHandler<T> | undefined | null;

	// Pointer Events
	ongotpointercapture?: PointerEventHandler<T> | undefined | null;
	onpointercancel?: PointerEventHandler<T> | undefined | null;
	onpointerdown?: PointerEventHandler<T> | undefined | null;
	onpointerenter?: PointerEventHandler<T> | undefined | null;
	onpointerleave?: PointerEventHandler<T> | undefined | null;
	onpointermove?: PointerEventHandler<T> | undefined | null;
	onpointerout?: PointerEventHandler<T> | undefined | null;
	onpointerover?: PointerEventHandler<T> | undefined | null;
	onpointerup?: PointerEventHandler<T> | undefined | null;
	onlostpointercapture?: PointerEventHandler<T> | undefined | null;

	// UI Events
	onscroll?: UIEventHandler<T> | undefined | null;
	onresize?: UIEventHandler<T> | undefined | null;

	// Wheel Events
	onwheel?: WheelEventHandler<T> | undefined | null;

	// Animation Events
	onanimationstart?: AnimationEventHandler<T> | undefined | null;
	onanimationend?: AnimationEventHandler<T> | undefined | null;
	onanimationiteration?: AnimationEventHandler<T> | undefined | null;

	// Transition Events
	ontransitionstart?: TransitionEventHandler<T> | undefined | null;
	ontransitionrun?: TransitionEventHandler<T> | undefined | null;
	ontransitionend?: TransitionEventHandler<T> | undefined | null;
	ontransitioncancel?: TransitionEventHandler<T> | undefined | null;

	// Svelte Transition Events
	onoutrostart?: EventHandler<CustomEvent<null>, T> | undefined | null;
	onoutroend?: EventHandler<CustomEvent<null>, T> | undefined | null;
	onintrostart?: EventHandler<CustomEvent<null>, T> | undefined | null;
	onintroend?: EventHandler<CustomEvent<null>, T> | undefined | null;

	// Message Events
	onmessage?: MessageEventHandler<T> | undefined | null;
	onmessageerror?: MessageEventHandler<T> | undefined | null;

	// Global Events
	oncancel?: EventHandler<Event, T> | undefined | null;
	onclose?: EventHandler<Event, T> | undefined | null;
	onfullscreenchange?: EventHandler<Event, T> | undefined | null;
	onfullscreenerror?: EventHandler<Event, T> | undefined | null;
}

interface AriaAttributes {
	/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
	"aria-activedescendant"?: string | undefined | null;
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	"aria-atomic"?: boolean | "false" | "true" | undefined | null;
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
	 * presented if they are made.
	 */
	"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | null;
	/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
	"aria-busy"?: boolean | "false" | "true" | undefined | null;
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 * @see aria-pressed @see aria-selected.
	 */
	"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | null;
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 * @see aria-colindex.
	 */
	"aria-colcount"?: number | undefined | null;
	/**
	 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
	 * @see aria-colcount @see aria-colspan.
	 */
	"aria-colindex"?: number | undefined | null;
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-colindex @see aria-rowspan.
	 */
	"aria-colspan"?: number | undefined | null;
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
	 * @see aria-owns.
	 */
	"aria-controls"?: string | undefined | null;
	/** Indicates the element that represents the current item within a container or set of related elements. */
	"aria-current"?:
		| boolean
		| "false"
		| "true"
		| "page"
		| "step"
		| "location"
		| "date"
		| "time"
		| undefined
		| null;
	/**
	 * Identifies the element (or elements) that describes the object.
	 * @see aria-labelledby
	 */
	"aria-describedby"?: string | undefined | null;
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 * @see aria-describedby.
	 */
	"aria-details"?: string | undefined | null;
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
	 * @see aria-hidden @see aria-readonly.
	 */
	"aria-disabled"?: boolean | "false" | "true" | undefined | null;
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop target.
	 * @deprecated in ARIA 1.1
	 */
	"aria-dropeffect"?:
		| "none"
		| "copy"
		| "execute"
		| "link"
		| "move"
		| "popup"
		| undefined
		| null;
	/**
	 * Identifies the element that provides an error message for the object.
	 * @see aria-invalid @see aria-describedby.
	 */
	"aria-errormessage"?: string | undefined | null;
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	"aria-expanded"?: boolean | "false" | "true" | undefined | null;
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
	 * allows assistive technology to override the general default of reading in document source order.
	 */
	"aria-flowto"?: string | undefined | null;
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 * @deprecated in ARIA 1.1
	 */
	"aria-grabbed"?: boolean | "false" | "true" | undefined | null;
	/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
	"aria-haspopup"?:
		| boolean
		| "false"
		| "true"
		| "menu"
		| "listbox"
		| "tree"
		| "grid"
		| "dialog"
		| undefined
		| null;
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 * @see aria-disabled.
	 */
	"aria-hidden"?: boolean | "false" | "true" | undefined | null;
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 * @see aria-errormessage.
	 */
	"aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | null;
	/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
	"aria-keyshortcuts"?: string | undefined | null;
	/**
	 * Defines a string value that labels the current element.
	 * @see aria-labelledby.
	 */
	"aria-label"?: string | undefined | null;
	/**
	 * Identifies the element (or elements) that labels the current element.
	 * @see aria-describedby.
	 */
	"aria-labelledby"?: string | undefined | null;
	/** Defines the hierarchical level of an element within a structure. */
	"aria-level"?: number | undefined | null;
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	"aria-live"?: "off" | "assertive" | "polite" | undefined | null;
	/** Indicates whether an element is modal when displayed. */
	"aria-modal"?: boolean | "false" | "true" | undefined | null;
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	"aria-multiline"?: boolean | "false" | "true" | undefined | null;
	/** Indicates that the user may select more than one item from the current selectable descendants. */
	"aria-multiselectable"?: boolean | "false" | "true" | undefined | null;
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	"aria-orientation"?: "horizontal" | "vertical" | undefined | null;
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
	 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
	 * @see aria-controls.
	 */
	"aria-owns"?: string | undefined | null;
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
	 * A hint could be a sample value or a brief description of the expected format.
	 */
	"aria-placeholder"?: string | undefined | null;
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-setsize.
	 */
	"aria-posinset"?: number | undefined | null;
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 * @see aria-checked @see aria-selected.
	 */
	"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | null;
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 * @see aria-disabled.
	 */
	"aria-readonly"?: boolean | "false" | "true" | undefined | null;
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
	 * @see aria-atomic.
	 */
	"aria-relevant"?:
		| "additions"
		| "additions removals"
		| "additions text"
		| "all"
		| "removals"
		| "removals additions"
		| "removals text"
		| "text"
		| "text additions"
		| "text removals"
		| undefined
		| null;
	/** Indicates that user input is required on the element before a form may be submitted. */
	"aria-required"?: boolean | "false" | "true" | undefined | null;
	/** Defines a human-readable, author-localized description for the role of an element. */
	"aria-roledescription"?: string | undefined | null;
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 * @see aria-rowindex.
	 */
	"aria-rowcount"?: number | undefined | null;
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
	 * @see aria-rowcount @see aria-rowspan.
	 */
	"aria-rowindex"?: number | undefined | null;
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-rowindex @see aria-colspan.
	 */
	"aria-rowspan"?: number | undefined | null;
	/**
	 * Indicates the current "selected" state of various widgets.
	 * @see aria-checked @see aria-pressed.
	 */
	"aria-selected"?: boolean | "false" | "true" | undefined | null;
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-posinset.
	 */
	"aria-setsize"?: number | undefined | null;
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | null;
	/** Defines the maximum allowed value for a range widget. */
	"aria-valuemax"?: number | undefined | null;
	/** Defines the minimum allowed value for a range widget. */
	"aria-valuemin"?: number | undefined | null;
	/**
	 * Defines the current value for a range widget.
	 * @see aria-valuetext.
	 */
	"aria-valuenow"?: number | undefined | null;
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	"aria-valuetext"?: string | undefined | null;
}
interface SVGAttributes<T extends EventTarget> extends AriaAttributes, DOMAttributes<T> {
	// Attributes which also defined in HTMLAttributes
	className?: string | undefined | null;
	class?: string | undefined | null;
	color?: string | undefined | null;
	height?: number | string | undefined | null;
	id?: string | undefined | null;
	lang?: string | undefined | null;
	max?: number | string | undefined | null;
	media?: string | undefined | null;
	method?: string | undefined | null;
	min?: number | string | undefined | null;
	name?: string | undefined | null;
	style?: string | undefined | null;
	target?: string | undefined | null;
	type?: string | undefined | null;
	width?: number | string | undefined | null;

	// Other HTML properties supported by SVG elements in browsers
	role?: string | undefined | null;
	tabindex?: number | undefined | null;
	crossorigin?: "anonymous" | "use-credentials" | "" | undefined | null;

	// SVG Specific attributes
	"accent-height"?: number | string | undefined | null;
	accumulate?: "none" | "sum" | undefined | null;
	additive?: "replace" | "sum" | undefined | null;
	"alignment-baseline"?:
		| "auto"
		| "baseline"
		| "before-edge"
		| "text-before-edge"
		| "middle"
		| "central"
		| "after-edge"
		| "text-after-edge"
		| "ideographic"
		| "alphabetic"
		| "hanging"
		| "mathematical"
		| "inherit"
		| undefined
		| null;
	allowReorder?: "no" | "yes" | undefined | null;
	alphabetic?: number | string | undefined | null;
	amplitude?: number | string | undefined | null;
	"arabic-form"?: "initial" | "medial" | "terminal" | "isolated" | undefined | null;
	ascent?: number | string | undefined | null;
	attributeName?: string | undefined | null;
	attributeType?: string | undefined | null;
	autoReverse?: number | string | undefined | null;
	azimuth?: number | string | undefined | null;
	baseFrequency?: number | string | undefined | null;
	"baseline-shift"?: number | string | undefined | null;
	baseProfile?: number | string | undefined | null;
	bbox?: number | string | undefined | null;
	begin?: number | string | undefined | null;
	bias?: number | string | undefined | null;
	by?: number | string | undefined | null;
	calcMode?: number | string | undefined | null;
	"cap-height"?: number | string | undefined | null;
	clip?: number | string | undefined | null;
	"clip-path"?: string | undefined | null;
	clipPathUnits?: number | string | undefined | null;
	"clip-rule"?: number | string | undefined | null;
	"color-interpolation"?: number | string | undefined | null;
	"color-interpolation-filters"?:
		| "auto"
		| "sRGB"
		| "linearRGB"
		| "inherit"
		| undefined
		| null;
	"color-profile"?: number | string | undefined | null;
	"color-rendering"?: number | string | undefined | null;
	contentScriptType?: number | string | undefined | null;
	contentStyleType?: number | string | undefined | null;
	cursor?: number | string | undefined | null;
	cx?: number | string | undefined | null;
	cy?: number | string | undefined | null;
	d?: string | undefined | null;
	decelerate?: number | string | undefined | null;
	descent?: number | string | undefined | null;
	diffuseConstant?: number | string | undefined | null;
	direction?: number | string | undefined | null;
	display?: number | string | undefined | null;
	divisor?: number | string | undefined | null;
	"dominant-baseline"?: number | string | undefined | null;
	dur?: number | string | undefined | null;
	dx?: number | string | undefined | null;
	dy?: number | string | undefined | null;
	edgeMode?: number | string | undefined | null;
	elevation?: number | string | undefined | null;
	"enable-background"?: number | string | undefined | null;
	end?: number | string | undefined | null;
	exponent?: number | string | undefined | null;
	externalResourcesRequired?: number | string | undefined | null;
	fill?: string | undefined | null;
	"fill-opacity"?: number | string | undefined | null;
	"fill-rule"?: "nonzero" | "evenodd" | "inherit" | undefined | null;
	filter?: string | undefined | null;
	filterRes?: number | string | undefined | null;
	filterUnits?: number | string | undefined | null;
	"flood-color"?: number | string | undefined | null;
	"flood-opacity"?: number | string | undefined | null;
	focusable?: number | string | undefined | null;
	"font-family"?: string | undefined | null;
	"font-size"?: number | string | undefined | null;
	"font-size-adjust"?: number | string | undefined | null;
	"font-stretch"?: number | string | undefined | null;
	"font-style"?: number | string | undefined | null;
	"font-variant"?: number | string | undefined | null;
	"font-weight"?: number | string | undefined | null;
	format?: number | string | undefined | null;
	from?: number | string | undefined | null;
	fx?: number | string | undefined | null;
	fy?: number | string | undefined | null;
	g1?: number | string | undefined | null;
	g2?: number | string | undefined | null;
	"glyph-name"?: number | string | undefined | null;
	"glyph-orientation-horizontal"?: number | string | undefined | null;
	"glyph-orientation-vertical"?: number | string | undefined | null;
	glyphRef?: number | string | undefined | null;
	gradientTransform?: string | undefined | null;
	gradientUnits?: string | undefined | null;
	hanging?: number | string | undefined | null;
	href?: string | undefined | null;
	"horiz-adv-x"?: number | string | undefined | null;
	"horiz-origin-x"?: number | string | undefined | null;
	ideographic?: number | string | undefined | null;
	"image-rendering"?: number | string | undefined | null;
	in2?: number | string | undefined | null;
	in?: string | undefined | null;
	intercept?: number | string | undefined | null;
	k1?: number | string | undefined | null;
	k2?: number | string | undefined | null;
	k3?: number | string | undefined | null;
	k4?: number | string | undefined | null;
	k?: number | string | undefined | null;
	kernelMatrix?: number | string | undefined | null;
	kernelUnitLength?: number | string | undefined | null;
	kerning?: number | string | undefined | null;
	keyPoints?: number | string | undefined | null;
	keySplines?: number | string | undefined | null;
	keyTimes?: number | string | undefined | null;
	lengthAdjust?: number | string | undefined | null;
	"letter-spacing"?: number | string | undefined | null;
	"lighting-color"?: number | string | undefined | null;
	limitingConeAngle?: number | string | undefined | null;
	local?: number | string | undefined | null;
	"marker-end"?: string | undefined | null;
	markerHeight?: number | string | undefined | null;
	"marker-mid"?: string | undefined | null;
	"marker-start"?: string | undefined | null;
	markerUnits?: number | string | undefined | null;
	markerWidth?: number | string | undefined | null;
	mask?: string | undefined | null;
	maskContentUnits?: number | string | undefined | null;
	maskUnits?: number | string | undefined | null;
	mathematical?: number | string | undefined | null;
	mode?: number | string | undefined | null;
	numOctaves?: number | string | undefined | null;
	offset?: number | string | undefined | null;
	opacity?: number | string | undefined | null;
	operator?: number | string | undefined | null;
	order?: number | string | undefined | null;
	orient?: number | string | undefined | null;
	orientation?: number | string | undefined | null;
	origin?: number | string | undefined | null;
	overflow?: number | string | undefined | null;
	"overline-position"?: number | string | undefined | null;
	"overline-thickness"?: number | string | undefined | null;
	"paint-order"?: number | string | undefined | null;
	"panose-1"?: number | string | undefined | null;
	path?: string | undefined | null;
	pathLength?: number | string | undefined | null;
	patternContentUnits?: string | undefined | null;
	patternTransform?: number | string | undefined | null;
	patternUnits?: string | undefined | null;
	"pointer-events"?: number | string | undefined | null;
	points?: string | undefined | null;
	pointsAtX?: number | string | undefined | null;
	pointsAtY?: number | string | undefined | null;
	pointsAtZ?: number | string | undefined | null;
	preserveAlpha?: number | string | undefined | null;
	preserveAspectRatio?: string | undefined | null;
	primitiveUnits?: number | string | undefined | null;
	r?: number | string | undefined | null;
	radius?: number | string | undefined | null;
	refX?: number | string | undefined | null;
	refY?: number | string | undefined | null;
	"rendering-intent"?: number | string | undefined | null;
	repeatCount?: number | string | undefined | null;
	repeatDur?: number | string | undefined | null;
	requiredExtensions?: number | string | undefined | null;
	requiredFeatures?: number | string | undefined | null;
	restart?: number | string | undefined | null;
	result?: string | undefined | null;
	rotate?: number | string | undefined | null;
	rx?: number | string | undefined | null;
	ry?: number | string | undefined | null;
	scale?: number | string | undefined | null;
	seed?: number | string | undefined | null;
	"shape-rendering"?: number | string | undefined | null;
	slope?: number | string | undefined | null;
	spacing?: number | string | undefined | null;
	specularConstant?: number | string | undefined | null;
	specularExponent?: number | string | undefined | null;
	speed?: number | string | undefined | null;
	spreadMethod?: string | undefined | null;
	startOffset?: number | string | undefined | null;
	stdDeviation?: number | string | undefined | null;
	stemh?: number | string | undefined | null;
	stemv?: number | string | undefined | null;
	stitchTiles?: number | string | undefined | null;
	"stop-color"?: string | undefined | null;
	"stop-opacity"?: number | string | undefined | null;
	"strikethrough-position"?: number | string | undefined | null;
	"strikethrough-thickness"?: number | string | undefined | null;
	string?: number | string | undefined | null;
	stroke?: string | undefined | null;
	"stroke-dasharray"?: string | number | undefined | null;
	"stroke-dashoffset"?: string | number | undefined | null;
	"stroke-linecap"?: "butt" | "round" | "square" | "inherit" | undefined | null;
	"stroke-linejoin"?: "miter" | "round" | "bevel" | "inherit" | undefined | null;
	"stroke-miterlimit"?: string | undefined | null;
	"stroke-opacity"?: number | string | undefined | null;
	"stroke-width"?: number | string | undefined | null;
	surfaceScale?: number | string | undefined | null;
	systemLanguage?: number | string | undefined | null;
	tableValues?: number | string | undefined | null;
	targetX?: number | string | undefined | null;
	targetY?: number | string | undefined | null;
	"text-anchor"?: string | undefined | null;
	"text-decoration"?: number | string | undefined | null;
	textLength?: number | string | undefined | null;
	"text-rendering"?: number | string | undefined | null;
	to?: number | string | undefined | null;
	transform?: string | undefined | null;
	u1?: number | string | undefined | null;
	u2?: number | string | undefined | null;
	"underline-position"?: number | string | undefined | null;
	"underline-thickness"?: number | string | undefined | null;
	unicode?: number | string | undefined | null;
	"unicode-bidi"?: number | string | undefined | null;
	"unicode-range"?: number | string | undefined | null;
	"units-per-em"?: number | string | undefined | null;
	"v-alphabetic"?: number | string | undefined | null;
	values?: string | undefined | null;
	"vector-effect"?: number | string | undefined | null;
	version?: string | undefined | null;
	"vert-adv-y"?: number | string | undefined | null;
	"vert-origin-x"?: number | string | undefined | null;
	"vert-origin-y"?: number | string | undefined | null;
	"v-hanging"?: number | string | undefined | null;
	"v-ideographic"?: number | string | undefined | null;
	viewBox?: string | undefined | null;
	viewTarget?: number | string | undefined | null;
	visibility?: number | string | undefined | null;
	"v-mathematical"?: number | string | undefined | null;
	widths?: number | string | undefined | null;
	"word-spacing"?: number | string | undefined | null;
	"writing-mode"?: number | string | undefined | null;
	x1?: number | string | undefined | null;
	x2?: number | string | undefined | null;
	x?: number | string | undefined | null;
	xChannelSelector?: string | undefined | null;
	"x-height"?: number | string | undefined | null;
	xlinkActuate?: string | undefined | null;
	xlinkArcrole?: string | undefined | null;
	xlinkHref?: string | undefined | null;
	xlinkRole?: string | undefined | null;
	xlinkShow?: string | undefined | null;
	xlinkTitle?: string | undefined | null;
	xlinkType?: string | undefined | null;
	xmlBase?: string | undefined | null;
	xmlLang?: string | undefined | null;
	xmlns?: string | undefined | null;
	xmlnsXlink?: string | undefined | null;
	xmlSpace?: string | undefined | null;
	y1?: number | string | undefined | null;
	y2?: number | string | undefined | null;
	y?: number | string | undefined | null;
	yChannelSelector?: string | undefined | null;
	z?: number | string | undefined | null;
	zoomAndPan?: string | undefined | null;
}

declare interface SVGProps<T extends EventTarget> extends SVGAttributes<T> {}
