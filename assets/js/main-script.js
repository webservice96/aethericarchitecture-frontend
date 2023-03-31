// window.addEventListener("scroll", () => {
// 	let header = document.querySelector(".header");
// 	header.classList.toggle("sticky", window.scrollY > 0);
// });

(() => {
	var doc = document.documentElement;
	var w = window;

	/*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

	var curScroll;
	var prevScroll = w.scrollY || doc.scrollTop;
	var curDirection = 0;
	var prevDirection = 0;

	/*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

	var header = document.querySelector("header");
	var toggled;
	var threshold = 200;

	var checkScroll = function () {
		curScroll = w.scrollY || doc.scrollTop;

		if (curScroll > prevScroll) {
			// scrolled down
			curDirection = 2;
		} else if (curScroll === 0) {
			curDirection = 0;
		} else {
			//scrolled up
			curDirection = 1;
		}

		if (curDirection !== prevDirection) {
			toggled = toggleHeader();
		}

		prevScroll = curScroll;
		if (toggled) {
			prevDirection = curDirection;
		}
	};

	var toggleHeader = function () {
		toggled = true;
		if (curDirection === 2 && curScroll > threshold) {
			header.classList.add("hide");
		} else if (curDirection === 1) {
			header.classList.remove("hide");
			header.classList.add("sticky");
		} else {
			toggled = false;
			header.classList.remove("sticky");
		}
		return toggled;
	};

	window.addEventListener("scroll", checkScroll);
})();
