<template>
  <div class="flex-1 flex flex-col h-full relative">

    <div class="flex-1 flex min-h-0 relative z-10">
      <!-- Left: Hero -->
      <section class="w-1/2 flex items-center justify-center px-8" style="background-color: #F9DBBA">
        <div class="text-center">
          <p class="text-[#1A4870] text-sm font-semibold uppercase tracking-widest mb-2 opacity-0 animate-fade-in animation-delay-1">Hello, I am</p>
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight text-[#1F316F] drop-shadow-lg opacity-0 animate-fade-in animation-delay-2">
            Ivan Loreña
          </h1>
          <p class="text-lg text-[#5B99C2] mt-4 font-semibold opacity-0 animate-fade-in animation-delay-3">Frontend Engineer</p>
        </div>
      </section>

      <!-- Right: About (top) + Works (bottom) -->
      <div class="w-1/2 flex flex-col border-l border-[#1A4870]/10">
        <!-- About -->
        <section class="flex-1 flex items-center px-8 py-6 border-b border-[#1A4870]/10 overflow-auto">
          <div class="animate-on-scroll">
            <h2 class="text-xl font-bold mb-4">
              <span class="bg-gradient-to-r from-brand to-brand/70 bg-clip-text text-transparent">About Me</span>
            </h2>
            <p class="text-[#1A4870]/70 mb-3 text-sm">
              A Frontend Engineer with {{ yearsOfExperience }}+ years of experience building modern web applications — from early-stage startups to large-scale enterprise platforms in fintech and banking.
            </p>
            <p class="text-[#1A4870]/70 text-sm">
              Beyond code, I'm driven by curiosity and creativity. I spend my free time composing and producing music with my band
              <a
                href="https://www.youtube.com/@buttergiants"
                target="_blank"
                rel="noopener"
                class="text-brand hover:text-secondary hover:underline transition-colors"
              >Butter Giants</a>.
            </p>
          </div>
        </section>

        <!-- Socials -->
        <section class="flex-1 px-8 py-6 overflow-auto flex flex-col justify-center">
          <h2 class="text-xl font-bold mb-4 animate-on-scroll">
            <span class="bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">Find Me On</span>
          </h2>
          <div class="flex items-start gap-6 animate-on-scroll">
            <a
              href="https://github.com/ivanglenlouie"
              target="_blank"
              rel="noopener"
              class="group flex flex-col items-center gap-2 animate-on-scroll stagger-1"
            >
              <span class="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#1A4870]/20 bg-[#1A4870]/5 group-hover:border-brand group-hover:bg-brand/10 group-hover:scale-105 transition-all duration-300">
                <img src="/img/github_dark.svg" alt="GitHub" class="w-8 h-8" />
              </span>
              <h3 class="text-xs font-bold group-hover:text-brand transition-colors">GitHub</h3>
            </a>
            <a
              href="https://www.linkedin.com/in/ivanglenlouie/"
              target="_blank"
              rel="noopener"
              class="group flex flex-col items-center gap-2 animate-on-scroll stagger-2"
            >
              <span class="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#1A4870]/20 bg-[#1A4870]/5 group-hover:border-brand group-hover:bg-brand/10 group-hover:scale-105 transition-all duration-300">
                <img src="/img/linkedin.webp" alt="LinkedIn" class="w-8 h-8" />
              </span>
              <h3 class="text-xs font-bold group-hover:text-brand transition-colors">LinkedIn</h3>
            </a>
            <a
              href="mailto:ivanglenlouie@gmail.com"
              class="group flex flex-col items-center gap-2 animate-on-scroll stagger-3"
            >
              <span class="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#1A4870]/20 bg-[#1A4870]/5 group-hover:border-brand group-hover:bg-brand/10 group-hover:scale-105 transition-all duration-300">
                <span class="text-xl font-bold text-[#1A4870]/70 group-hover:text-brand transition-colors">@</span>
              </span>
              <h3 class="text-xs font-bold group-hover:text-brand transition-colors">Email</h3>
            </a>
          </div>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <footer class="border-t border-[#1A4870]/10 px-8 py-5 shrink-0 relative z-10 animate-on-scroll">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-6">
          <a href="mailto:ivanglenlouie@gmail.com" class="text-sm font-medium hover:text-brand transition-colors">
            ivanglenlouie@gmail.com
          </a>
          <a
            href="https://github.com/ivanglenlouie"
            target="_blank"
            rel="noopener"
            class="text-[#1A4870]/60 text-sm hover:text-brand transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ivanglenlouie/"
            target="_blank"
            rel="noopener"
            class="text-[#1A4870]/60 text-sm hover:text-brand transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <span class="text-[#1A4870]/40 text-xs">&copy; {{ new Date().getFullYear() }} Ivan Loreña</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const yearsOfExperience = new Date().getFullYear() - 2017

useScrollAnimation()
</script>
