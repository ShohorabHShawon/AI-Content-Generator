export default [
  {
    name: "Blog Title",
    description: "AI text generator for your blog",
    category: "Blog",
    icon: "/title.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet point wise only based on given niche and outline topic and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter blog niche topic",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        placeholder: "Describe your topic",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    description: "Generate blog topic ideas based on niche",
    category: "Blog",
    icon: "/topic.png",
    aiPrompt:
      "Generate 10 blog topic ideas in bullet points based on the given niche",
    slug: "blog-topic-ideas",
    form: [
      {
        label: "Enter niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO Title Generator",
    description: "Generate SEO-optimized YouTube titles",
    category: "YouTube",
    icon: "/seo.png",
    aiPrompt:
      "Generate 5 SEO-optimized YouTube video titles based on the provided keyword",
    slug: "youtube-seo-title-generator",
    form: [
      {
        label: "Enter keyword",
        field: "input",
        name: "keyword",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Description Generator",
    description: "Generate YouTube video descriptions",
    category: "YouTube",
    icon: "/yt.png",
    aiPrompt:
      "Generate an engaging YouTube video description for the given video topic",
    slug: "youtube-description-generator",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "videoTopic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Title Generator",
    description: "Generate catchy YouTube titles",
    category: "YouTube",
    icon: "/yttitle.png",
    aiPrompt: "Generate 5 catchy YouTube video titles for the given topic",
    slug: "youtube-title-generator",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "videoTopic",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    description: "Generate hashtags for Instagram posts",
    category: "Instagram",
    icon: "/insta.png",
    aiPrompt:
      "Generate 10 relevant hashtags based on the provided Instagram post description",
    slug: "instagram-hashtag-generator",
    form: [
      {
        label: "Enter post description",
        field: "input",
        name: "postDescription",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Article",
    description: "Rewrite an article using AI",
    category: "Article",
    icon: "/article.png",
    aiPrompt: "Rewrite the given article while retaining its original meaning",
    slug: "rewrite-article",
    form: [
      {
        label: "Enter article",
        field: "textarea",
        name: "articleContent",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Paragraph",
    description: "Rewrite a paragraph with AI",
    category: "Writing",
    icon: "/rewrite.png",
    aiPrompt:
      "Rewrite the given paragraph with the same meaning but using different words",
    slug: "rewrite-paragraph",
    form: [
      {
        label: "Enter paragraph",
        field: "textarea",
        name: "paragraphContent",
        required: true,
      },
    ],
  },
  {
    name: "Paraphrase It",
    description: "Paraphrase the text to make it unique",
    category: "Writing",
    icon: "/para.png",
    aiPrompt:
      "Paraphrase the given text to make it unique while preserving its original message",
    slug: "paraphrase-it",
    form: [
      {
        label: "Enter text",
        field: "textarea",
        name: "textToParaphrase",
        required: true,
      },
    ],
  },
];
