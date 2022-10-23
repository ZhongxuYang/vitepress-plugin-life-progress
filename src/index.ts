import {render, createVNode, onMounted} from 'vue'
import type {ComponentInternalInstance, ComponentPublicInstance} from 'vue'
import LifeProgressCom from './template.vue'

const mountLifeProgressDom = () => {
  /**
   * Why is it mounted on VPNav instead of body?
   *  - We need the VPNav element as the trigger tagert for LifeProgressCom, so we finally need to get the VPNav element...
   */
  const vpNav = document.getElementsByClassName('VPNav')[0]
  const vnode = createVNode(LifeProgressCom, {})
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
const mountTriggerEvent = (el: Element, vm) => {
  el.addEventListener('mouseenter', () => vm.handleChangeLabelStatus(true))
  el.addEventListener('mouseleave', () => vm.handleChangeLabelStatus(false))
}

const vitepressLifeProgress = () => {
  if (typeof window === 'undefined') return

  onMounted(() => {
    const {mountEl, vm} = mountLifeProgressDom()
    mountTriggerEvent(mountEl, vm)
  })
}

export default vitepressLifeProgress
