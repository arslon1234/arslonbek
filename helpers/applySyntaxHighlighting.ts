// utils/applySyntaxHighlighting.ts
import Prism from 'prismjs';
// Import the specific language if necessary
import 'prismjs/components/prism-javascript'; 
import 'prismjs/components/prism-css';
// Add more languages as needed

export function applySyntaxHighlighting(content: string): string {
  // Parse code blocks and apply syntax highlighting
  const highlightedContent = content.replace(
    /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
    (match, language, code) => {
      const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
      return `<pre><code class="language-${language}">${highlightedCode}</code></pre>`;
    }
  );

  return highlightedContent;
}
