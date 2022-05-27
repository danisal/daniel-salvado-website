import type { MetaFunction } from "@remix-run/cloudflare-pages";

import { Bio } from "~/components/bio";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export const meta: MetaFunction = () => {
    return {
        title: "Home | Daniel Salvado",
    };
};

export default function Index() {
    return (
        <>
            <Header />
            <main className="container prose mx-auto px-7">
                <h1>Welcome to my personal virtual space!</h1>
                <p>
                    Hi, my name is Daniel Salvado, I'm an enthusiastic developer
                    who loves to work within the JavaScript ecosystem and always
                    strive to improve on code and build beautiful apps.
                </p>
                <p>
                    In here you will be able to find some of the work that I've
                    done, places where I've worked and some articles that I've
                    written.
                </p>
                <p>
                    I love to share my know-how and things that I find
                    interesting and because of that I do some writing on things
                    that I've tested and in some way, helped me on the products
                    that I was building!
                </p>
                <p>
                    Feel free to share the articles or even to contact me if you
                    have any questions, suggestions or simply say hi!
                </p>
                <Bio />
            </main>
            <Footer />
        </>
    );
}
