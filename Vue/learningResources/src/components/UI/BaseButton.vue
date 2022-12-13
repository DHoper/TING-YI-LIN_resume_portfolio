<template>
    <button  :class="mode">
    <slot></slot>
    </button>
</template>

<script>
export default {
    props:  ['mode'],
}
</script>

<style scoped>
button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #144f9b;
    color: white;
    cursor: pointer;
    border: 1px #144f9b solid;
    margin: 0 0.5rem;
    border-radius: .25rem;
}

button:hover,
button:active {
    background-color: #2061b6;
}

.flat {
  background-color: transparent;
  color: #144f9b;
  border: none;
}

.flat:hover,
.flat:active {
  /* background-color: #144f9b; */
  background-color: transparent;
  border: 1px #144f9b solid;
}

.delete {
    background-color: transparent;
    color: rgb(187, 45, 45);
    border: none;
}

.delete:hover,
.delete:active {
    background-color: rgb(187, 45, 45);
    color: #fff;
}
</style>