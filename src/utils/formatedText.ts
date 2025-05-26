type FormattedItem = {
  title: string;
  description: string;
};

export const formatByDot = (text: string): FormattedItem[] => {
  const sentenceRegex = /(?<=\w\.)\s+(?=[A-Z])/g;

  const parts = text
    .split(sentenceRegex)
    .map((part) => part.trim())
    .filter(Boolean);

  const result: FormattedItem[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    result.push({
      title: parts[i].endsWith('.') ? parts[i] : parts[i] + '.',
      description: parts[i + 1] ? (parts[i + 1].endsWith('.') ? parts[i + 1] : parts[i + 1] + '.') : '',
    });
  }

  return result;
};
