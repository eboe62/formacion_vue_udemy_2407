<template>
  <aside class="bg-base-200 w-72 min-h-screen">
    <h2 class="text-lg font-bold mx-4">
      <RouterLink to="/"> Proyectos </RouterLink>
    </h2>
<!-- La ausencia de proyectos podemos gestionarla directamente o mediante una Propiedad Computada en projects.store.ts
    <p v-if="projectsStore.projectList.length == 0" class="text-sm text-gray-500 mx-4">
-->
    <p v-if="projectsStore.noProjects" class="text-sm text-gray-500 mx-4">
      No hay proyectos
    </p>

    <!-- Menu -->
    <ul v-else class="menu">
      <li v-for="project in projectsStore.projectList" :key="project.id">
        <template v-if="project.tasks.length > 0">
          <details>
            <summary>
              <RouterLink :to="`/project/${project.id}`">
                {{ project.name }}
              </RouterLink>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <RouterLink :to="`/project/${project.id}`">{{ task.name }}</RouterLink>
              </li>
            </ul>
          </details>
        </template>

        <template v-else>
          <RouterLink :to="`/project/${project.id}`">
            {{ project.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '../store/projects.store';

const projectsStore = useProjectsStore(); // Obtenemos la referencia al Store sin necesidad de defineProps() ni defineEmits()
</script>
