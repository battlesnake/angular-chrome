var elements = chrome.devtools.panels.elements;

elements.createSidebarPane('Scope', sidebarCallback);

function sidebarCallback(sidebar) {
	elements.onSelectionChanged.addListener(selectionChanged);
	selectionChanged();
	return;

	function selectionChanged() {
		sidebar.setExpression('angular.element($0).scope()');
	}
}
