<script>
'use strict'

import VkInput from './VkInput.vue'
import VkAutocompleteItem from './VkAutocompleteItem.vue'
import adjust from './directives/adjust'


export default {
  components: {
    VkInput,
    VkAutocompleteItem
  },

  directives: {
    adjust
  },

  data() {
    return {
      active: 0,

      listVisible: false,

      localItems: [],

      inputValue: '',

      timestamp: new Date().getTime(), // for unique ids

      flipIcon: false,

      dontUpdate: false
    }
  },

  props: {
    value: { // to support v-model
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String
    },

    icon: {
      type: String
    },

    color: {
      type: String
    },

    disabled: {
      type: Boolean
    },

    size: {
      type: String
    },

    wide: {
      type: String
    },

    flipIcon: {
      type: Boolean
    },

    items: {
      type: Array,
      default: []
    },

    field: {
      type: String,
      default: 'text'
    },

    delegate: {
      type: String,
      default: 'vk-autocomplete-item'
    }
  },

  watch: {
    'items': function(val) {
      this.processStatic(val)
    },

    'value': {
      immediate: true,
      handler(val) {
        this.inputValue = val
      },
    },

    'inputValue': function(val) {
      if(this.dontUpdate) { // if user hits Enter
        this.dontUpdate = false
        return
      }

      this.onChange(val)
    }
  },

  computed: {
    resultItems() {
      const re = new RegExp(`(${this.inputValue})`, 'ig')

      return this.localItems.map((item) => { // highlighting the 'text' field
        if(!item[this.field])
          return item

        const newItem = {}
        Object.assign(newItem, item)
        newItem[this.field] = newItem[this.field].replace(re, '<b>$1</b>')
        return newItem
      })
    },
  },

  methods: {
    onMouseEnter(active) {
      this.active = active
    },

    onMove(direction) {
      if(this.resultItems && this.resultItems.length) {
        const result = this.active + direction

        if(result >= 0 && result < this.resultItems.length) {
          this.active = result

          const el = document.querySelector(`#_${this.timestamp}_${this.active}`)
          el.focus()
          this.$refs.input.focus()
        }
      }
    },

    hideList() {
      this.listVisible = false
      this.localItems = []
      this.active = 0
    },

    onClickOutside(e) {
      if(!this.$el.contains(e.target))
        this.hideList()
    },

    onEsc(e) {
      if(e.keyCode === 27) //Esc
        this.hideList()
    },

    onChange(text) {
      if(!text || text.length == 0) {
        this.hideList()
        return
      }

      const re = new RegExp(`(${text})`, 'ig')
      
      let list = []

      if(this.items) {
        list = this.items.filter((item) => {
          if(item[this.field] && item[this.field].search(re) !== -1)
            return true
        })
      }

      if(list.length > 0) {
        this.localItems = list
        this.listVisible = true
      }
      else {
        this.hideList()
      }
    },

    processStatic(val) {
      if(val)
        this.onChange()
    },

    onSelect() {
      if(this.localItems.length > this.active && this.active >= 0) {
        this.dontUpdate = true
        this.inputValue = this.localItems[this.active][this.field]
        this.$emit('select', this.localItems[this.active])
      } else {
        this.$emit('select', this.inputValue)
      }

      this.hideList()
    },

    onInput(val) {
      this.$emit('input', val)
    }
  },

  created() {
    document.body.addEventListener('click', this.onClickOutside)
  },

  beforeDestroy() {
    document.body.addEventListener('click', this.onClickOutside)
  }
}
</script>

<template>
  <div class="uk-autocomplete uk-form" :class="{'uk-open': this.listVisible}">
    <vk-input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :icon="icon"
      :color="color"
      :disabled="disabled"
      :size="size"
      :wide="wide"
      :flip-icon="flipIcon"

      v-model="inputValue"

      @keydown.up.prevent.native="onMove(-1)"
      @keydown.down.prevent.native="onMove(1)"
      @keydown.esc.native="hideList"
      @keydown.enter.native="onSelect"
      @input="onInput"
      >
    </vk-input>
    <div class="uk-dropdown" v-adjust aria-expanded="true" v-if="listVisible">
      <ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">
        <li
          v-for="(item, $index) in resultItems"
          :id="'_' + timestamp + '_' + $index"
          tabindex="-1"
          :class="{'uk-active': $index == active}"
          @mouseenter="onMouseEnter($index)"
          >
          <a>
            <component :is="delegate" :data="item" :field="field"></component>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.uk-dropdown {
  background: #fff;
  border: 1px solid #d3d3d3;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
  overflow-y: scroll;
  min-height: 50px;
}
</style>