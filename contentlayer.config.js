import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    fields: {
      title: {
        type: "string",
        required: true,
      },
      publishedAt: {
        type: "date",
        required: true,
      },
      updatedAt: {
        type: "date",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      image: { type: "image" },
      isPublished: {
        type: "boolean",
        default: true,
      },
      author: {
        type: "string",
        required: true,
      },
      tags: {
        type: "list",
        of: { type: "string" },
      },
    },
    computedFields: {
      url: { 
        type: 'string', 
        resolve: (post) => `/blog/${post._raw.flattenedPath}` },
    },
  }))


  export default makeSource({contentDirPath: 'src/markdown/posts', documentTypes: [Post]});