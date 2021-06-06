import A0, {meta as m0} from './article/0-introduce.mdx'
import A1, {meta as m1} from './article/1-hello-world.mdx'
import A2, {meta as m2} from './article/2-render.mdx'

export type ArticleData = {
  Component: React.ComponentType
  meta: {
    id: string
    name: string
  }
}

export const AllArticles: ArticleData[] = [
  {Component: A0, meta: m0},
  {Component: A1, meta: m1},
  {Component: A2, meta: m2},
]