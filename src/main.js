"use strict";
const mfDrawer = document.querySelector('mf-drawer');
const mfVideos = document.querySelector('mf-videos');
const onFavoriteToggle = (e) => {
    const userData = e.detail.userData;
    mfDrawer.setCount(userData.length);
};
mfVideos.addEventListener('favoritetoggle', onFavoriteToggle);
