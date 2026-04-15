import Anchor from "@/components/ui/anchors/Anchor";

export default function About() {
    return (
        <>
            <section className="mb-7">
                <h1 className="text-center">About Us</h1>

                <p className="text-center max-w-4xl m-auto text-lg">At Grandma's Ponche, we want to offer you more than just a dessert. We want you to experience tradition and be inspired to remember to take care of your loved ones. Each dessert has been designed with love.</p>
            </section>

            <section className="md:flex flex-row gap-10
                                max-w-[1200px] m-auto">
                <div className="max-w-lg text-lg">
                    <h2 className="my-4">Our Origin</h2>
                    <p>- "We decided to name ourselves after my grandmother".</p>
                    <p className="my-4">I Remember coming home one cool morning, running vigorously through the door as a child after playing with my friends, leaving my bike near the door because of the aroma coming from the kitchen. Upon arriving, I came across a touching scene of my grandmother preparing a delicious dessert and inviting me to sit down to try that delicacy. Among her most memorable desserts, I fondly remember eggnog, not only its characteristic sweetness but also its smoothness and consistency. As a child, I used to imagine eating marshmallows and that my grandmother was some kind of angel sent by God to give me love and care.</p>
                    <p className="my-4">How many of you don't fondly remember your grandmothers? - If you still have them, don't stop loving them; they are the most charming people with many inspiring stories.</p>
                    <p className="my-4">That's why at Grandma's Ponche we love grandmothers and how important they are to our lives and why we commemorate traditional desserts.</p>
                    
                    <blockquote className="italic mb-4">- Aldair Rutte Bazán</blockquote>
                </div>
                <img className="w-full 
                                max-w-lg max-h-[650px]
                                m-auto" loading="lazy" src="images/banners/logo-about-us.webp" alt="Banner que muestra nuestra historia para que nos conozcan mejor." />
                
            </section>

            <section className="md:flex flex-row gap-10 items-center
                                max-w-[1000px] mx-auto my-8">
                <img loading="lazy" src="images/banners/vintage-kitchen.webp" alt="Una cosita antigua que invita al usuario a recordar los pasteles que les preparaba su abuela de pequeños" />
                <div>
                    <h2>Our Mission</h2>
                    <p className="text-lg my-4">Our mission is to keep the tradition of homemade desserts alive, offering a quality punch made with natural ingredients, unhurried, and with the taste of tradition.</p>
                    <div className="mt-8 flex flex-col gap-6 text-2xl">
                        <p>👵 Tradición</p>
                        <p>🥗 Calidad Artesanal</p>
                        <p>🍯 Dulzura Natural</p>
                        <p>👨‍👩‍👧‍👦 Family Closeness</p>
                    </div>
                </div>
            </section>

            <h3 className="text-center">More than a dessert, each punch is a hug that touches the heart.</h3>
            <h3 className="text-center mb-5">Don't wait any longer; try it.</h3>

            <Anchor text="Buy Now" />
        </>
    )
}