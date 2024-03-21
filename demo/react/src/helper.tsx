export const helper = (
  type: string,
  attributes: Record<string, string>,
  children: string
): string | null => {
  if (type === "mj-for") {
    const itemName = attributes.item;
    const listName = attributes.list;
    return `
    <mj-raw>
      <!-- htmlmin:ignore -->{% for ${itemName} in ${listName} %}<!-- htmlmin:ignore -->
    </mj-raw>
        ${children}
    <mj-raw>
      <!-- htmlmin:ignore -->{% endfor %}<!-- htmlmin:ignore -->
    </mj-raw>
    `;
  }
  return null;
};
