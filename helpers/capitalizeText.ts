// helpers/capitalizeText.ts
export function capitalizeText(text: string): string {
    return text
      .split(/[-\s]/) // Split by hyphens or spaces
      .map(word =>
        word === 'va' ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
  }
  