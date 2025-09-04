import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const sampleProducts = [
    {
      name: "Mbuya Heritage Jacket",
      description:
        "Limited edition upcycled jacket featuring traditional Ugandan patterns reimagined through contemporary streetwear. Each piece numbered and comes with cultural narrative.",
      price: "UGX 150,000",
      category: "Limited Drop",
      isComingSoon: true,
    },
    {
      name: "Youth Culture T-Shirt",
      description:
        "Eco-conscious cotton tee celebrating Uganda&apos;s creative youth. Sourced from Owino traders, produced by local artisans. Part of our cultural documentation series.",
      price: "UGX 45,000",
      category: "Cultural Series",
      isComingSoon: true,
    },
    {
      name: "Future Heritage Pants",
      description:
        "Experimental design combining traditional fabric techniques with modern silhouettes. Upcycled materials, limited to 50 pieces worldwide.",
      price: "UGX 85,000",
      category: "1-of-1 Collection",
      isComingSoon: true,
    },
    {
      name: "Kampala Street Hoodie",
      description:
        "Collaboration piece inspired by Kampala&apos;s skate culture. Features unique prints celebrating street art and youth movements. Collector&apos;s edition.",
      price: "UGX 75,000",
      category: "Artist Collab",
      isComingSoon: true,
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 glass-hero"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text text-shimmer">ORDNANCITY</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Future Heritage • Ugandan Youth Culture
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="glass-button button-enhanced text-black px-8 py-4 rounded-full font-semibold transition-all hover-lift animate-glow">
              Explore Collection
            </button>
            <button className="glass-outline-button button-enhanced text-yellow-500 px-8 py-4 rounded-full font-semibold transition-all hover-lift">
              Coming Soon
            </button>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-yellow-500/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 border border-yellow-500/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-16 h-16 border border-yellow-500/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 glass-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Future Heritage</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded by Zoora and Atta in 2023, Ordnancity is dedicated to
                creating experimental Future heritage pieces that document and
                celebrate Ugandan youth culture through avant-garde streetwear.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We bridge traditional heritage with contemporary innovation,
                creating limited edition pieces that tell authentic stories of
                our past while embracing the future. Every garment is crafted
                with eco-conscious materials sourced from Owino traders and
                produced by our network of skilled tailors.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our mission extends beyond fashion - we&apos;re cultural
                documentarians, preserving and amplifying the voices of
                Uganda&apos;s creative youth through sustainable craftsmanship
                and meaningful collaborations.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">Z</span>
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">A</span>
                </div>
                <span className="text-gray-400">Founded by Zoora & Atta</span>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative h-96 glass-gold rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🇺🇬</div>
                  <h3 className="text-2xl font-bold mb-2">
                    Ugandan Youth Culture
                  </h3>
                  <p className="text-gray-300">
                    Celebrating our roots, embracing our future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships & Craftsmanship */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Craft & Community</span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Built on authentic partnerships and sustainable practices that
              honor Uganda&apos;s creative ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-xl font-bold mb-3">Artisan Network</h3>
              <p className="text-gray-400 text-sm">
                Skilled tailors and craftspeople creating high-quality, upcycled
                garments with traditional techniques
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-3">Owino Materials</h3>
              <p className="text-gray-400 text-sm">
                Sustainable materials sourced from Kampala&apos;s iconic Owino
                market, supporting local traders
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-3">Kiira Studios</h3>
              <p className="text-gray-400 text-sm">
                Strategic partnership for brand development, distribution, and
                cultural storytelling
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">
                Creative Collaborations
              </h3>
              <p className="text-gray-400 text-sm">
                Working with local and diaspora artists, musicians, and
                creatives to amplify youth culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mbuya Collection Preview */}
      <section id="collection" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Mbuya Collection</span>
          </h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Our upcoming limited collection that pays homage to the wisdom and
            strength of our grandmothers, reimagined through the lens of
            contemporary Ugandan youth culture. Each piece tells a story and
            comes with collector perks.
          </p>
          <div
            className="glass-card p-6 rounded-2xl max-w-2xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-2xl">🎯</div>
              <h3 className="text-xl font-bold">Limited Drop Strategy</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Exclusive releases with sentimental storytelling, collector
              loyalty perks, and seasonal capsules. Every piece is numbered and
              comes with its cultural narrative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div
              className="glass-card p-8 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl mb-4">🧵</div>
              <h3 className="text-xl font-bold mb-3">
                Heritage Meets Innovation
              </h3>
              <p className="text-gray-400">
                Traditional patterns reimagined with modern techniques
              </p>
            </div>
            <div
              className="glass-card p-8 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3">Youth Culture</h3>
              <p className="text-gray-400">
                Reflecting the vibrant energy of Uganda&apos;s young generation
              </p>
            </div>
            <div
              className="glass-card p-8 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Experimental Design</h3>
              <p className="text-gray-400">
                Pushing boundaries in contemporary African fashion
              </p>
            </div>
          </div>

          <button
            className="glass-button text-black px-8 py-4 rounded-full font-semibold transition-all hover-lift animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Coming This Year
          </button>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4 glass-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Preview Pieces</span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              A glimpse into the Mbuya Collection - where tradition meets
              innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleProducts.map((product, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Impact */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Sustainable Impact</span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Every piece contributes to Uganda&apos;s creative economy and
              environmental sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">100%</h3>
              <p className="text-gray-400 text-sm">Upcycled Materials</p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">15+</h3>
              <p className="text-gray-400 text-sm">Local Artisans</p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">Owino</h3>
              <p className="text-gray-400 text-sm">Market Sourcing</p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">Zero</h3>
              <p className="text-gray-400 text-sm">Waste Production</p>
            </div>
          </div>

          <div
            className="glass-card p-8 rounded-2xl text-center animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Production Process</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-yellow-500 font-semibold mb-2">
                  1. Sourcing
                </div>
                <p className="text-gray-400">
                  Materials from Owino traders, supporting local economy
                </p>
              </div>
              <div>
                <div className="text-yellow-500 font-semibold mb-2">
                  2. Crafting
                </div>
                <p className="text-gray-400">
                  Skilled tailors create unique pieces with traditional
                  techniques
                </p>
              </div>
              <div>
                <div className="text-yellow-500 font-semibold mb-2">
                  3. Storytelling
                </div>
                <p className="text-gray-400">
                  Each piece comes with cultural narrative and collector perks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Events & Festival Circuit */}
      <section className="py-20 px-4 glass-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Pop-up & Events</span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join us at cultural events, festival circuits, and exclusive
              pop-ups across Uganda and the diaspora
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-bold mb-3">Festival Circuit</h3>
              <p className="text-gray-400 text-sm mb-4">
                Cultural festivals, music events, and art exhibitions across
                Uganda
              </p>
              <div className="text-yellow-500 text-sm font-semibold">
                Upcoming: Kampala Art Week
              </div>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl mb-4">🛹</div>
              <h3 className="text-xl font-bold mb-3">Skate Events</h3>
              <p className="text-gray-400 text-sm mb-4">
                Supporting Kampala&apos;s skate scene with limited drops and
                community events
              </p>
              <div className="text-yellow-500 text-sm font-semibold">
                Monthly: Skate Park Pop-ups
              </div>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Diaspora Events</h3>
              <p className="text-gray-400 text-sm mb-4">
                Pop-ups in UK, Europe, and US connecting with diaspora
                communities
              </p>
              <div className="text-yellow-500 text-sm font-semibold">
                Coming: London Pop-up
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Collaborations */}
      <section className="py-20 px-4 glass-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Cultural Collaborations</span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Amplifying Uganda&apos;s creative ecosystem through music, art,
              skate culture, and diaspora connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">Music Collaborations</h3>
              <p className="text-gray-400 text-sm">
                Working with local and diaspora musicians to create authentic
                cultural narratives through fashion
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl mb-4">🛹</div>
              <h3 className="text-xl font-bold mb-3">Skate Culture</h3>
              <p className="text-gray-400 text-sm">
                Supporting Kampala&apos;s skate scene and street culture through
                limited edition drops and events
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Diaspora Connections</h3>
              <p className="text-gray-400 text-sm">
                Building bridges between Uganda and diaspora communities in UK,
                Europe, and US
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Behind the Scenes</span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              From Owino market to your wardrobe - the journey of each piece
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-lg font-bold mb-3">Sourcing at Owino</h3>
              <p className="text-gray-400 text-sm">
                Early morning trips to Kampala&apos;s iconic market, selecting
                sustainable materials from local traders
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-lg font-bold mb-3">Artisan Crafting</h3>
              <p className="text-gray-400 text-sm">
                Skilled tailors transform materials using traditional techniques
                passed down through generations
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-lg font-bold mb-3">Story Creation</h3>
              <p className="text-gray-400 text-sm">
                Each piece gets its cultural narrative, connecting wearers to
                Uganda&apos;s rich heritage and youth culture
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-bold mb-3">Limited Release</h3>
              <p className="text-gray-400 text-sm">
                Numbered pieces with collector perks, shipped with cultural
                context and sustainability information
              </p>
            </div>
          </div>

          <div
            className="mt-16 glass-card p-8 rounded-2xl animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Production Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">
                        Material Sourcing (2-3 days)
                      </div>
                      <div className="text-gray-400 text-sm">
                        Owino market visits, quality selection
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">
                        Design & Pattern (1-2 days)
                      </div>
                      <div className="text-gray-400 text-sm">
                        Cultural research, pattern creation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">Crafting (3-5 days)</div>
                      <div className="text-gray-400 text-sm">
                        Artisan production, quality control
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      4
                    </div>
                    <div>
                      <div className="font-semibold">
                        Story & Packaging (1 day)
                      </div>
                      <div className="text-gray-400 text-sm">
                        Cultural narrative, collector packaging
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⏱️</div>
                <h4 className="text-xl font-bold mb-2">
                  Total Production Time
                </h4>
                <p className="text-3xl font-bold text-yellow-500 mb-2">
                  7-11 Days
                </p>
                <p className="text-gray-400 text-sm">
                  Per limited edition piece
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="gradient-text">Community Stories</span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Real voices from our community - artists, collectors, and cultural
              enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold">Aisha, Kampala</h4>
                  <p className="text-gray-400 text-sm">Artist & Collector</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                &quot;Each piece tells a story of our heritage. It&apos;s not
                just clothing - it&apos;s cultural documentation that I&apos;m
                proud to wear and pass down.&quot;
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">K</span>
                </div>
                <div>
                  <h4 className="font-semibold">Kwame, London</h4>
                  <p className="text-gray-400 text-sm">Diaspora Community</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                &quot;Finally, fashion that connects me to my roots while
                staying true to contemporary style. The limited drops make each
                piece special.&quot;
              </p>
            </div>

            <div
              className="glass-card p-6 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah, NYC</h4>
                  <p className="text-gray-400 text-sm">Fashion Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                &quot;The sustainability aspect drew me in, but the cultural
                depth keeps me coming back. Every piece is a conversation
                starter.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 glass-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Join the Movement</span>
          </h2>
          <p
            className="text-xl text-gray-300 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Be the first to know about limited drops, cultural events, and
            exclusive collector perks
          </p>

          <div
            className="glass-card p-8 rounded-2xl max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-black/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
              />
              <button className="glass-button text-black px-8 py-3 rounded-full font-semibold transition-all hover-lift">
                Subscribe
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                <span>Early access to drops</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                <span>Collector loyalty perks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                <span>Cultural event invites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Connect With Us</span>
          </h2>
          <p
            className="text-xl text-gray-300 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Join our community and stay updated on limited drops, cultural
            events, and collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="glass-card p-8 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
              <p className="text-gray-400 mb-6">
                Stay connected through our primary channels for limited drops,
                cultural events, and community engagement.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="w-12 h-12 glass-button rounded-full flex items-center justify-center transition-all hover-lift">
                  <span className="text-black font-bold">IG</span>
                </button>
                <button className="w-12 h-12 glass-button rounded-full flex items-center justify-center transition-all hover-lift">
                  <span className="text-black font-bold">X</span>
                </button>
                <button className="w-12 h-12 glass-button rounded-full flex items-center justify-center transition-all hover-lift">
                  <span className="text-black font-bold">WA</span>
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                Instagram • X (Twitter) • WhatsApp Community
              </p>
            </div>

            <div
              className="glass-card p-8 rounded-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold mb-4">Collaborate With Us</h3>
              <p className="text-gray-400 mb-6">
                For artist collaborations, pop-up partnerships, press inquiries,
                or wholesale opportunities.
              </p>
              <div className="space-y-3">
                <button className="glass-outline-button text-yellow-500 px-6 py-3 rounded-full font-semibold transition-all w-full">
                  Artist Collaborations
                </button>
                <button className="glass-outline-button text-yellow-500 px-6 py-3 rounded-full font-semibold transition-all w-full">
                  Pop-up & Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="gradient-text">ORDNANCITY</span>
          </div>
          <p className="text-gray-400 mb-6">
            Future Heritage • Ugandan Youth Culture • Since 2023
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="text-yellow-500 font-semibold mb-2">
                Target Market
              </h4>
              <p className="text-gray-400">Urban 20-35, Uganda & Diaspora</p>
            </div>
            <div>
              <h4 className="text-yellow-500 font-semibold mb-2">
                Key Partners
              </h4>
              <p className="text-gray-400">Kiira Studios • Owino Traders</p>
            </div>
            <div>
              <h4 className="text-yellow-500 font-semibold mb-2">
                Revenue Streams
              </h4>
              <p className="text-gray-400">D2C • Pop-ups • Collaborations</p>
            </div>
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <span>© 2024 Ordnancity</span>
            <span>•</span>
            <span>Kampala, Uganda</span>
            <span>•</span>
            <span>Eco-Conscious Craftsmanship</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
