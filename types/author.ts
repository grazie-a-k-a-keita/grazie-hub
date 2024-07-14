export interface Author {
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
  fullName: string;
  slug: string;
  biography: string;
  profileImage: {
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
}
