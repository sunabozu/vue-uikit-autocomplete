<script>
'use strict'

import VkAutocomplete from './VkAutocomplete.vue'
import debounce from 'lodash.debounce'


export default {
  mixins: [VkAutocomplete],

  data() {
    return {
      processUrlDebounced: null,
    }
  },

  props: {
    url: {
      type: String
    },

    httpHeaders: {
      type: Array,
      default: () => []
    },

    debounce: {
      type: Number,
      default: 500
    },

    filter: {
      type: Function,
      default: data => data
    },

    animate: {
      type: Boolean
    }
  },

  watch: {
    'url': function(newVal) {
      this.processUrl(newVal)
    }
  },

  methods: {
    processUrl() {
      this.processUrlDebounced()
    },

    onChange(text) { // replace the original method
      this.inputValue = text

      if(this.inputValue.length > 0) {
        this.$emit('change', text)
      } else {
        this.listVisible = false
        this.localItems = []
      }
    },

    emitError(err) {
      this.$emit('error', err)
      this.hideList()
    }
  },

  created() {
    // setting up the http processing
    this.processUrlDebounced = debounce(function() {
      if(this.animate)
        this.flipIcon = true

      if(this.url) {
        if(!this.filter) {
          console.err('You must provide both url and filter')
        } else { // make an actual request
          const xhr = new XMLHttpRequest()
          xhr.onreadystatechange = () => {
            if(xhr.readyState !== XMLHttpRequest.DONE)
              return

            this.flipIcon = false
            if(xhr.status === 200) {
              if(this.inputValue == '')
                return this.hideList()

              let data = null
              try {
                data = JSON.parse(xhr.responseText)
              } catch(e) {
                return this.emitError(e.message)
              }

              const result = this.filter(data)

              if(!Array.isArray(result)) {
                this.emitError('Wrong format from the filter')
              } else { // finally we got our valid result
                this.localItems = result
                this.listVisible = true
              }

            } else {
              this.emitError('Network problems: ' + xhr.status)
              return
            }
          }

          xhr.open('GET', this.url)

          // set headers if any
          for(let header of this.httpHeaders) {
            xhr.setRequestHeader(header.key, header.value)
          }

          xhr.send()
        }
      }
    }, this.debounce)
  }
}
</script>
