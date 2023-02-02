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
          <nuxt-link to="/blog">Bãi Rác Nhân Phẩm</nuxt-link>
        </li>
      </ul>
    </template>

    <template #default>

      <p class="lead _about_item">
        Hi, I am <strong>Tran Cong Nguyen</strong>, a Web developer based in the Flower City of Vietnam.
      </p>

      <p class="_about_item">
        The turning point that made me study Information Technology was when my server was hacked by a developer I hired. I decided to become a developer myself to serve myself. Security, data integrity, and aesthetics are my top priorities.
      </p>

      <p class="_about_item">
        As a seasoned developer with 4 years of hands-on experience, I bring expertise in TypeScript, JavaScript, Vue, Node, Swift, and Dart to the table. My deep understanding of these technologies allows me to create efficient and user-friendly applications that meet client needs. I am dedicated to delivering top-quality work and continuously improving my skills.
      </p>

      <p class="_about_item">
        I am an enthusiastic traveler and advocate for the LGBTQ+ community. I enjoy coding, exploring new destinations, and making a positive impact on the world. I approach life with an open mind and a desire to make the most of every moment.
      </p>
      <p class="_about_item">
        Find me on
        <a href="https://www.linkedin.com/in/trancongnguyen/" target="_blank">GitHub</a>,
        <a href="https://www.linkedin.com/in/trancongnguyen/" target="_blank">Facebook</a>,
        <a href="https://www.linkedin.com/in/trancongnguyen/" target="_blank">Instagram</a>
        or
        <a href="https://www.linkedin.com/in/trancongnguyen/" target="_blank">Youtube</a>.

        <br/>

        Email me at: <a href="mailto:heloo@guen.dev">heloo@guen.dev</a>

        <br />

        Chat with me on <a href="https://discord.gg/2Z8Y4Z9">Discord</a>
      </p>

    </template>

  </blog-wrapper>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>
