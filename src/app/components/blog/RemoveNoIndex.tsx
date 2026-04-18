import { useEffect } from "react";

/**
 * Componente que remove qualquer tag meta com noindex
 * Útil quando frameworks injetam noindex automaticamente
 */
export function RemoveNoIndex() {
  useEffect(() => {
    // Remove qualquer meta tag com noindex no momento da montagem
    const removeNoIndexTags = () => {
      const allMetaTags = document.querySelectorAll('meta[name="robots"]');

      allMetaTags.forEach((tag) => {
        const content = tag.getAttribute('content');
        if (content && content.includes('noindex')) {
          console.log('Removendo meta tag com noindex:', content);
          tag.remove();
        }
      });

      // Adiciona a tag correta se não existir
      const robotsTag = document.querySelector('meta[name="robots"][content*="index"]');
      if (!robotsTag) {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', 'robots');
        newTag.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        document.head.insertBefore(newTag, document.head.firstChild);
        console.log('Meta tag robots adicionada com index, follow');
      }
    };

    // Remove imediatamente
    removeNoIndexTags();

    // Observa mudanças no head para remover tags noindex que possam ser adicionadas depois
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLMetaElement &&
                node.getAttribute('name') === 'robots' &&
                node.getAttribute('content')?.includes('noindex')) {
              console.log('Meta tag noindex detectada e removida:', node.getAttribute('content'));
              node.remove();
            }
          });
        }
      });
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // Este componente não renderiza nada
}
