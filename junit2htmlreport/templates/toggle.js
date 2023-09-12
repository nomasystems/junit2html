var hide = function(element) { element.style.display = 'none';}
var show = function(element) { element.style.display = '';}
var isHidden = function(element) { return element.style.display == 'none';}
var isSelected = function(element) { return element.classList.contains("selected");}
var deselect = function(element) { return element.classList.remove("selected");}
var select = function(element) { return element.classList.add("selected");}
var toggle = function(element) { isHidden(element) ? show(element) : hide(element);};
var toggleTests = function(heading) { toggle(heading.parentNode.children[1]);};
var toggleDetails = function(detailClass) {
    var details = document.querySelectorAll('.' + detailClass);
    for (var i = details.length - 1; i >= 0; i--) { toggle(details[i]);};
};
var hideAll = function(collection) {
    for (var i = collection.length - 1; i >= 0; i--) { hide(collection[i]); };
}
var showAll = function(collection) {
    for (var i = collection.length - 1; i >= 0; i--) { show(collection[i]); };
}
var selectSegment = function(segment) {
    if (isSelected(segment)) return;
    var segments = document.querySelectorAll('#segment-bar > a');
    for (var i = segments.length - 1; i >= 0; i--) { deselect(segments[i]);
};
select(segment);
    showAll(document.querySelectorAll('.outcome'));
    showAll(document.querySelectorAll('.testclass'));
    showAll(document.querySelectorAll('.testsuite'));
    if (segment.id == "failing-segment") {
        hideAll(document.querySelectorAll('.outcome-aborted'));
        hideAll(document.querySelectorAll('.outcome-blocked'));
        hideAll(document.querySelectorAll('.outcome-passed'));
        hideAll(document.querySelectorAll('.testclass-aborted'));
        hideAll(document.querySelectorAll('.testclass-blocked'));
        hideAll(document.querySelectorAll('.testclass-passed'));
        hideAll(document.querySelectorAll('.testsuite-passed'));
        hideAll(document.querySelectorAll('.testsuite-aborted'));
        hideAll(document.querySelectorAll('.testsuite-blocked'));
    } else if (segment.id == "passing-segment") {
        hideAll(document.querySelectorAll('.outcome-aborted'));
        hideAll(document.querySelectorAll('.outcome-blocked'));
        hideAll(document.querySelectorAll('.outcome-failed'));
        hideAll(document.querySelectorAll('.testclass-aborted'));
        hideAll(document.querySelectorAll('.testclass-failed:not(:has(.outcome-passed))'));
        hideAll(document.querySelectorAll('.testclass-blocked:not(:has(.outcome-passed))'));
        hideAll(document.querySelectorAll('.testsuite-aborted'));
        hideAll(document.querySelectorAll('.testsuite-failed:not(:has(.testclass-passed .outcome-passed)):not(:has(.testclass-failed .outcome-passed)):not(:has(.testclass-blocked .outcome-passed))'));
        hideAll(document.querySelectorAll('.testsuite-blocked:not(:has(.testclass-passed .outcome-passed)):not(:has(.testclass-blocked .outcome-passed))'));
    } else if (segment.id == "aborting-segment") {
        hideAll(document.querySelectorAll('.outcome-failed'));
        hideAll(document.querySelectorAll('.outcome-passed'));
        hideAll(document.querySelectorAll('.testclass-blocked:not(:has(.outcome-aborted))'));
        hideAll(document.querySelectorAll('.testclass-failed:not(:has(.outcome-aborted))'));
        hideAll(document.querySelectorAll('.testclass-passed:not(:has(.outcome-aborted))'));
        hideAll(document.querySelectorAll('.testsuite-failed:not(:has(.testclass-failed .outcome-aborted)):not(:has(.testclass-passed .outcome-aborted)):not(:has(.testclass-aborted .outcome-aborted)):not(:has(.testclass-blocked .outcome-aborted))'));
        hideAll(document.querySelectorAll('.testsuite-blocked:not(:has(.testclass-blocked .outcome-aborted)):not(:has(.testclass-passed .outcome-aborted)):not(:has(.testclass-aborted .outcome-aborted))'));
        hideAll(document.querySelectorAll('.testsuite-passed:not(:has(.testclass-passed .outcome-aborted)):not(:has(.testclass-aborted .outcome-aborted))'));
    } else if (segment.id == "blocking-segment") {
        hideAll(document.querySelectorAll('.outcome-aborted'));
        hideAll(document.querySelectorAll('.outcome-failed'));
        hideAll(document.querySelectorAll('.outcome-passed'));
        hideAll(document.querySelectorAll('.testclass-aborted'));
        hideAll(document.querySelectorAll('.testclass-passed'));
        hideAll(document.querySelectorAll('.testclass-failed:not(:has(.outcome-blocked))'));
        hideAll(document.querySelectorAll('.testsuite-aborted'));
        hideAll(document.querySelectorAll('.testsuite-passed'));
        hideAll(document.querySelectorAll('.testsuite-failed:not(:has(.testclass-failed .outcome-blocked)):not(:has(.testclass-passed .outcome-blocked)):not(:has(.testclass-blocked .outcome-blocked))'));
    }
}