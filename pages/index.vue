<template>

    <main class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-4 text-center">Find Hotel Casino Review in Australia 2024</h1>
      <p class="text-xl mb-12 text-gray-300 text-center max-w-3xl mx-auto">Discover the best casino hotels for your next exciting getaway! Luxurious accommodations and thrilling entertainment await you.</p>
      <div class="space-y-12">
        <HotelCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
      </div>
    </main>
    
</template>

<script setup>
const hotels = ref([
  {
    id: 1,
    name: "Crown Promenade Melbourne",
    description: "For astute tourists looking for convenience, accessibility, and sincere care along with the conveniences you expect and the extras you deserve, Crown Promenade Melbourne is a great option.",
    image: "/images/crownpromenade.jpg",
    link: "https://www.crownhotels.com.au/melbourne/crown-promenade",
  },
  {
    id: 2,
    name: "The Darling",
    description: "A prominent component of Sydney's top entertainment venue, The Star Sydney, is The Darling. With its own amenities, welcoming demeanor, and arrival experience, the hotel was intended to be a stand-alone building.",
    image: "/images/the-darling.jpg",
    link: "https://www.thedarling.com.au/",
  },
  {
    id: 3,
    name: "The Star Grand Hotel And Residences",
    description: "Discover unmatched luxury at The Star Grand Hotel, where opulent furnishings blend seamlessly with contemporary artwork. Enjoy the cutting-edge fitness facility and pool in a resort-style setting. This sanctuary, tucked away in Pyrmont, offers stunning views of Sydney's famous harbor and vibrant cityscape.",
    image: "/images/thestar-grand.jpg",
    link: "https://www.star.com.au/sydney/hotels-and-spa/the-star-grand",
  },
  {
    id: 4,
    name: "Wrest Point",
    description: "We are the entertainment gurus because we were the first in Australia to open casinos. Wrest Point, which is located on the gorgeous Hobart waterfront, provides the ideal atmosphere for you to embrace your sense of adventure and let loose.",
    image: "/images/wrest-point.jpg",
    link: "https://wrestpoint.com.au/",
  },
  {
    id: 5,
    name: "Crown Metropol Melbourne",
    description: "This distinctive lodging sticks out by fully integrating into the community and offering stimulating activities that exude elegance and class.",
    image: "/images/crown-metropol.jpg",
    link: "https://www.crownmelbourne.com.au/hotels/crown-metropol",
  }
])

useHead({
  title: 'Gecorooms - Find Your Perfect Stay',
  meta: [
    { name: 'description', content: 'Discover the best casino hotels for your next exciting getaway. Luxurious accommodations and thrilling entertainment await!' },
    { name: 'keywords', content: 'casino, hotel, resort, vacation, gambling, entertainment' },
  ]
})
</script>