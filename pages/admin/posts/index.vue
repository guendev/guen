<template>
  <blog-wrapper :prose="false">
    <client-only>
      <admin-posts-list />

      <includes-teleport to="#header-actions">
        <button
            class="ml-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white px-2.5 py-1.5 flex justify-center items-center shadow-default shadow-primary-300"
            @click="() => $router.push('/admin/creator/post')"
        >
          <Icon name="ic:sharp-plus"/>
          <span class="text-[13px] font-semibold ml-1">Add New</span>
        </button>
      </includes-teleport>

    </client-only>
  </blog-wrapper>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>
