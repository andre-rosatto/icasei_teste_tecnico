class MFDrawer extends HTMLElement {
	static observedAttributes = ['selected'];
	private root: ShadowRoot;
	private userData: string[];
	private count: number = 0;

	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'closed' });
		this.userData = this.getUserData();
	}

	attributeChangedCallback(name: string, _: string, newValue: string) {
		if (name === 'selected') {
			this.createHTML(newValue);
		}
		this.setCount(this.userData.length);
	}

	getUserData(): string[] {
		const storageData = localStorage.getItem('icasei-teste-tecnico');
		if (!storageData) return [];
		return JSON.parse(storageData);
	}

	setCount(value: number) {
		this.count = value;
		(this.root.querySelector('#favorite-count') as HTMLSpanElement).innerText = this.count.toString();
	}

	createHTML(selected: string) {
		this.root.innerHTML = `
			<style>@import url('./mf/mf-drawer/mf-drawer.css');</style>
			<ul>
				<li id="videos-link" ${selected === 'videos' ? 'class="selected"' : null}>
					<a href="${selected === 'videos' ? 'javascript:void(0)' : '/videos.html'}">Vídeos</a>
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

customElements.define('mf-drawer', MFDrawer);