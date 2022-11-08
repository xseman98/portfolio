import React from 'react'
import { useInView } from 'react-intersection-observer';
import './style.css'

interface TextSectionProps {
    sectionType: 'main' | 'sub',
    children
}

const TextSection: React.FC<TextSectionProps> = (props) => {
    const { sectionType, children } = props

    const { 
        ref: textSectionComponent,
        inView: textSectionComponentIsVisible
    } = useInView();

	return (
		<section
            ref={textSectionComponent}
            className={`text ${sectionType} ${textSectionComponentIsVisible ? 'animateTextSection' : ''}`}
        >
            {children}
        </section>
	)
}

export default TextSection