<template>
  <form :action="URL">
    <h1 :class="class_h1">{{ title }}</h1>
    <slot></slot>
    <button :id="idname" :class="classname">{{ button }}</button>
  </form>
</template>
  
  <script>
export default {
  props: {
    class_h1: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    idname: {
      type: String,
      default: "",
    },
    URL: {
      type: String,
      default: "",
    },
    button: {
      type: String,
      default: "",
    },
    classname: {
      type: String,
      default: "",
    },
  },
};
</script>
  
