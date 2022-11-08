import React from 'react'
import { useInView } from 'react-intersection-observer'
import './style.css'

const Footer: React.FC = () => {
	const { 
        ref: footerComponent,
        inView: footerComponentIsVisible
    } = useInView();

	return (
		<footer
			ref={footerComponent}
			className={`${footerComponentIsVisible ? 'animateFooter' : ''}`}
		>
			<section>
				<div>
					<p>Socials</p>
					<a href="/">...</a>
				</div>
				<div>
					<p>Phone</p>
					<a href="/">+420 774 968 728</a>
					<p>Email</p>
					<a href="/">seman.kris@gmail.com</a>
				</div>
			</section>
			<img src="/signature.png" alt="Signature" width={72} height={16} />
		</footer>
	)
}

export default Footer