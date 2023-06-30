<template>
  <div class="life-progress">
    <ul>
      <li
        v-for="(i, idx) in months"
        :key="i"
      >
        <span class="filler" :style="{
          width: `${i.width}%`
        }" />
        <div v-if="idx === month" :style="{
          opacity: showLabel ? 1 : 0,
          width: `${i.width}%`,
        }" class="label-box">
          <span class="month">{{i.name}}</span>
          <span class="day">{{date}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, onUnmounted} from 'vue'

const props = defineProps<{
  customEventName: string
}>()
const showLabel = ref(false)
const handleChangeLabelStatus = (visible: boolean = true) => showLabel.value = visible

const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

const getToday = () => new Date()
const getFullDayNumber = (year, mon) => new Date(year, mon, 0).getDate() 
const today = ref(getToday())
const year = computed(() => today.value.getFullYear())
const month = computed(() => today.value.getMonth())
const date = computed(() => today.value.getDate())
const fullDayNum = computed(() => getFullDayNumber(year.value, month.value))
const months = computed(() => monthShortNames.map((mon, index) => ({
  name: mon,
  width: index < month.value ? 100 : index === month.value ? date.value / fullDayNum.value * 100 : 0
})))

// CustomEvent
const event = (ev) => handleChangeLabelStatus(ev.detail)
window.addEventListener(props.customEventName, event)
onUnmounted(() => {
  window.removeEventListener(props.customEventName, event)
})

// Why can't I get handleChangeLabelStatus in index.ts?...
// defineExpose({
//   handleChangeLabelStatus,
// })
</script>

<style lang="postcss">
.VPNavBar{
  /* z-index: 1; */
}
.life-progress{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  ul {
    display: flex;
    width: 100%;
    li {
      position: relative;
      flex-grow: 1;
      height: 2px;
      list-style: none;
      font-size: 12px;
      line-height: 24px;
      background-color: var(--vp-c-text-4);
      color: var(--vp-c-text-2);
      &:not(:last-child) {
        margin-right: 2px;
      }
      .filler {
        position: absolute;
        display: inline-block;
        height: 100%;
        background-color: var(--vp-c-text-1);
      }
      .label-box {
        position: absolute;
        display: flex;
        justify-content: space-between;
        transition: 500ms;
        .month {}
        .day {
          transform: translateX(50%);
        }
      }
    }
  }
}
</style>