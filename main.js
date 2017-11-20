Vue.component('jumbotron',{
	
	template:`
		<div class="hero-unit">
  			<h1>{{critter.heading}}</h1>
  			<p>{{critter.tagline}}</p>
  			<p>
    			<a class="btn btn-primary btn-large"
    			v-bind:href="critter.url">
      			Learn More
    			</a>
  			</p>
		</div>
	`,
	props: ['critter'],
	methods:{
		
	}
})


var mainVm = new Vue({
    el: '#app',
   	data: {
        critters: [
            {
            	heading: "Goats",
    			tagline: "The domestic goat (Capra aegagrus hircus) is a subspecies of goat domesticated from the wild goat of southwest Asia and Eastern Europe. The goat is a member of the family Bovidae and is closely related to the sheep as both are in the goat-antelope subfamily Caprinae.",
    			url: "https://en.wikipedia.org/wiki/Goats"
            },
            {
            	heading: "Llamas",
    			tagline: "The llama (/ˈlɑːmə/; Spanish: [ˈʝama] locally [ˈʎama] or [ˈʒama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.The height of a full-grown, full-size llama is 1.7 to 1.8 m (5.6 to 5.9 ft) tall at the top of the head, and can weigh between 130 and 200 kg (290 and 440 lb).",
    			url: "https://en.wikipedia.org/wiki/Llama"
            },
            
        ]
    },
})







