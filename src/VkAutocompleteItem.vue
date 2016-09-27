<script>
'use strict'

export default {
  props: {
    data: {},

    field: {}
  }
}
</script>

<template>
  <span v-html="data[field]"></span>
</template>