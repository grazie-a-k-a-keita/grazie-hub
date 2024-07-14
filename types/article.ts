import type { Author as BaseAuthor } from './author';
import type { Tag } from './tag';

type AuthorWithImageAsString = Omit<BaseAuthor, 'profileImage'> & {
  profileImage: string;
};

export interface Article {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
  title: string;
  slug: string;
  meta: {
    title: string;
    description: string;
    ogImage: {
      _id: string;
      src: string;
      fileType: string;
      fileSize: number;
      fileName: string;
      width: number;
      height: number;
    };
  };
  body: string;
  coverImage: {
    _id: string;
    src: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    width: number;
    height: number;
    title: string;
    description: string;
    altText: string;
    metadata: Record<string, string | number | boolean>;
  };
  author: AuthorWithImageAsString;
  tag: Tag;
}
