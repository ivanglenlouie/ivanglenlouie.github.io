<template>
  <footer class="border-t border-black/10 py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-base font-semibold mb-2">Get in Touch</h3>
          <p class="text-sm text-black/60 mb-4">
            Let's make something new, different and more meaningful.
          </p>
          <a
            href="mailto:ivanglenlouie@gmail.com"
            class="text-brand hover:underline"
          >
            ivanglenlouie@gmail.com
          </a>
        </div>
        <div class="flex flex-col items-start md:items-end justify-between">
          <div class="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ivan-lore%C3%B1a-6bab95151/"
              target="_blank"
              rel="noopener"
              class="text-black/60 hover:text-brand"
            >
              LinkedIn
            </a>
          </div>
          <p class="text-black/40 text-sm mt-4">
            &copy; {{ new Date().getFullYear() }} Ivan Loreña
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
