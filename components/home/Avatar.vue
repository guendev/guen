<template>
  <div id="avatar" class="relative bg-gray-100 h-[calc(100vh-70px)]">


    <img src="/images/me.jpeg" alt="" class="w-full h-full object-cover" />


    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-8/12">
      <div class="flex items-center justify-between p-1.5 bg-white rounded-full shadow-default overflow-hidden">
        <span class="text-sm ml-3 text-gray-500">Send me a message</span>
        <div class="w-9 h-9 flex justify-center items-center bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full shadow-md shadow-primary-300">
          <Icon name="line-md:email" />
        </div>
      </div>
    </div>

  </div>
</template>
