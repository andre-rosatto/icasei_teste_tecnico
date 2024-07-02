const mfDrawer = document.querySelector('mf-drawer') as MFDrawer;
const mfVideos = document.querySelector('mf-videos') as MFVideos;

const onFavoriteToggle = (e: any) => {
	const userData = e.detail.userData;
	mfDrawer.setCount(userData.length);
}

mfVideos.addEventListener('favoritetoggle', onFavoriteToggle);