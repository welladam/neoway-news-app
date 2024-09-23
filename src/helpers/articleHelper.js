import apiClient from '@/api/axios'

/**
 * Function to format a list of articles by filtering and adding a "isFavorite" property.
 * The function filters articles that have both a valid "source.id" and "publishedAt" properties,
 * and then adds the "isFavorite" property to each article.
 * 
 * @param {Array} articles - Array of article objects to be formatted.
 * @returns {Array} - A new array of articles, each including the "isFavorite" property.
 */
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
