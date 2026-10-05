import { useEffect, useState } from 'react';

export default function LanguageSelector() {
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    function initializeGoogleTranslate() {
      const translate = window.google?.translate;
      const element = document.getElementById('google_translate_element');

      if (!mounted || !translate || !element) {
        return;
      }

      element.replaceChildren();
      new translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: translate.TranslateElement.InlineLayout.SIMPLE
        },
        element.id
      );
      setError('');
    }

    window.googleTranslateElementInit = initializeGoogleTranslate;

    if (window.google?.translate) {
      initializeGoogleTranslate();
    } else {
      let script = document.getElementById('google-translate-script');

      if (!script) {
        script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.onerror = () => {
          if (mounted) {
            setError('Language translation is currently unavailable.');
          }
        };
        document.head.appendChild(script);
      }
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="language-selector">
      <div id="google_translate_element" aria-label="Choose a language">
        <span>{error || 'Translate'}</span>
      </div>
    </div>
  );
}
