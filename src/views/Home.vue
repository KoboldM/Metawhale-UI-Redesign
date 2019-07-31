<template>
  <Dashboard/>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';

export default {
  components: {
    Dashboard
  },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>

