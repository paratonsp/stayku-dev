

/* Event Date Math
-----------------------------------------------------------------------------*/


function exclEndDay(event) {
	if (event.end) {
		return _exclEndDay(event.end, event.allDay);
	}else{
		return addDays(cloneDate(event.start), 1);
	}
}


function _exclEndDay(end, allDay) {
	end = cloneDate(end);
	return allDay || end.getHours() || end.getMinutes() ? addDays(end, 1) : clearTime(end);
}


function segCmp(a, b) {
	return (b.msLength - a.msLength) * 100 + (a.event.start - b.event.start);
}


function segsCollide(seg1, seg2) {
	return seg1.end > seg2.start && seg1.start < seg2.end;
}

function eventsCollide(seg1, seg2) {
	function eventEnd(event){
		return event.end || event.start;
	}
	return seg1.room==seg2.room && eventEnd(seg1) >= seg2.start && seg1.start <= eventEnd(seg2);
}


/* Event Sorting
-----------------------------------------------------------------------------*/

// event rendering utilities
function sliceSegs(events, visEventEnds, start, end) {
	sliceSegs(events, visEventEnds, start, end, 0);
}

function sliceSegs(events, visEventEnds, start, end, room) {
	var segs = [],
		i, len=events.length, event,
		eventStart, eventEnd,
		segStart, segEnd,
		isStart, isEnd;
	for (i=0; i<len; i++) {
		event = events[i];
		eventStart = event.start;
		eventEnd = visEventEnds[i];
		if(event.room == room)
		if (eventEnd > start && eventStart < end) {
			if (eventStart < start) {
				segStart = cloneDate(start);
				isStart = false;
			}else{
				segStart = eventStart;
				isStart = true;
			}
			if (eventEnd > end) {
				segEnd = cloneDate(end);
				isEnd = false;
			}else{
				segEnd = eventEnd;
				isEnd = true;
			}
			segs.push({
				event: event,
				start: segStart,
				end: segEnd,
				isStart: isStart,
				isEnd: isEnd,
				msLength: segEnd - segStart
			});
		}
	} 
	return segs.sort(segCmp);
}


// event rendering calculation utilities
function stackSegs(segs) {
	var levels = [],
		i, len = segs.length, seg,
		j, collide, k;
	for (i=0; i<len; i++) {
		seg = segs[i];
		j = 0; // the level index where seg should belong
		while (true) {
			collide = false;
			if (levels[j]) {
				for (k=0; k<levels[j].length; k++) {
					if (segsCollide(levels[j][k], seg)) {
						collide = true;
						break;
					}
				}
			}
			if (collide) {
				j++;
			}else{
				break;
			}
		}
		if (levels[j]) {
			levels[j].push(seg);
		}else{
			levels[j] = [seg];
		}
	}
	return levels;
}



/* Event Element Binding
-----------------------------------------------------------------------------*/


function lazySegBind(container, segs, bindHandlers) {
	container.unbind('mouseover').mouseover(function(ev) {
		var seg;
		var target = ev.target;
		var parent = target.parentNode;
		while (parent != this && parent != null) {
			target = parent;
			parent = parent.parentNode;
		}
		if (target != null && target._fci != null) {
			seg = segs[target._fci];
			target._fci = undefined;
			bindHandlers(seg.event, seg.element, seg, segs);
			$(ev.target).trigger(ev);
		}
		ev.stopPropagation();
	});
}



/* Element Dimensions
-----------------------------------------------------------------------------*/

function getOuterWidth(element, width, includeMargins) {
	var w = 0;
	element.each(function(i, _element) {
		w += $(_element).outerWidth();
	});
	return w;
}

function setOuterWidth(element, width, includeMargins) {
	element.each(function(i, _element) {
		_element.style.width = Math.max(0, width - hsides(_element, includeMargins)) + 'px';
	});
}


function setOuterHeight(element, height, includeMargins) {
	element.each(function(i, _element) {
		_element.style.height = Math.max(0, height - vsides(_element, includeMargins)) + 'px';
	});
}


function hsides(_element, includeMargins) {
	return (parseFloat($.css(_element, 'paddingLeft', true)) || 0) +
	       (parseFloat($.css(_element, 'paddingRight', true)) || 0) +
	       (parseFloat($.css(_element, 'borderLeftWidth', true)) || 0) +
	       (parseFloat($.css(_element, 'borderRightWidth', true)) || 0) +
	       (includeMargins ? hmargins(_element) : 0);
}


function hmargins(_element) {
	return (parseFloat($.css(_element, 'marginLeft', true)) || 0) +
	       (parseFloat($.css(_element, 'marginRight', true)) || 0);
}


function vsides(_element, includeMargins) {
	return (parseFloat($.css(_element, 'paddingTop', true)) || 0) +
	       (parseFloat($.css(_element, 'paddingBottom', true)) || 0) +
	       (parseFloat($.css(_element, 'borderTopWidth', true)) || 0) +
	       (parseFloat($.css(_element, 'borderBottomWidth', true)) || 0) +
	       (includeMargins ? vmargins(_element) : 0);
}


function vmargins(_element) {
	return (parseFloat($.css(_element, 'marginTop', true)) || 0) +
	       (parseFloat($.css(_element, 'marginBottom', true)) || 0);
}


function setMinHeight(element, h) {
	h = typeof h == 'number' ? h + 'px' : h;
	element[0].style.cssText += ';min-height:' + h + ';_height:' + h;
}



/* Position Calculation
-----------------------------------------------------------------------------*/
// nasty bugs in opera 9.25
// position()'s top returning incorrectly with TR/TD or elements within TD

var topBug;

function topCorrect(tr) { // tr/th/td or anything else
	if (topBug !== false) {
		var cell;
		if (tr.is('th,td')) {
			tr = (cell = tr).parent();
		}
		if (topBug === undefined && tr.is('tr')) {
			topBug = tr.position().top != tr.children().position().top;
		}
		if (topBug) {
			return tr.parent().position().top + (cell ? tr.position().top - cell.position().top : 0);
		}
	}
	return 0;
}



/* Misc Utils
-----------------------------------------------------------------------------*/


//TODO: arraySlice
//TODO: isFunction, grep ?


function noop() { }


function cmp(a, b) {
	return a - b;
}


function arrayMax(a) {
	return Math.max.apply(Math, a);
}


function zeroPad(n) {
	return (n < 10 ? '0' : '') + n;
}


function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object
	if (obj[name] !== undefined) {
		return obj[name];
	}
	var parts = name.split(/(?=[A-Z])/),
		i=parts.length-1, res;
	for (; i>=0; i--) {
		res = obj[parts[i].toLowerCase()];
		if (res !== undefined) {
			return res;
		}
	}
	return obj[''];
}


function htmlEscape(s) {
	return s.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function cssKey(_element) {
	return _element.id + '/' + _element.className + '/' + _element.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, '');
}


function disableTextSelection(element) {
	element
		.attr('unselectable', 'on')
		.css('MozUserSelect', 'none')
		.bind('selectstart.ui', function() { return false; });
}


/*
function enableTextSelection(element) {
	element
		.attr('unselectable', 'off')
		.css('MozUserSelect', '')
		.unbind('selectstart.ui');
}
*/


