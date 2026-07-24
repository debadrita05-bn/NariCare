import { o as __toESM } from "./rolldown-runtime-CE-6LUnI.mjs";
import { n as require_react, t as require_jsx_runtime } from "./jsx-runtime-C9wDpzQ-.mjs";
import { t as Link } from "./link-BUYuhDlp.mjs";
import { r as levelOf, t as CATEGORIES } from "./scoring-CpLvIBOI.mjs";
import { C as prefersReducedMotion, D as supportsViewTimeline, E as supportsScrollTimeline, O as useConstant, S as noop, T as resize, _ as isHTMLElement, a as cancelFrame, b as motion, c as collectMotionValues, d as frame, f as frameData, g as invariant, h as interpolate, j as velocityPerSecond, k as useIsomorphicLayoutEffect, l as createLucideIcon, m as initPrefersReducedMotion, o as cancelMicrotask, p as hasReducedMotionListener, r as MotionConfigContext, s as clamp, t as JSAnimation, u as defaultOffset$1, v as isMotionValue, w as progress, x as motionValue, y as microtask } from "./createLucideIcon-DHTKS07v.mjs";
import { t as Sparkles } from "./sparkles-DILMdVbP.mjs";
import { t as useAssessment } from "./useAssessment-Ch_uBqv-.mjs";
import { t as useTracker } from "./useTracker-DPBNh0SV.mjs";
import { a as TodayForYouSkeleton } from "./page-skeleton-CGquuatn.mjs";
import { t as ArrowRight } from "./arrow-right-DjwPKPHk.mjs";
import { t as MessageCircle } from "./message-circle-BhkYRiiN.mjs";
import { t as flower_default } from "./flower-B06oMxf0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B_WxUFkk.js
function observeTimeline(update, timeline) {
	let prevProgress;
	const onFrame = () => {
		const { currentTime } = timeline;
		const progress = (currentTime === null ? 0 : currentTime.value) / 100;
		if (prevProgress !== progress) update(progress);
		prevProgress = progress;
	};
	frame.preUpdate(onFrame, true);
	return () => cancelFrame(onFrame);
}
function transform(...args) {
	const useImmediate = !Array.isArray(args[0]);
	const argOffset = useImmediate ? 0 : -1;
	const inputValue = args[0 + argOffset];
	const inputRange = args[1 + argOffset];
	const outputRange = args[2 + argOffset];
	const options = args[3 + argOffset];
	const interpolator = interpolate(inputRange, outputRange, options);
	return useImmediate ? interpolator(inputValue) : interpolator;
}
/**
* Attach an animation to a MotionValue that will animate whenever the value changes.
* Similar to attachSpring but supports any transition type (spring, tween, inertia, etc.)
*
* @param value - The MotionValue to animate
* @param source - Initial value or MotionValue to track
* @param options - Animation transition options
* @returns Cleanup function
*
* @public
*/
function attachFollow(value, source, options = {}) {
	const initialValue = value.get();
	let activeAnimation = null;
	let latestValue = initialValue;
	let latestSetter;
	const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : void 0;
	const stopAnimation = () => {
		if (activeAnimation) {
			activeAnimation.stop();
			activeAnimation = null;
		}
		value.animation = void 0;
	};
	const startAnimation = () => {
		const currentValue = asNumber(value.get());
		const targetValue = asNumber(latestValue);
		if (currentValue === targetValue) {
			stopAnimation();
			return;
		}
		const velocity = activeAnimation ? activeAnimation.getGeneratorVelocity() : value.getVelocity();
		stopAnimation();
		activeAnimation = new JSAnimation({
			keyframes: [currentValue, targetValue],
			velocity,
			type: "spring",
			restDelta: .001,
			restSpeed: .01,
			...options,
			onUpdate: latestSetter
		});
	};
	const scheduleAnimation = () => {
		startAnimation();
		value.animation = activeAnimation ?? void 0;
		value["events"].animationStart?.notify();
		activeAnimation?.then(() => {
			value.animation = void 0;
			value["events"].animationComplete?.notify();
		});
	};
	value.attach((v, set) => {
		latestValue = v;
		latestSetter = (latest) => set(parseValue(latest, unit));
		frame.postRender(scheduleAnimation);
	}, stopAnimation);
	if (isMotionValue(source)) {
		let skipNextAnimation = options.skipInitialAnimation === true;
		const removeSourceOnChange = source.on("change", (v) => {
			if (skipNextAnimation) {
				skipNextAnimation = false;
				value.jump(parseValue(v, unit), false);
			} else value.set(parseValue(v, unit));
		});
		const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
		return () => {
			removeSourceOnChange();
			removeValueOnDestroy();
		};
	}
	return stopAnimation;
}
function parseValue(v, unit) {
	return unit ? v + unit : v;
}
function asNumber(v) {
	return typeof v === "number" ? v : parseFloat(v);
}
function canUseNativeTimeline(target) {
	if (typeof window === "undefined") return false;
	return target ? supportsViewTimeline() : supportsScrollTimeline();
}
/**
* A time in milliseconds, beyond which we consider the scroll velocity to be 0.
*/
var maxElapsed = 50;
var createAxisInfo = () => ({
	current: 0,
	offset: [],
	progress: 0,
	scrollLength: 0,
	targetOffset: 0,
	targetLength: 0,
	containerLength: 0,
	velocity: 0
});
var createScrollInfo = () => ({
	time: 0,
	x: createAxisInfo(),
	y: createAxisInfo()
});
var keys = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
};
function updateAxisInfo(element, axisName, info, time) {
	const axis = info[axisName];
	const { length, position } = keys[axisName];
	const prev = axis.current;
	const prevTime = info.time;
	axis.current = Math.abs(element[`scroll${position}`]);
	axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
	axis.offset.length = 0;
	axis.offset[0] = 0;
	axis.offset[1] = axis.scrollLength;
	axis.progress = progress(0, axis.scrollLength, axis.current);
	const elapsed = time - prevTime;
	axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
	updateAxisInfo(element, "x", info, time);
	updateAxisInfo(element, "y", info, time);
	info.time = time;
}
function calcInset(element, container) {
	const inset = {
		x: 0,
		y: 0
	};
	let current = element;
	while (current && current !== container) if (isHTMLElement(current)) {
		inset.x += current.offsetLeft;
		inset.y += current.offsetTop;
		current = current.offsetParent;
	} else if (current.tagName === "svg") {
		/**
		* This isn't an ideal approach to measuring the offset of <svg /> tags.
		* It would be preferable, given they behave like HTMLElements in most ways
		* to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
		* can't use .getBBox() like most SVG elements as these provide the offset
		* relative to the SVG itself, which for <svg /> is usually 0x0.
		*/
		const svgBoundingBox = current.getBoundingClientRect();
		current = current.parentElement;
		const parentBoundingBox = current.getBoundingClientRect();
		inset.x += svgBoundingBox.left - parentBoundingBox.left;
		inset.y += svgBoundingBox.top - parentBoundingBox.top;
	} else if (current instanceof SVGGraphicsElement) {
		const { x, y } = current.getBBox();
		inset.x += x;
		inset.y += y;
		let svg = null;
		let parent = current.parentNode;
		while (!svg) {
			if (parent.tagName === "svg") svg = parent;
			parent = current.parentNode;
		}
		current = svg;
	} else break;
	return inset;
}
var namedEdges = {
	start: 0,
	center: .5,
	end: 1
};
function resolveEdge(edge, length, inset = 0) {
	let delta = 0;
	/**
	* If we have this edge defined as a preset, replace the definition
	* with the numerical value.
	*/
	if (edge in namedEdges) edge = namedEdges[edge];
	/**
	* Handle unit values
	*/
	if (typeof edge === "string") {
		const asNumber = parseFloat(edge);
		if (edge.endsWith("px")) delta = asNumber;
		else if (edge.endsWith("%")) edge = asNumber / 100;
		else if (edge.endsWith("vw")) delta = asNumber / 100 * document.documentElement.clientWidth;
		else if (edge.endsWith("vh")) delta = asNumber / 100 * document.documentElement.clientHeight;
		else edge = asNumber;
	}
	/**
	* If the edge is defined as a number, handle as a progress value.
	*/
	if (typeof edge === "number") delta = length * edge;
	return inset + delta;
}
var defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
	let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
	let targetPoint = 0;
	let containerPoint = 0;
	if (typeof offset === "number")
 /**
	* If we're provided offset: [0, 0.5, 1] then each number x should become
	* [x, x], so we default to the behaviour of mapping 0 => 0 of both target
	* and container etc.
	*/
	offsetDefinition = [offset, offset];
	else if (typeof offset === "string") {
		offset = offset.trim();
		if (offset.includes(" ")) offsetDefinition = offset.split(" ");
		else
 /**
		* If we're provided a definition like "100px" then we want to apply
		* that only to the top of the target point, leaving the container at 0.
		* Whereas a named offset like "end" should be applied to both.
		*/
		offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
	}
	targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
	containerPoint = resolveEdge(offsetDefinition[1], containerLength);
	return targetPoint - containerPoint;
}
var ScrollOffset = {
	Enter: [[0, 1], [1, 1]],
	Exit: [[0, 0], [1, 0]],
	Any: [[1, 0], [0, 1]],
	All: [[0, 0], [1, 1]]
};
var point = {
	x: 0,
	y: 0
};
function getTargetSize(target) {
	return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
		width: target.clientWidth,
		height: target.clientHeight
	};
}
function resolveOffsets(container, info, options) {
	const { offset: offsetDefinition = ScrollOffset.All } = options;
	const { target = container, axis = "y" } = options;
	const lengthLabel = axis === "y" ? "height" : "width";
	const inset = target !== container ? calcInset(target, container) : point;
	/**
	* Measure the target and container. If they're the same thing then we
	* use the container's scrollWidth/Height as the target, from there
	* all other calculations can remain the same.
	*/
	const targetSize = target === container ? {
		width: container.scrollWidth,
		height: container.scrollHeight
	} : getTargetSize(target);
	const containerSize = {
		width: container.clientWidth,
		height: container.clientHeight
	};
	/**
	* Reset the length of the resolved offset array rather than creating a new one.
	* TODO: More reusable data structures for targetSize/containerSize would also be good.
	*/
	info[axis].offset.length = 0;
	/**
	* Populate the offset array by resolving the user's offset definition into
	* a list of pixel scroll offets.
	*/
	let hasChanged = !info[axis].interpolate;
	const numOffsets = offsetDefinition.length;
	for (let i = 0; i < numOffsets; i++) {
		const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
		if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) hasChanged = true;
		info[axis].offset[i] = offset;
	}
	/**
	* If the pixel scroll offsets have changed, create a new interpolator function
	* to map scroll value into a progress.
	*/
	if (hasChanged) {
		info[axis].interpolate = interpolate(info[axis].offset, defaultOffset$1(offsetDefinition), { clamp: false });
		info[axis].interpolatorOffsets = [...info[axis].offset];
	}
	info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}
function measure(container, target = container, info) {
	/**
	* Find inset of target within scrollable container
	*/
	info.x.targetOffset = 0;
	info.y.targetOffset = 0;
	if (target !== container) {
		let node = target;
		while (node && node !== container) {
			info.x.targetOffset += node.offsetLeft;
			info.y.targetOffset += node.offsetTop;
			node = node.offsetParent;
		}
	}
	info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
	info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
	info.x.containerLength = container.clientWidth;
	info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
	return {
		measure: (time) => {
			measure(element, options.target, info);
			updateScrollInfo(element, info, time);
			if (options.offset || options.target) resolveOffsets(element, info, options);
		},
		notify: () => onScroll(info)
	};
}
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var scrollSize = /* @__PURE__ */ new WeakMap();
var dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
var getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
	if (!container) return noop;
	let containerHandlers = onScrollHandlers.get(container);
	/**
	* Get the onScroll handlers for this container.
	* If one isn't found, create a new one.
	*/
	if (!containerHandlers) {
		containerHandlers = /* @__PURE__ */ new Set();
		onScrollHandlers.set(container, containerHandlers);
	}
	const containerHandler = createOnScrollHandler(container, onScroll, createScrollInfo(), options);
	containerHandlers.add(containerHandler);
	/**
	* Check if there's a scroll event listener for this container.
	* If not, create one.
	*/
	if (!scrollListeners.has(container)) {
		const measureAll = () => {
			for (const handler of containerHandlers) handler.measure(frameData.timestamp);
			frame.preUpdate(notifyAll);
		};
		const notifyAll = () => {
			for (const handler of containerHandlers) handler.notify();
		};
		const listener = () => frame.read(measureAll);
		scrollListeners.set(container, listener);
		const target = getEventTarget(container);
		window.addEventListener("resize", listener);
		if (container !== document.documentElement) resizeListeners.set(container, resize(container, listener));
		target.addEventListener("scroll", listener);
		listener();
	}
	/**
	* Enable content size tracking if requested and not already enabled.
	*/
	if (trackContentSize && !dimensionCheckProcesses.has(container)) {
		const listener = scrollListeners.get(container);
		const size = {
			width: container.scrollWidth,
			height: container.scrollHeight
		};
		scrollSize.set(container, size);
		const checkScrollDimensions = () => {
			const newWidth = container.scrollWidth;
			const newHeight = container.scrollHeight;
			if (size.width !== newWidth || size.height !== newHeight) {
				listener();
				size.width = newWidth;
				size.height = newHeight;
			}
		};
		const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
		dimensionCheckProcesses.set(container, dimensionCheckProcess);
	}
	const listener = scrollListeners.get(container);
	frame.read(listener, false, true);
	return () => {
		cancelFrame(listener);
		/**
		* Check if we even have any handlers for this container.
		*/
		const currentHandlers = onScrollHandlers.get(container);
		if (!currentHandlers) return;
		currentHandlers.delete(containerHandler);
		if (currentHandlers.size) return;
		/**
		* If no more handlers, remove the scroll listener too.
		*/
		const scrollListener = scrollListeners.get(container);
		scrollListeners.delete(container);
		if (scrollListener) {
			getEventTarget(container).removeEventListener("scroll", scrollListener);
			resizeListeners.get(container)?.();
			window.removeEventListener("resize", scrollListener);
		}
		const dimensionCheckProcess = dimensionCheckProcesses.get(container);
		if (dimensionCheckProcess) {
			cancelFrame(dimensionCheckProcess);
			dimensionCheckProcesses.delete(container);
		}
		scrollSize.delete(container);
	};
}
/**
* Maps from ProgressIntersection pairs used by Motion's preset offsets to
* ViewTimeline named ranges. Returns undefined for unrecognised patterns,
* which signals the caller to fall back to JS-based scroll tracking.
*/
var presets = [
	[ScrollOffset.Enter, "entry"],
	[ScrollOffset.Exit, "exit"],
	[ScrollOffset.Any, "cover"],
	[ScrollOffset.All, "contain"]
];
var stringToProgress = {
	start: 0,
	end: 1
};
function parseStringOffset(s) {
	const parts = s.trim().split(/\s+/);
	if (parts.length !== 2) return void 0;
	const a = stringToProgress[parts[0]];
	const b = stringToProgress[parts[1]];
	if (a === void 0 || b === void 0) return void 0;
	return [a, b];
}
function normaliseOffset(offset) {
	if (offset.length !== 2) return void 0;
	const result = [];
	for (const item of offset) if (Array.isArray(item)) result.push(item);
	else if (typeof item === "string") {
		const parsed = parseStringOffset(item);
		if (!parsed) return void 0;
		result.push(parsed);
	} else return;
	return result;
}
function matchesPreset(offset, preset) {
	const normalised = normaliseOffset(offset);
	if (!normalised) return false;
	for (let i = 0; i < 2; i++) {
		const o = normalised[i];
		const p = preset[i];
		if (o[0] !== p[0] || o[1] !== p[1]) return false;
	}
	return true;
}
function offsetToViewTimelineRange(offset) {
	if (!offset) return {
		rangeStart: "contain 0%",
		rangeEnd: "contain 100%"
	};
	for (const [preset, name] of presets) if (matchesPreset(offset, preset)) return {
		rangeStart: `${name} 0%`,
		rangeEnd: `${name} 100%`
	};
}
var timelineCache = /* @__PURE__ */ new Map();
function scrollTimelineFallback(options) {
	const currentTime = { value: 0 };
	return {
		currentTime,
		cancel: scrollInfo((info) => {
			currentTime.value = info[options.axis].progress * 100;
		}, options)
	};
}
function getTimeline({ source, container, ...options }) {
	const { axis } = options;
	if (source) container = source;
	let containerCache = timelineCache.get(container);
	if (!containerCache) {
		containerCache = /* @__PURE__ */ new Map();
		timelineCache.set(container, containerCache);
	}
	const targetKey = options.target ?? "self";
	let targetCache = containerCache.get(targetKey);
	if (!targetCache) {
		targetCache = {};
		containerCache.set(targetKey, targetCache);
	}
	const axisKey = axis + (options.offset ?? []).join(",");
	if (!targetCache[axisKey]) if (options.target && canUseNativeTimeline(options.target)) if (offsetToViewTimelineRange(options.offset)) targetCache[axisKey] = new ViewTimeline({
		subject: options.target,
		axis
	});
	else targetCache[axisKey] = scrollTimelineFallback({
		container,
		...options
	});
	else if (canUseNativeTimeline()) targetCache[axisKey] = new ScrollTimeline({
		source: container,
		axis
	});
	else targetCache[axisKey] = scrollTimelineFallback({
		container,
		...options
	});
	return targetCache[axisKey];
}
function attachToAnimation(animation, options) {
	const timeline = getTimeline(options);
	const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
	/**
	* Use native timeline when:
	* - No target: ScrollTimeline (existing behaviour)
	* - Target with mappable offset: ViewTimeline with named range
	* - Target with unmappable offset: fall back to JS observe
	*/
	const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
	return animation.attachTimeline({
		timeline: useNative ? timeline : void 0,
		...range && useNative && {
			rangeStart: range.rangeStart,
			rangeEnd: range.rangeEnd
		},
		observe: (valueAnimation) => {
			valueAnimation.pause();
			return observeTimeline((progress) => {
				valueAnimation.time = valueAnimation.iterationDuration * progress;
			}, timeline);
		}
	});
}
/**
* Currently, we only support element tracking with `scrollInfo`, though in
* the future we can also offer ViewTimeline support.
*/
function isElementTracking(options) {
	return options && (options.target || options.offset);
}
/**
* If the onScroll function has two arguments, it's expecting
* more specific information about the scroll from scrollInfo.
*/
function isOnScrollWithInfo(onScroll) {
	return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
	if (isOnScrollWithInfo(onScroll) || isElementTracking(options)) return scrollInfo((info) => {
		onScroll(info[options.axis].progress, info);
	}, options);
	else return observeTimeline(onScroll, getTimeline(options));
}
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
	if (!container) return noop;
	const optionsWithDefaults = {
		axis,
		container,
		...options
	};
	return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var createScrollMotionValues = () => ({
	scrollX: motionValue(0),
	scrollY: motionValue(0),
	scrollXProgress: motionValue(0),
	scrollYProgress: motionValue(0)
});
var isRefPending = (ref) => {
	if (!ref) return false;
	return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
	return {
		factory: (animation) => {
			let cleanup;
			const start = () => {
				if (isRefPending(container) || isRefPending(target)) {
					microtask.read(start);
					return;
				}
				cleanup = scroll(animation, {
					...options,
					axis,
					container: container?.current || void 0,
					target: target?.current || void 0
				});
			};
			microtask.read(start);
			return () => {
				cancelMicrotask(start);
				cleanup?.();
			};
		},
		times: [0, 1],
		keyframes: [0, 1],
		ease: (v) => v,
		duration: 1
	};
}
function canAccelerateScroll(target, offset) {
	if (typeof window === "undefined") return false;
	return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
}
function useScroll({ container, target, ...options } = {}) {
	const values = useConstant(createScrollMotionValues);
	if (canAccelerateScroll(target, options.offset)) {
		values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
		values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
	}
	const scrollAnimation = (0, import_react.useRef)(null);
	const needsStart = (0, import_react.useRef)(false);
	const start = (0, import_react.useCallback)(() => {
		scrollAnimation.current = scroll((_progress, { x, y }) => {
			values.scrollX.set(x.current);
			values.scrollXProgress.set(x.progress);
			values.scrollY.set(y.current);
			values.scrollYProgress.set(y.progress);
		}, {
			...options,
			container: container?.current || void 0,
			target: target?.current || void 0
		});
		return () => {
			scrollAnimation.current?.();
		};
	}, [
		container,
		target,
		JSON.stringify(options.offset)
	]);
	useIsomorphicLayoutEffect(() => {
		needsStart.current = false;
		if (isRefPending(container) || isRefPending(target)) {
			needsStart.current = true;
			return;
		} else return start();
	}, [start]);
	(0, import_react.useEffect)(() => {
		if (!needsStart.current) return;
		let cleanup;
		const tryStart = () => {
			const containerPending = isRefPending(container);
			const targetPending = isRefPending(target);
			invariant(!containerPending, "Container ref is defined but not hydrated", "use-scroll-ref");
			invariant(!targetPending, "Target ref is defined but not hydrated", "use-scroll-ref");
			if (!containerPending && !targetPending) cleanup = start();
		};
		microtask.read(tryStart);
		return () => {
			cancelMicrotask(tryStart);
			cleanup?.();
		};
	}, [start]);
	return values;
}
/**
* Creates a `MotionValue` to track the state and velocity of a value.
*
* Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
*
* ```jsx
* export const MyComponent = () => {
*   const scale = useMotionValue(1)
*
*   return <motion.div style={{ scale }} />
* }
* ```
*
* @param initial - The initial state.
*
* @public
*/
function useMotionValue(initial) {
	const value = useConstant(() => motionValue(initial));
	/**
	* If this motion value is being used in static mode, like on
	* the Framer canvas, force components to rerender when the motion
	* value is updated.
	*/
	const { isStatic } = (0, import_react.useContext)(MotionConfigContext);
	if (isStatic) {
		const [, setLatest] = (0, import_react.useState)(initial);
		(0, import_react.useEffect)(() => value.on("change", setLatest), []);
	}
	return value;
}
function useCombineMotionValues(values, combineValues) {
	/**
	* Initialise the returned motion value. This remains the same between renders.
	*/
	const value = useMotionValue(combineValues());
	/**
	* Create a function that will update the template motion value with the latest values.
	* This is pre-bound so whenever a motion value updates it can schedule its
	* execution in Framesync. If it's already been scheduled it won't be fired twice
	* in a single frame.
	*/
	const updateValue = () => value.set(combineValues());
	/**
	* Synchronously update the motion value with the latest values during the render.
	* This ensures that within a React render, the styles applied to the DOM are up-to-date.
	*/
	updateValue();
	/**
	* Subscribe to all motion values found within the template. Whenever any of them change,
	* schedule an update.
	*/
	useIsomorphicLayoutEffect(() => {
		const scheduleUpdate = () => frame.preRender(updateValue, false, true);
		const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
		return () => {
			subscriptions.forEach((unsubscribe) => unsubscribe());
			cancelFrame(updateValue);
		};
	});
	return value;
}
function useComputed(compute) {
	/**
	* Open session of collectMotionValues. Any MotionValue that calls get()
	* will be saved into this array.
	*/
	collectMotionValues.current = [];
	compute();
	const value = useCombineMotionValues(collectMotionValues.current, compute);
	/**
	* Synchronously close session of collectMotionValues.
	*/
	collectMotionValues.current = void 0;
	return value;
}
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
	if (typeof input === "function") return useComputed(input);
	if (outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function") return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
	const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRangeOrMap, options);
	const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
	const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
	if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) result.accelerate = {
		...inputAccelerate,
		times: inputRangeOrTransformer,
		keyframes: outputRangeOrMap,
		isTransformed: true,
		...options?.ease ? { ease: options.ease } : {}
	};
	return result;
}
function useListTransform(values, transformer) {
	const latest = useConstant(() => []);
	return useCombineMotionValues(values, () => {
		latest.length = 0;
		const numValues = values.length;
		for (let i = 0; i < numValues; i++) latest[i] = values[i].get();
		return transformer(latest);
	});
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
	/**
	* Capture keys once to ensure hooks are called in consistent order.
	*/
	const keys = useConstant(() => Object.keys(outputMap));
	const output = useConstant(() => ({}));
	for (const key of keys) output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
	return output;
}
function useFollowValue(source, options = {}) {
	const { isStatic } = (0, import_react.useContext)(MotionConfigContext);
	const getFromSource = () => isMotionValue(source) ? source.get() : source;
	if (isStatic) return useTransform(getFromSource);
	const value = useMotionValue(getFromSource());
	(0, import_react.useInsertionEffect)(() => {
		return attachFollow(value, source, options);
	}, [value, JSON.stringify(options)]);
	return value;
}
function useSpring(source, options = {}) {
	return useFollowValue(source, {
		type: "spring",
		...options
	});
}
/**
* A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
*
* This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
* `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
*
* It will actively respond to changes and re-render your components with the latest setting.
*
* ```jsx
* export function Sidebar({ isOpen }) {
*   const shouldReduceMotion = useReducedMotion()
*   const closedX = shouldReduceMotion ? 0 : "-100%"
*
*   return (
*     <motion.div animate={{
*       opacity: isOpen ? 1 : 0,
*       x: isOpen ? 0 : closedX
*     }} />
*   )
* }
* ```
*
* @return boolean
*
* @public
*/
function useReducedMotion() {
	/**
	* Lazy initialisation of prefersReducedMotion
	*/
	!hasReducedMotionListener.current && initPrefersReducedMotion();
	const [shouldReduceMotion] = (0, import_react.useState)(prefersReducedMotion.current);
	/**
	* TODO See if people miss automatically updating shouldReduceMotion setting
	*/
	return shouldReduceMotion;
}
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var BookOpen = createLucideIcon("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarHeart = createLucideIcon("calendar-heart", [
	["path", {
		d: "M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125",
		key: "vxdnp4"
	}],
	["path", {
		d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
		key: "15cy7q"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ClipboardCheck = createLucideIcon("clipboard-check", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "m9 14 2 2 4-4",
		key: "df797q"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Flower2 = createLucideIcon("flower-2", [
	["path", {
		d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
		key: "3pnvol"
	}],
	["circle", {
		cx: "12",
		cy: "8",
		r: "2",
		key: "1822b1"
	}],
	["path", {
		d: "M12 10v12",
		key: "6ubwww"
	}],
	["path", {
		d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
		key: "9hd38g"
	}],
	["path", {
		d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
		key: "ufn41s"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* Subtle mouse-driven tilt for hero visuals.
* Returns spring-smoothed rotateX/rotateY motion values.
* Disabled on reduced-motion and touch devices.
*/
function useMouseTilt(strength = 6) {
	const reduce = useReducedMotion();
	const rx = useMotionValue(0);
	const ry = useMotionValue(0);
	const rxs = useSpring(rx, {
		stiffness: 80,
		damping: 20,
		mass: .6
	});
	const rys = useSpring(ry, {
		stiffness: 80,
		damping: 20,
		mass: .6
	});
	(0, import_react.useEffect)(() => {
		if (reduce) return;
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const onMove = (e) => {
			const x = e.clientX / window.innerWidth * 2 - 1;
			const y = e.clientY / window.innerHeight * 2 - 1;
			ry.set(x * strength);
			rx.set(-y * strength);
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [
		reduce,
		rx,
		ry,
		strength
	]);
	return {
		rx: rxs,
		ry: rys
	};
}
var import_jsx_runtime = require_jsx_runtime();
/**
* Static gerbera daisy hero visual with gentle idle sway,
* mouse-driven parallax tilt, and orbiting golden pollen.
*/
function CycleWheel({ size = 780 }) {
	const reduce = useReducedMotion();
	const { rx, ry } = useMouseTilt(4);
	const orbits = [
		{
			r: size * .46,
			dur: 26,
			delay: 0,
			dot: 6
		},
		{
			r: size * .52,
			dur: 34,
			delay: 2,
			dot: 4
		},
		{
			r: size * .4,
			dur: 22,
			delay: 4,
			dot: 5
		},
		{
			r: size * .5,
			dur: 30,
			delay: 6,
			dot: 3
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative hidden items-center justify-center md:flex",
		style: {
			width: size,
			height: size,
			perspective: 1200
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute inset-0 rounded-full",
				style: {
					background: "conic-gradient(from 0deg, rgba(240,201,137,0.18), rgba(198,91,124,0.15), rgba(240,201,137,0.05), rgba(198,91,124,0.18), rgba(240,201,137,0.18))",
					filter: "blur(60px)"
				},
				animate: reduce ? {} : { rotate: 360 },
				transition: {
					duration: 60,
					repeat: Infinity,
					ease: "linear"
				}
			}),
			!reduce && orbits.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute left-1/2 top-1/2",
				style: {
					width: o.r * 2,
					height: o.r * 2,
					marginLeft: -o.r,
					marginTop: -o.r
				},
				animate: { rotate: i % 2 === 0 ? 360 : -360 },
				transition: {
					duration: o.dur,
					delay: o.delay,
					repeat: Infinity,
					ease: "linear"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute rounded-full",
					style: {
						width: o.dot,
						height: o.dot,
						top: -o.dot / 2,
						left: `calc(50% - ${o.dot / 2}px)`,
						background: "rgba(240,201,137,0.9)",
						boxShadow: "0 0 12px rgba(240,201,137,0.9)"
					}
				})
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: flower_default,
				alt: "Gerbera daisy",
				width: size,
				height: size,
				style: {
					width: size,
					height: size,
					rotateX: reduce ? 0 : rx,
					rotateY: reduce ? 0 : ry,
					transformStyle: "preserve-3d"
				},
				className: "relative z-10 select-none object-contain drop-shadow-[0_36px_100px_rgba(168,68,106,0.5)]",
				draggable: false,
				animate: reduce ? {} : {
					rotate: [
						-2,
						2,
						-2
					],
					scale: [
						1,
						1.015,
						1
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				}
			})
		]
	});
}
function daysBetween(a, b) {
	return Math.round((a.getTime() - b.getTime()) / 864e5);
}
function useNextPeriod() {
	const { entries } = useTracker();
	return (0, import_react.useMemo)(() => {
		const flowDays = entries.filter((e) => e.flow !== "none").map((e) => e.date).sort();
		if (flowDays.length === 0) return null;
		const groups = [];
		for (const d of flowDays) {
			const last = groups[groups.length - 1];
			if (!last) {
				groups.push([d]);
				continue;
			}
			if ((new Date(d).getTime() - new Date(last[last.length - 1]).getTime()) / 864e5 <= 2) last.push(d);
			else groups.push([d]);
		}
		const starts = groups.map((g) => new Date(g[0]));
		if (starts.length < 2) return { lastLog: flowDays[flowDays.length - 1] };
		const gaps = [];
		for (let i = 1; i < starts.length; i++) gaps.push(daysBetween(starts[i], starts[i - 1]));
		const avg = Math.round(gaps.reduce((a, b) => a + b, 0) / gaps.length);
		const next = new Date(starts[starts.length - 1].getTime() + avg * 864e5);
		const diff = daysBetween(next, /* @__PURE__ */ new Date());
		return {
			nextDate: next.toISOString().slice(0, 10),
			inDays: diff,
			avg
		};
	}, [entries]);
}
function TodayForYou() {
	const { assessment, ready: aReady } = useAssessment();
	const { ready: tReady } = useTracker();
	const nextPeriod = useNextPeriod();
	if (!aReady || !tReady) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayForYouSkeleton, {});
	const topScore = assessment ? CATEGORIES.map((c) => ({
		name: c.name,
		score: assessment.scores[c.key]
	})).sort((a, b) => b.score - a.score)[0] : null;
	const level = topScore ? levelOf(topScore.score) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .6,
			delay: .3
		},
		className: "mx-auto max-w-7xl px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card relative overflow-hidden p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-1.5 w-1.5 animate-pulse rounded-full",
					style: { background: "var(--accent-gold-soft)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-accent-gold-soft",
					children: "Today for you"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeart, { className: "h-4 w-4" }),
						title: "Your cycle",
						body: nextPeriod?.inDays !== void 0 ? nextPeriod.inDays >= 0 ? `Next period expected in ~${nextPeriod.inDays} day${nextPeriod.inDays === 1 ? "" : "s"} (${nextPeriod.avg}-day cycle average).` : `You're ${Math.abs(nextPeriod.inDays)} day${Math.abs(nextPeriod.inDays) === 1 ? "" : "s"} past the expected date — log today to keep the rhythm.` : nextPeriod?.lastLog ? "Log another period start so Nari can learn your rhythm." : "Log your first period to start seeing gentle predictions.",
						cta: "Open tracker",
						to: "/tracker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
						title: "Your check-in",
						body: topScore && level ? `Highest signal: ${topScore.name} — ${level.label.toLowerCase()}. Tap to revisit or ask Nari.` : "Take a 3-minute check-in so Nari can personalize every answer to you.",
						cta: assessment ? "Revisit results" : "Begin check-in",
						to: "/assessment",
						accent: level?.hex
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
						title: "Talk to Nari",
						body: topScore ? `Curious about your ${topScore.name.toLowerCase()} signal? Ask Nari for what it means and what to do next.` : "A warm AI companion who knows women's health. Ask anything you'd whisper to a wise sister.",
						cta: "Chat with Nari",
						to: "/ask"
					})
				]
			})]
		})
	});
}
function Card({ icon, title, body, cta, to, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative flex flex-col gap-3 rounded-2xl border border-hairline bg-bg-alt/50 p-5 transition hover:border-accent-gold-soft/60 hover:bg-bg-alt/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-rose/25 to-accent-gold/20",
					style: accent ? { color: accent } : { color: "var(--accent-gold-soft)" },
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-base",
					children: title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "flex-1 text-sm leading-relaxed text-muted-foreground",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-semibold uppercase tracking-[0.14em] text-accent-gold-soft opacity-70 transition group-hover:opacity-100",
				children: [cta, " →"]
			})
		]
	});
}
var EASE = [
	.16,
	1,
	.3,
	1
];
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			ease: EASE,
			staggerChildren: .1
		}
	}
};
var itemFade = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			ease: EASE
		}
	}
};
function FloatingOrbs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				y: [
					0,
					-20,
					0
				],
				x: [
					0,
					15,
					0
				],
				opacity: [
					.3,
					.5,
					.3
				]
			},
			transition: {
				duration: 8,
				repeat: Infinity,
				ease: "easeInOut"
			},
			className: "absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-accent-gold-soft/10 blur-[80px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: {
				y: [
					0,
					30,
					0
				],
				x: [
					0,
					-20,
					0
				],
				opacity: [
					.2,
					.4,
					.2
				]
			},
			transition: {
				duration: 10,
				repeat: Infinity,
				ease: "easeInOut",
				delay: 1
			},
			className: "absolute bottom-[20%] right-[5%] h-[500px] w-[500px] rounded-full bg-accent-rose/10 blur-[100px]"
		})]
	});
}
function Home() {
	const { scrollYProgress } = useScroll();
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingOrbs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 overflow-hidden min-h-[90vh] flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: heroY },
					className: "mx-auto w-full grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						animate: "show",
						variants: fadeUp,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemFade,
								className: "eyebrow mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " For every Nari, with love"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: itemFade,
								className: "font-serif text-5xl leading-[1.05] md:text-7xl tracking-tight",
								children: [
									"Your body has a story. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-transparent bg-clip-text bg-gradient-to-r from-accent-gold-soft to-accent-rose pb-2 pr-2",
										children: "Nari"
									}),
									" ",
									"helps you listen."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: itemFade,
								className: "mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed",
								children: "A gentle, private space to understand your cycle, log your days, and ask the questions you'd whisper to a wise older sister. Nari is your AI companion — she knows your context and answers with warmth, not jargon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemFade,
								className: "mt-10 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/assessment",
									className: "btn-primary-glow group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold",
									children: [
										"Begin my check-in",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/ask",
									className: "group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-gold-soft/50 transition-all duration-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-gradient-to-r from-accent-gold-soft/0 to-accent-gold-soft/0 group-hover:from-accent-gold-soft/10 group-hover:to-accent-rose/10 transition-all duration-500" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-accent-gold-soft" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative z-10",
											children: "Talk to Nari"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
								variants: itemFade,
								className: "mt-8 flex flex-nowrap whitespace-nowrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-accent-gold-soft" }),
									"No sign-up",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent-gold-soft/30",
										children: "·"
									}),
									"Stays in your browser",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent-gold-soft/30",
										children: "·"
									}),
									"Private"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8,
							filter: "blur(20px)"
						},
						animate: {
							opacity: 1,
							scale: 1,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.5,
							ease: "easeOut",
							delay: .3
						},
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-accent-rose/20 to-accent-gold-soft/20 blur-[100px] rounded-full z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 drop-shadow-[0_0_40px_rgba(240,201,137,0.15)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CycleWheel, {})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 pb-16 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayForYou, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 border-y border-hairline/50 bg-black/20 backdrop-blur-3xl py-24 md:py-32 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold-soft/20 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								className: "eyebrow justify-center",
								children: "Everything Nari holds for you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: .1 },
								className: "mt-6 font-serif text-4xl md:text-5xl leading-tight",
								children: [
									"A quiet toolkit for the questions",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic text-accent-gold-soft",
										children: "no one told us"
									}),
									" to ask."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: .2 },
								className: "mt-6 text-lg text-muted-foreground",
								children: "Every corner is designed to be gentle, personal, and honest — never clinical, never scary."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-6 w-6" }),
								title: "The Check-in",
								desc: "18 kind questions. Five clear signals — irregularity, PCOS, pain, anaemia, stress. No black boxes.",
								to: "/assessment",
								cta: "Take my check-in",
								span: "md:col-span-2 lg:col-span-2"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6" }),
								title: "Cycle Tracker",
								desc: "Log flow, pain and mood. Watch your rhythm appear and see when your next bloom is due.",
								to: "/tracker",
								cta: "Log today",
								span: "md:col-span-1 lg:col-span-1"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" }),
								title: "Ask Nari",
								desc: "A warm AI companion who reads your context. Ask about symptoms, remedies, or next steps.",
								to: "/ask",
								cta: "Open chat",
								span: "md:col-span-1 lg:col-span-1"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-6 w-6" }),
								title: "Learn Hub",
								desc: "Plain-language guides on PCOS, endometriosis, anaemia and mental wellbeing.",
								to: "/history",
								cta: "View history",
								span: "md:col-span-2 lg:col-span-2"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-6 w-6" }),
								title: "Doctor Companion",
								desc: "A personalized list of tests and questions to carry into your gynaecologist visit.",
								to: "/doctor",
								cta: "Prepare my visit",
								span: "md:col-span-2 lg:col-span-3"
							}
						].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								delay: i * .1,
								duration: .6,
								ease: "easeOut"
							},
							className: `glass-panel group relative flex flex-col p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${f.span}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold-soft/0 to-transparent transition-all duration-500 group-hover:via-accent-gold-soft/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-rose/10 to-accent-gold/10 text-accent-gold-soft border border-white/5 shadow-[0_0_20px_rgba(240,201,137,0.1)] group-hover:scale-110 transition-transform duration-500 ease-out",
									children: f.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative z-10 font-serif text-2xl text-foreground/90",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative z-10 mt-3 flex-1 text-base text-muted-foreground/80 leading-relaxed",
									children: f.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: f.to,
									className: "relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-accent-gold-soft border border-white/5 transition-all group-hover:bg-accent-gold-soft group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(240,201,137,0.3)]",
									children: [
										f.cta,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})
							]
						}, f.title))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl text-center mx-auto mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "eyebrow justify-center",
							children: "The gentle process"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .1 },
							className: "mt-6 font-serif text-4xl md:text-5xl",
							children: "Three soft steps, one clearer picture."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-3 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-hairline to-transparent -translate-y-1/2 z-0" }), [
							{
								n: "01",
								h: "Share honestly",
								p: "18 short questions, grouped into 5 kind steps. Skip anything that feels too much."
							},
							{
								n: "02",
								h: "Nari listens",
								p: "A clinically-informed engine reads your answers and shapes them into 5 clear signals."
							},
							{
								n: "03",
								h: "Understand & act",
								p: "See your bloom, chat with Nari, and carry a personalized checklist to your doctor."
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: i * .2,
								duration: .6
							},
							className: "relative z-10 glass-panel p-8 md:p-10 flex flex-col items-center text-center overflow-hidden group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-8 -top-12 text-[120px] font-serif italic font-light text-white/[0.02] pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:text-accent-gold-soft/[0.03]",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-background border border-hairline shadow-xl mb-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif italic text-2xl text-accent-gold-soft",
										children: s.n
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "relative text-xl font-serif",
									children: s.h
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "relative mt-3 text-sm text-muted-foreground leading-relaxed",
									children: s.p
								})
							]
						}, s.n))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 pb-24 md:pb-32 px-4 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .95,
							y: 40
						},
						whileInView: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						className: "relative overflow-hidden rounded-[2.5rem] border border-hairline/50 p-12 md:p-24 text-center shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-surface to-background z-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { backgroundPosition: [
									"0% 50%",
									"100% 50%",
									"0% 50%"
								] },
								transition: {
									duration: 15,
									repeat: Infinity,
									ease: "linear"
								},
								className: "absolute inset-0 z-0 opacity-40",
								style: {
									backgroundImage: "radial-gradient(circle at center, rgba(198,91,124,0.15) 0%, rgba(240,201,137,0.05) 50%, transparent 100%)",
									backgroundSize: "200% 200%"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, { className: "mx-auto mb-6 h-10 w-10 text-accent-gold-soft opacity-80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-4xl md:text-6xl text-foreground",
										children: "Ready when you are, Nari."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground/90 leading-relaxed",
										children: "Take three quiet minutes. Nari will remember what you share and use it to answer every question that follows."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-wrap justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/assessment",
											className: "btn-primary-glow inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold",
											children: "Begin my check-in"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/ask",
											className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold hover:bg-white/10 hover:border-accent-gold-soft/50 transition-all duration-300",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 text-accent-gold-soft" }), " Talk to Nari"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-muted-foreground/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent-gold-soft/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/80 font-medium",
									children: "Only yours."
								}), " Every entry stays inside your browser."] })]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Home as component };
