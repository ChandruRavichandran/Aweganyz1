import React, { useEffect, useState } from 'react';

function ScrollSpy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.contents section');
      let currentSectionId = '';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) { // Adjust this value to change when the section is considered active
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="toc">
        <ul>
          <li><a href="#html" className={activeSection === 'html' ? 'highlight' : ''}>html</a></li>
          <li><a href="#tags" className={activeSection === 'tags' ? 'highlight' : ''}>tags</a></li>
          <li><a href="#html5" className={activeSection === 'html5' ? 'highlight' : ''}>html5</a></li>
          <li><a href="#readMore" className={activeSection === 'readMore' ? 'highlight' : ''}>read more</a></li>
        </ul>
      </nav>
      <div className="contents">
        <section id="html">...</section>
        <section id="tags">...</section>
        <section id="html5">...</section>
        <section id="readMore">...</section>
      </div>
    </div>
  );
}

export default ScrollSpy;