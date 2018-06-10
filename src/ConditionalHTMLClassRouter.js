export default class ConditionalHTMLClassRouter {

	constructor(scripts, prefix = 'page--', elem = 'body') {

		this.prefix = prefix;
		this.elem = elem;

		scripts.forEach((script) => {

			if (script.only) {

				if (this.isPage(script.only)) {

					script.code();

				}

			} else if (script.except) {

				if (! this.isPage(script.except)) {

					script.code();

				}

			} else {
				script.code();
			}

		});

	}


	isPage(pages) {

		let elem = document.querySelector(this.elem),
			isPage = false;

		pages.forEach((page) => {

			if (elem.classList.contains(this.prefix + page)) {

				isPage = true;

			}

		});

		return isPage;

	}

}
