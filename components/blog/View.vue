<template>
  <blog-wrapper>
    <template #header>
      <ul class="text-gray-500 flex items-center text-sm leading-none opacity-70">
        <li>
          <nuxt-link to="/">
            <Icon name="ci:home-heart-1" class="text-[16px] relative -top-0.5" />
          </nuxt-link>
        </li>
        <li class="mx-1.5">/</li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li class="mx-1.5">/</li>
        <li>
          <nuxt-link to="/blog">
            {{ title }}
          </nuxt-link>
        </li>
      </ul>
    </template>

    <template #default>
      <editor-render :raw="content" />
    </template>

  </blog-wrapper>
</template>

<script lang="ts" setup>
import {PostEntity, PostEntityDefault, PostForm} from "~/entities/post.entity"

const post = ref<PostForm>(PostEntityDefault)
const { title, content } = usePost(post)

const route = useRoute()
const router = useRouter()
const link = useLinkComplex()

const initView = async () => {
  //admin-posts-id
  const docSnap = await fsGetDoc(fsDocInstance(getFirestore(), 'posts', route.params.id as string))
  if(docSnap.exists()) {
    post.value = docSnap.data() as PostEntity
    // refresh(post.value)
  } else {
    router.replace(link.blog())
  }
}

await initView()

</script>

<style>
.inline-code {
  background: rgba(250, 239, 240, 0.78);
  color: #b44437;
  padding: 3px 4px;
  border-radius: 5px;
  margin: 0 1px;
  font-family: inherit;
  font-size: 0.86em;
  font-weight: 500;
  letter-spacing: 0.3px;
}
</style>
