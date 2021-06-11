import A0, {meta as m0} from './article/0-introduce.mdx'
import A1, {meta as m1} from './article/1-hello-world.mdx'
import A2, {meta as m2} from './article/2-jsx.mdx'
import A3, {meta as m3} from './article/3-render.mdx'
import A4, {meta as m4} from './article/4-component.mdx'
import A5, {meta as m5} from './article/5-state.mdx'
import A6, {meta as m6} from './article/6-condition.mdx'
import A7, {meta as m7} from './article/7-list.mdx'
import A8, {meta as m8} from './article/8-controlled.mdx'
import A9, {meta as m9} from './article/effect.mdx'
import A10, {meta as m10} from './article/hook.mdx'

const Introduce = {Component: A0, meta: m0}
const HelloWorld = {Component: A1, meta: m1}
const JSX = {Component: A2, meta: m2}
const Render = {Component: A3, meta: m3}
const Component = {Component: A4, meta: m4}
const State = {Component: A5, meta: m5}
const Condition = {Component: A6, meta: m6}
const List = {Component: A7, meta: m7}
const Controlled = {Component: A8, meta: m8}
const Effect = {Component: A9, meta: m9}
const Hook = {Component: A10, meta: m10}

export type ArticleData = {
  Component: React.ComponentType
  meta: {
    id: string
    name: string
    title?:string
  }
}

export const AllArticles: ArticleData[] = [
  Introduce,
  HelloWorld,
  JSX,
  Render,
  Condition,
  List,
  Component,
  State,
  Controlled,
  Effect,
  Hook,
]