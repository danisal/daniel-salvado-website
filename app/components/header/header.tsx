import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export function Header() {
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        window.addEventListener(`scroll`, handleWindowScroll);

        return function cleanup() {
            window.removeEventListener(`scroll`, handleWindowScroll);
        };
    });

    const handleWindowScroll = () => {
        return setShadow(window.pageYOffset > 0);
    };

    return (
        <header
            className={`sticky top-0 z-10 bg-white/95 py-4 text-blue-800 ${
                shadow && "shadow"
            }`}
        >
            <section className="row mx-auto flex max-w-7xl items-center justify-between">
                <Link className="font-beanie text-4xl font-normal " to="/">
                    Daniel Salvado
                </Link>
                <nav className="flex items-center justify-between gap-2">
                    <Link to="/">Home</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/blog">Writing</Link>
                    <Link
                        style={{
                            textDecoration: `none`,
                            backgroundImage: `none`,
                        }}
                        to="/contact"
                    >
                        Say Hello
                    </Link>
                </nav>
            </section>
        </header>
    );
}
