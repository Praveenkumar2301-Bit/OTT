/**
 * i18n – get UI strings and content display by language.
 */
import type { Content, Creator, Category } from './types';
import { en } from './en';
import { ta } from './tamil';

export type Lang = 'en' | 'ta';

export const strings = { en, ta } as const;

export function getStrings(lang: Lang) {
  return strings[lang];
}

export const LANG_COOKIE = 'NEXT_LANG';

/** Content/creator/category display in current language (EN = English, else Tamil). */
export function contentTitle(c: Content, lang: Lang): string {
  return lang === 'en' && c.titleEn ? c.titleEn : c.title;
}
export function contentDescription(c: Content, lang: Lang): string {
  return lang === 'en' && c.descriptionEn ? c.descriptionEn : c.description;
}
export function contentCategory(c: Content, lang: Lang): string {
  return lang === 'en' && c.categoryEn ? c.categoryEn : c.category;
}
export function contentLanguage(c: Content, lang: Lang): string {
  return lang === 'en' && c.languageEn ? c.languageEn : c.language;
}
export function contentTags(c: Content, lang: Lang): string[] {
  return lang === 'en' && c.tagsEn?.length ? c.tagsEn : (c.tags ?? []);
}
export function creatorName(cr: Creator | undefined, lang: Lang): string {
  if (!cr) return '';
  return lang === 'en' && cr.nameEn ? cr.nameEn : cr.name;
}
export function creatorBio(cr: Creator | undefined, lang: Lang): string {
  if (!cr) return '';
  return lang === 'en' && cr.bioEn ? cr.bioEn : cr.bio;
}
export function categoryName(cat: Category, lang: Lang): string {
  return lang === 'en' && cat.nameEn ? cat.nameEn : cat.name;
}
