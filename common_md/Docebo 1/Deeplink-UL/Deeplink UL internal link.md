
```ts
const createDeepLinkData = (
url: string,
showModalDialog?: ShowModalDialog,
hideModalDialog?: HideModalDialog,
): DeepLinkData => {
	// for test to be removed
	url = `https://gmele.docebosaas.com/${url.split('://')[1]}`;
	return url.indexOf('https://') >= 0 && showModalDialog && hideModalDialog
	? getUniversalLinkData(url, showModalDialog, hideModalDialog)
	: getDeeplinkData(url);
};
```

guarda questa mr: https://gitlab.com/docebo/mobile/golearn/-/merge_requests/3984