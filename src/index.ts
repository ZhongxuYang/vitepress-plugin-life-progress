import {render, createVNode, onMounted} from 'vue'
import type {ComponentInternalInstance, ComponentPublicInstance} from 'vue'
import LifeProgressCom from './template.vue'

const customEventName = 'vitepress-life-progress'
const mountLifeProgressDom = () => {
  /**
   * Why is it mounted on VPNav instead of body?
   *  - We need the VPNav element as the trigger tagert for LifeProgressCom, so we finally need to get the VPNav element...
   */
  const vpNav = document.getElementsByClassName('VPNav')[0]
  const vnode = createVNode(LifeProgressCom, {
    customEventName,
  })
  const boxEl = document.createElement('div')
  vpNav.appendChild(boxEl)
  render(vnode, boxEl)

  const instance = vnode.component as ComponentInternalInstance
  const vm = instance.proxy as ComponentPublicInstance
  return {
    mountEl: vpNav,
    vm,
  }
}
const mountTriggerEvent = (el: Element) => {
  el.addEventListener('mouseenter', () => window.dispatchEvent(new CustomEvent(customEventName, {detail: true})))
  el.addEventListener('mouseleave', () => window.dispatchEvent(new CustomEvent(customEventName, {detail: false})))
}

const vitepressLifeProgress = () => {
  if (typeof window === 'undefined') return

  onMounted(() => {
    const {mountEl} = mountLifeProgressDom()
    mountTriggerEvent(mountEl)
  })
}

export default vitepressLifeProgress
