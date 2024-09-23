import apiClient from '@/api/axios'

export function formatArticleList(articles) {
  const articleList = articles.filter((article) => article.source.id && article.publishedAt)
  const result = articleList.map((article) => {
    const isFavorite = apiClient.isFavoriteArticle(article)
    return {
      ...article,
      isFavorite,
    }
  })
  return result
}
