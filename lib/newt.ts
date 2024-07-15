import type { Article } from '@/types/article';
import type { Author } from '@/types/author';
import type { Tag } from '@/types/tag';
import type { TeamsOfService } from '@/types/teams-of-service';
import { format } from 'date-fns';
import { createClient } from 'newt-client-js';
import { cache } from 'react';
import 'server-only';

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
});

/**
 * 記事一覧を取得する
 */
export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ['_id', '_sys', 'title', 'slug', 'body', 'coverImage', 'author', 'tag'],
    },
  });
  return items;
});

/**
 * 検索に紐づく記事一覧を取得する
 */
export const getArticleBySearch = cache(async (tag?: string, year?: string) => {
  let items: Article[] = [];

  if (tag && tag !== 'all') {
    await client
      .getContents<Article>({
        appUid: 'blog',
        modelUid: 'article',
        query: {
          tag,
          select: ['_id', '_sys', 'title', 'slug', 'body', 'coverImage', 'author', 'tag'],
        },
      })
      .then((res) => {
        items = res.items;
      });
  } else {
    items = await getArticles();
  }

  if (year && year !== 'all') {
    return items.filter((item) => format(item._sys.createdAt, 'yyyy') === year);
  } else {
    return items;
  }
});

/**
 * スラッグに紐づく記事を取得する
 */
export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', '_sys', 'title', 'slug', 'meta', 'body', 'coverImage', 'author', 'tag'],
    },
  });
  return article;
});

/**
 * タグ一覧を取得する
 */
export const getTags = cache(async () => {
  const { items } = await client.getContents<Tag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      select: ['_id', 'name', 'slug'],
    },
  });
  return items;
});

/**
 * コンテンツIDに紐づく著者を取得する
 */
export const getAuthorById = cache(async (id: string) => {
  const author = await client.getFirstContent<Author>({
    appUid: 'blog',
    modelUid: 'author',
    query: {
      _id: id,
      select: ['_id', 'profileImage', 'fullName'],
    },
  });
  return author;
});

/**
 * 利用規約を取得する
 */
export const getTeamsOfService = cache(async () => {
  const teamsOfService = await client.getFirstContent<TeamsOfService>({
    appUid: 'document-site',
    modelUid: 'terms-of-service',
    query: {
      select: ['title', 'body'],
    },
  });
  return teamsOfService;
});
