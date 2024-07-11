import { defineStore } from 'pinia';
import {ref} from "vue";
import {useQuery} from "@tanstack/vue-query";

export const useExampleStore = defineStore('example',() => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  }

  const setCount = (value: number) => {
    count.value = value;
  }

  const fetchPosts = () => {
    return useQuery({
      queryKey: ['posts'],
      queryFn: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        return response.json();
      }
    });
  }

  return { count, increment, setCount, fetchPosts };
});

export const setupTestQuery = () => {
  const dataStore = useExampleStore();
  return dataStore.fetchPosts();
};