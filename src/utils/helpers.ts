export function normalizeQuery(value: string): string {
  return value.trim().toLowerCase();
}

export function matchesSearch(fields: Array<string | undefined>, query: string): boolean {
  const normalized = normalizeQuery(query);
  if (!normalized) return true;
  return fields.some((field) => field?.toLowerCase().includes(normalized));
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
