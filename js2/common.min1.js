
document.addEventListener("DOMContentLoaded", function () {
	const staySwiper = document.querySelector('.stay__swiper')

	if (staySwiper) {
		var swiperStay = new Swiper(staySwiper, {
			pagination: {
				clickable: true,
        el: '.stay__swiper .swiper-pagination',
				renderBullet: function (index, className) {
          return '<span class="' + className + '"> <span class="circle"> </span> </span>';
        },
      },
			speed: 0,
			breakpoints: {
				320: {
					spaceBetween: 10
				},
				481: {
					spaceBetween: 0
				},
			}
		});
	}

	// menu open 
	const menuBtn = document.querySelector('.header__menu-btn');
	if (menuBtn) {
		menuBtn.addEventListener('click', () => {
			const body = document.querySelector('.main-wrapper');
			body.classList.toggle('open-menu')
		})
	}

	// block "What We Do" tabs 
	const whatTabs = document.querySelectorAll('.what__tab');
	if (whatTabs.length > 0) {
		handlerTabSwitchInnerBlocks();

		for (let tab of whatTabs) {
			tab.addEventListener('click', () => {
				const whatBlocks = document.querySelectorAll('.what__block');
				handlerTabSwitcher(tab, whatTabs, whatBlocks)

				handlerTabSwitchInnerBlocks()
			})
		}
	}

	// block "Finance Use Case" tabs 
	const caseBlockTabs = document.querySelectorAll('.cases__tab');

	if (caseBlockTabs.length > 0) {
			handlerTabSwitchInnerBlocks();

			for (let tab of caseBlockTabs) {
				tab.addEventListener('click', () => {
					const caseInfos = document.querySelectorAll('.cases__info');
					const caseBlocks = document.querySelectorAll('.cases__block');
					handlerTabSwitcher(tab, caseBlockTabs, caseBlocks)
					handlerTabSwitcher(tab, caseBlockTabs, caseInfos)


				})
			}
		}

	function handlerTabSwitchInnerBlocks() {
		const whatBlockTabs = document.querySelectorAll('.what__block.active .what__block-tab');
				if (whatBlockTabs.length > 0) {
					for (let tab of whatBlockTabs) {
						tab.addEventListener('click', () => {
							const whatBlocks = document.querySelectorAll('.what__block.active .what__block-info');
							handlerTabSwitcher(tab, whatBlockTabs, whatBlocks)
						})
					}
				}
	}

	
	function handlerTabSwitcher(tab, tabs, blocks) {
		let tabData = tab.dataset.title;
		for (let i of tabs) {
			i.classList.remove('active');
		}
		for (let block of blocks) {
			block.classList.remove('active')
			let blockData = block.dataset.title;
			if (tabData == blockData) {
				tab.classList.add('active');
				block.classList.add('active');
			}
		}
	}

	const partnersSwiper = document.querySelector('.partners__swiper .swiper-container')

	if (partnersSwiper) {
		var swiperPartners = new Swiper(partnersSwiper, {
			speed: 400,
			loop: true,
			navigation: {
        nextEl: '.partners__swiper .swiper-button-next',
        prevEl: '.partners__swiper .swiper-button-prev',
      },
			autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				680: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
			}
		});
	}

	const walletSwiper = document.querySelector('.wallet__swiper .swiper-container')

	if (walletSwiper) {
		var swiperWallet = new Swiper(walletSwiper, {
			loop: true,
			slidesPerView: 1,
			speed: 500,
			pagination: {
        el: '.wallet__swiper .swiper-pagination',
			clickable: true,

      },
		});
	}
	
})


