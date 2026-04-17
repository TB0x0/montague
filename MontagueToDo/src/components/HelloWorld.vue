<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  })

  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const data = ref(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todo');
      data.value = response.data;
      console.log("Data Retrieved");
      document.getElementById("test").innerHTML = JSON.stringify(data.value);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  onMounted(fetchData);
  

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 id="test">
      test
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
