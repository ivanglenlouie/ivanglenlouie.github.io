<template>
  <section class="min-h-screen flex items-center py-24">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/img/ivan2.png"
            alt="Ivan Loreña"
            class="w-full max-w-sm mx-auto"
          />
        </div>
        <div>
          <h2 class="text-xl font-bold mb-6">About Me</h2>
          <p class="text-sm text-black/70 mb-4">
            I have a passion to create awesome looking websites in order for the
            user to experience and enjoy the feel of scrolling/browsing through
            all the pages in it.
          </p>
          <p class="text-sm text-black/70 mb-8">
            I really like and enjoy the concept of exploring and creating. In my
            spare time, I also compose and create music (Check out my band
            <a
              href="https://www.facebook.com/buttergiants"
              target="_blank"
              rel="noopener"
              class="text-brand hover:underline"
            >here</a>).
          </p>
          <div class="space-y-4">
            <SkillBar label="WordPress" :percent="85" />
            <SkillBar label="Angular" :percent="75" />
            <SkillBar label="HTML" :percent="100" />
            <SkillBar label="SASS/CSS" :percent="85" />
            <SkillBar label="JavaScript" :percent="75" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
