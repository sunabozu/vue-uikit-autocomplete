<script>
'use strict'

export default {
  data() {
    return {
      currentValue: '',
    }
  },

  props: {
    value: [String, Number],

    type: {
      type: String,
      default: 'text'
    },

    autofocus: {
      type: Boolean,
      default: false
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
      type: Boolean,
      default: false
    },

    dataRules: {
      type: String
    }
  },

  computed: {
    iconName() {
      if(this.icon)
        return 'uk-icon-' + this.icon
    },

    colorName() {
      if(this.color)
        return 'uk-form-' + this.color
    },

    sizeName() {
      if(this.size)
        return 'uk-form-' + this.size
    },

    wideName() {
      if(this.wide)
        return 'uk-form-width-' + this.wide
    }
  },

  methods: {
    focus() {
      this.$refs.input.focus()
    }
  },

  watch: {
    'value': {
      immediate: true,
      handler(val) {
        this.currentValue = val;
      }
    },

    'currentValue'(val) {
      this.$emit('input', val);
    }
  },
}
</script>

<template>
  <span :class="['uk-form', {'uk-form-icon': icon}]" @focus="focus">
    <i v-if="icon" :class="[iconName, {'flip-icon': flipIcon}]"></i>
    <input
      ref="input"
      :autofocus="autofocus"
      :type="type"
      :class="[colorName, wideName, sizeName]"
      name=""
      tabindex="-1"
      :placeholder="placeholder"
      autocomplete="off"
      :disabled="disabled"
      v-model="currentValue"
      :data-rules="dataRules"
      >
  </span>
</template>

<style>
.flip-icon {
  -webkit-animation-name: spinner; 
  -webkit-animation-timing-function: linear; 
  -webkit-animation-iteration-count: infinite; 
  -webkit-animation-duration: 1s; 
  animation-name: spinner; 
  animation-timing-function: linear; 
  animation-iteration-count: infinite; 
  animation-duration: 1s; 
  -webkit-transform-style: preserve-3d; 
  -ms-transform-style: preserve-3d; 
  transform-style: preserve-3d;
}

@-webkit-keyframes spinner { 
  from 
  { 
    -webkit-transform: rotateY(0deg); 
  } 
  to { 
    -webkit-transform: rotateY(-360deg); 
  } 
}

@keyframes spinner { 
  from { 
    -ms-transform: rotateY(0deg); 
    transform: rotateY(0deg); 
  } 
  to 
  { 
    -ms-transform: rotateY(-360deg); 
    transform: rotateY(-360deg); 
  } 
}
</style>