class MFVideos extends HTMLElement {
	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'closed' });
		this.createHTML();
		this.root.querySelector('#video-search').addEventListener('input', e => this.onVideoSearchInputChange(e));
		this.root.querySelector('#mf-videos__search-icon').addEventListener('click', () => this.onVideoSearchClick());
	}

	onVideoSearchInputChange(e) {
		if (e.target.value.length === 0) {
			this.root.querySelector('#mf-videos__search-icon').classList.add('disabled');
		} else {
			this.root.querySelector('#mf-videos__search-icon').classList.remove('disabled');
		}
	}

	onVideoSearchClick() {
		const query = this.root.querySelector('#video-search').value;

	}

	createHTML() {
		this.root.innerHTML = `
			<style>@import url('./mf/mf-videos/mf-videos.css');</style>
			<h2 class="text-title">Pesquisa de vídeos</h2>
			<div id="mf-videos__search" class="input-container disabled">
				<input type="text" id="video-search" class="input-box">
				<label for="video-search">Pesquisar vídeos</label>
				<svg id="mf-videos__search-icon" class="disabled" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
					<path d="M14.718,18.155l5.11,5.127c0.954,0.957 2.503,0.957 3.457,0c0.953,-0.957 0.953,-2.511 -0,-3.468l-5.131,-5.147c0.836,-1.441 1.315,-3.115 1.315,-4.901c-0,-5.39 -4.362,-9.766 -9.735,-9.766c-5.372,0 -9.734,4.376 -9.734,9.766c-0,5.39 4.362,9.766 9.734,9.766c1.821,-0 3.526,-0.503 4.984,-1.377Zm-4.984,-15.723c4.035,0 7.31,3.286 7.31,7.334c0,4.048 -3.275,7.334 -7.31,7.334c-4.034,-0 -7.31,-3.286 -7.31,-7.334c0,-4.048 3.276,-7.334 7.31,-7.334Z"/>
				</svg>
			</div>
			<section id="mf-videos__search-results">
			</section>
		`;
	}
}

/*
<div class="mf-videos__video-container">
	<svg class="mf-videos__favorite-icon favorite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<path class="fill" d="M9,1.02l2.625,4.943l5.935,1.029l-4.435,4.759l1.165,5.499l-5.29,-2.966l-5.29,2.966l1.165,-5.499l-4.435,-4.759l5.935,-1.029l2.625,-4.943Z" style="fill:#ffcd1e;"/>
		<path d="M9.529,0.344c-0.1,-0.21 -0.305,-0.344 -0.529,-0.344c-0.224,0 -0.429,0.134 -0.529,0.344l-2.461,5.228c-0,-0 -5.505,0.838 -5.505,0.838c-0.222,0.034 -0.407,0.197 -0.476,0.42c-0.069,0.224 -0.012,0.469 0.149,0.634l3.983,4.068c0,0 -0.94,5.746 -0.94,5.746c-0.038,0.232 0.053,0.466 0.235,0.604c0.181,0.138 0.422,0.156 0.62,0.047l4.924,-2.713c0,0 4.924,2.713 4.924,2.713c0.198,0.109 0.439,0.091 0.62,-0.047c0.182,-0.138 0.273,-0.372 0.235,-0.604l-0.94,-5.746c-0,0 3.983,-4.068 3.983,-4.068c0.161,-0.165 0.218,-0.41 0.149,-0.634c-0.069,-0.223 -0.254,-0.386 -0.476,-0.42l-5.505,-0.838c0,-0 -2.461,-5.228 -2.461,-5.228Zm-0.529,1.67l2.07,4.396c0.086,0.182 0.252,0.308 0.444,0.338l4.63,0.705c-0,-0 -3.35,3.421 -3.35,3.421c-0.139,0.142 -0.203,0.347 -0.17,0.547l0.791,4.832c-0,-0 -4.141,-2.281 -4.141,-2.281c-0.171,-0.095 -0.377,-0.095 -0.548,-0l-4.141,2.281c0,-0 0.791,-4.832 0.791,-4.832c0.033,-0.2 -0.031,-0.405 -0.17,-0.547l-3.35,-3.421c0,-0 4.63,-0.705 4.63,-0.705c0.192,-0.03 0.358,-0.156 0.444,-0.338l2.07,-4.396Z"/>
	</svg>
</div>
<div class="mf-videos__video-container">
	<svg class="mf-videos__favorite-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<path class="fill" d="M9,1.02l2.625,4.943l5.935,1.029l-4.435,4.759l1.165,5.499l-5.29,-2.966l-5.29,2.966l1.165,-5.499l-4.435,-4.759l5.935,-1.029l2.625,-4.943Z" style="fill:#ffcd1e;"/>
		<path d="M9.529,0.344c-0.1,-0.21 -0.305,-0.344 -0.529,-0.344c-0.224,0 -0.429,0.134 -0.529,0.344l-2.461,5.228c-0,-0 -5.505,0.838 -5.505,0.838c-0.222,0.034 -0.407,0.197 -0.476,0.42c-0.069,0.224 -0.012,0.469 0.149,0.634l3.983,4.068c0,0 -0.94,5.746 -0.94,5.746c-0.038,0.232 0.053,0.466 0.235,0.604c0.181,0.138 0.422,0.156 0.62,0.047l4.924,-2.713c0,0 4.924,2.713 4.924,2.713c0.198,0.109 0.439,0.091 0.62,-0.047c0.182,-0.138 0.273,-0.372 0.235,-0.604l-0.94,-5.746c-0,0 3.983,-4.068 3.983,-4.068c0.161,-0.165 0.218,-0.41 0.149,-0.634c-0.069,-0.223 -0.254,-0.386 -0.476,-0.42l-5.505,-0.838c0,-0 -2.461,-5.228 -2.461,-5.228Zm-0.529,1.67l2.07,4.396c0.086,0.182 0.252,0.308 0.444,0.338l4.63,0.705c-0,-0 -3.35,3.421 -3.35,3.421c-0.139,0.142 -0.203,0.347 -0.17,0.547l0.791,4.832c-0,-0 -4.141,-2.281 -4.141,-2.281c-0.171,-0.095 -0.377,-0.095 -0.548,-0l-4.141,2.281c0,-0 0.791,-4.832 0.791,-4.832c0.033,-0.2 -0.031,-0.405 -0.17,-0.547l-3.35,-3.421c0,-0 4.63,-0.705 4.63,-0.705c0.192,-0.03 0.358,-0.156 0.444,-0.338l2.07,-4.396Z"/>
	</svg>
</div>
*/

customElements.define('mf-videos', MFVideos);