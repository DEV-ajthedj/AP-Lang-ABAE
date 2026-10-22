import { useState } from "react";
import type { Route } from "./+types/home";
import "./home.css"

export function meta({}: Route.MetaArgs) {
  	return [
    	{ title: "The Glass Castle | A Childhood Built on Dreams" },
   		{ name: "description", content: 'AP Lang "Anything But An Essay" Project exploring the promises and contradictions of The Glass Castle' },
  	];
}

class Promise {
	private number: string;
	private title: string;
	private dream: string;
	private realityTitle: string;
	private reality: string;

	public constructor(number: string, title: string, dream: string, realityTitle: string, reality: string) {
		this.number = number;
		this.title = title;
		this.dream = dream;
		this.realityTitle = realityTitle;
		this.reality = reality;
	}

	public get() {
		return (
			{
				number: this.number,
				title: this.title,
				dream: this.dream,
				realityTitle: this.realityTitle,
				reality: this.reality
			}
		)
	}
}

const promises: Promise[] = [
	new Promise("01", "Freedom to explore", "A new town. A different horizon. A childhood too expansive to stay in one place.", "Nowhere to settle", "Constant movement also means interrupted routines and an uncertain sense of home. Adventure becomes harder to celebrate when children cannot choose to stay."),
	new Promise("02", "A different kind of wealth", "Who needs ordinary luxuries when the desert offers a sky full of stars?", "Beauty cannot feed a child", "Imagination gives the family moments of wonder, but it cannot replace food, warmth, or reliable care. A beautiful story can make deprivation easier to overlook."),
	new Promise("03", "A home beyond imagining", "Glass walls. Sunlight in every room. A remarkable house waiting just beyond the next possibility.", "A promise without shelter", "Rex's plans for the Glass Castle offer hope without becoming the secure home his children need. The dream keeps pointing toward a future that never arrives."),
	new Promise("04", "The strength to do anything", "Learn by doing. Trust your instincts. Discover just how capable you can become when the world is your classroom.", "Growing up too soon", "The Walls children develop resourcefulness, but often because the adults fail to provide dependable care. Their resilience is an achievement, not proof that the neglect was necessary."),
]

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [realityVisible, setRealityVisible] = useState(false);
	const [hasRevealed, setHasRevealed] = useState(false);

	function toggleReality() {
		setHasRevealed(true);
		setRealityVisible((visible) => !visible);
	}

	function closeMenu() {
		setMenuOpen(false);
	}

	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}

  	return (
		<div className={`gc-page ${realityVisible ? "gc-page--reality" : ""}`}>
			{realityVisible && (
				<div className="gc-cracks" aria-hidden="true">
					<svg viewBox="0 0 1440 1000" preserveAspectRatio="none" focusable="false">
						<g className="gc-crack-lines">
							<path d="M0 90 L180 170 L275 155 L390 300 L480 340 L530 460 L690 510 L760 660 L930 710 L1030 870 L1190 915 L1260 1000" />
							<path d="M1440 40 L1220 170 L1140 300 L960 370 L850 480 L690 510 L570 660 L420 710 L280 880 L0 940" />
							<path d="M710 0 L680 140 L735 225 L660 350 L690 510 L650 740 L720 860 L690 1000" />
							<path d="M390 300 L330 410 L160 440 L0 580 M960 370 L1090 460 L1210 450 L1440 620 M760 660 L850 820 L820 1000" />
							<path d="M180 170 L210 80 L170 0 M1140 300 L1280 310 L1440 250 M420 710 L390 620 L260 580 M1030 870 L1170 780 L1300 800 L1440 740" />
						</g>
					</svg>
				</div>
			)}

			<header className="gc-header">
				<a className="gc-brand" href="#home" aria-label="The Glass Castle homepage" onClick={closeMenu}><span className="gc-brand-mark" aria-hidden="true">◇</span>The Glass Castle</a>
				<button className="gc-menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={toggleMenu}>{menuOpen ? "Close Menu" : "Menu"}</button>
				<nav className={`gc-nav ${menuOpen ? "gc-nav--open" : ""}`} id="main-navigation" aria-label="Main navigation">
					<a href="#dream" onClick={closeMenu}>The Dream</a>
					<a href="#promises" onClick={closeMenu}>The Promises</a>
					<a href="#truth" onClick={closeMenu}>The Truth</a>
				</nav>
			</header>

			<main id="main-content" tabIndex={-1}>

				<section className="gc-hero" id="home">
					<div className="gc-landscape" aria-hidden="true">
						<div className="gc-sun" />
						<div className="gc-mountain gc-mountain--back" />
						<div className="gc-mountain gc-mountain--front" />
						<div className="gc-glass-house"><span /><span /><span /></div>
					</div>
					<div className="gc-hero-content">
						<p className="gc-eyebrow">A world of possibility awaits</p>
						<h1>A childhood<br />built on <em>dreams.</em></h1>
						<p className="gc-hero-description">Open skies. Endless adventure. A family that dares to live differently. Discover a life where imagination makes anything possible.</p>
						<a className="gc-button gc-button--dark" href="#dream">Discover the story <span aria-hidden="true">↗</span></a>
						<p className="gc-hero-note">Inspired by Jeannette Walls’s memoir</p>
					</div>
					<a className="gc-scroll-link" href="#dream">There is more beneath the surface <span aria-hidden="true">↓</span></a>
				</section>

				<section className="gc-intro gc-container" id="dream">
					<div>
						<p className="gc-eyebrow">01 / The Dream</p>
						<h2>Some families follow a map.<br /><em>Others follow the stars.</em></h2>
					</div>
					<div className="gc-intro-copy">
						<p>For the Walls children, life rarely stays still. The desert becomes a playground, the night sky a treasure, and their father’s imagination a doorway into a more extraordinary future.</p>
						<p>At the center of that future stands the Glass Castle: a house of light, invention, and possibility. A promise that one day, everything will come together.</p>
						<span className="gc-small-note">It sounds beautiful from a distance.</span>
					</div>
				</section>

				<section className="gc-promises" id="promises">
					<div className="gc-container">
						<div className="gc-section-heading">
							<p className="gc-eyebrow">02 / The Promises</p>
							<h2>Everything a childhood could be.</h2>
							<p>Four reasons to believe in an extraordinary life.</p>
						</div>
                        <div className="gc-card-grid" id="promise-cards">
                            {promises.map((promise) => (
                                <article className="gc-flip-card" key={promise.get().number}>
                                    <div className={`gc-card-inner ${realityVisible ? "gc-card-inner--flipped" : ""}`}>
                                        <div className="gc-card gc-card-front" aria-hidden={realityVisible}>
                                            <span className="gc-card-number">{promise.get().number}</span>
                                            <div className="gc-card-symbol" aria-hidden="true">
                                                {promise.get().number === "01" ? "↗" : promise.get().number === "02" ? "✧" : promise.get().number === "03" ? "◇" : "◎"}
                                            </div>
                                            <h3>{promise.get().title}</h3>
                                            <p>{promise.get().dream}</p>
                                        </div>
                                        <div className="gc-card gc-card-back" aria-hidden={!realityVisible}>
                                            <p className="gc-eyebrow">Behind Promise {promise.get().number}</p>
                                            <h3>{promise.get().realityTitle}</h3>
                                            <p>{promise.get().reality}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
						<p className="gc-fine-print">Terms and conditions apply. Stability, regular meals, and completed castles not included.</p>
					</div>
				</section>

				<section className="gc-truth gc-container" id="truth">
					<p className="gc-eyebrow">03 / The Truth</p>
					<h2>{realityVisible ? "A beautiful promise can hide a painful reality." : "Would you like to see the whole picture?"}</h2>
					<p className="gc-truth-description">{realityVisible ? "The wonder is part of the story. So are the hunger, uncertainty, and responsibilities placed on the children." : "Every detail on this page has invited you to admire this childhood. Consider what the invitation has left out."}</p>



					<button className="gc-button gc-button--dark" type="button" aria-expanded={realityVisible} aria-controls="promise-cards reality-panel" onClick={toggleReality}>
						{realityVisible ? "Return to the dream" : "Look through the glass"}
						<span aria-hidden="true">{realityVisible ? "↶" : "↗"}</span>
					</button>

					<p className="gc-status" role="status">{realityVisible ? "The reality behind the promises is now revealed on the backs of the cards." : "You are viewing the dream."}</p>

					<div id="reality-panel" hidden={!realityVisible}>
						<aside className="gc-analysis" aria-labelledby="analysis-title">
							<p className="gc-eyebrow">The purpose of this page</p>
							<h3 id="analysis-title">You were being sold a dream.</h3>
							<p>The warm colors, open landscape, and reassuring language frame instability as freedom and deprivation as simplicity. Revealing the missing details changes the meaning of the same promises.</p>
							<p>This project argues that the Glass Castle represents both the power of hope and the danger of using hope in place of responsibility. Jeannette’s love for her family can coexist with her recognition of the harm she experienced.</p>
						</aside>
					</div>
				</section>

			</main>

			{hasRevealed && (
				<button className="gc-button gc-button--dark gc-floating-toggle" type="button" aria-expanded={realityVisible} aria-controls="promise-cards reality-panel" onClick={toggleReality}>
					{realityVisible ? "Return to the dream" : "Look through the glass"}
					<span aria-hidden="true">{realityVisible ? "↶" : "↗"}</span>
				</button>
			)}

			<footer className="gc-footer">
				<div>
					<a className="gc-brand" href="#home"><span className="gc-brand-mark" aria-hidden="true">◇</span>The Glass Castle</a>
					<p>AP Lang · Anything But An Essay · Ajay Balusu</p>
				</div>
				<p className="gc-source">Based on <cite>The Glass Castle</cite> by Jeannette Walls.<br />Student interpretation. Page copy is original, not quotation from the memoir.</p>
				<a className="gc-back-top" href="#home">Back to top</a>
			</footer>

		</div>
  	);
}
