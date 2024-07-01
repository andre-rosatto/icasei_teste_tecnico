"use strict";
class MFDrawer extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        this.root = this.attachShadow({ mode: 'closed' });
        this.userData = this.getUserData();
    }
    attributeChangedCallback(name, _, newValue) {
        if (name === 'selected') {
            this.createHTML(newValue);
        }
        this.setCount(this.userData.length);
    }
    getUserData() {
        const storageData = localStorage.getItem('icasei-teste-tecnico');
        if (!storageData)
            return [];
        return JSON.parse(storageData);
    }
    setCount(value) {
        this.count = value;
        this.root.querySelector('#favorite-count').innerText = this.count.toString();
    }
    createHTML(selected) {
        this.root.innerHTML = `
			<style>@import url('./mf/mf-drawer/mf-drawer.css');</style>
			<ul>
				<li id="videos-link" ${selected === 'videos' ? 'class="selected"' : null}>
					<a href="${selected === 'videos' ? 'javascript:void(0)' : '/'}">Vídeos</a>
				</li>
				<li id="favorites-link" ${selected === 'favorites' ? 'class="selected"' : null}>
					<a href="${selected === 'favorites' ? 'javascript:void(0)' : '/favorites.html'}">
						Favoritos
						<span id="favorite-count">${this.count}</span>
					</a>
				</li>
			</ul>
		`;
    }
}
MFDrawer.observedAttributes = ['selected'];
customElements.define('mf-drawer', MFDrawer);
