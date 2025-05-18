/**
 * Converts a string into a URL-friendly slug.
 */
export function slugify(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')        // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '')    // Remove all non-word chars except hyphen
        .replace(/\-\-+/g, '-');     // Replace multiple hyphens with single one
}

/**
 * Converts a slug back to a human-readable string.
 */
export function unslugify(slug: string): string {
    return slug
        .replace(/-/g, ' ')          // Replace hyphens with spaces
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letters
}
