import ProfilePic from "../../../public/assets/profile-pic.jpg";

export function Bio() {
    return (
        <>
            <br />
            <h3>About the Author</h3>
            <div className="flex gap-4">
                <img
                    alt="Daniel Profile"
                    className="h-24 w-24 shrink-0 rounded-full object-cover object-center"
                    loading="lazy"
                    src={ProfilePic}
                />
                <div>
                    <h4 className="mb-2.5">Daniel Salvado</h4>
                    <p>
                        Software Engineer | Developer | JavaScript Enthusiast.
                        Strive to improve on code and the people around me!
                        Follow
                        {` `}
                        <a
                            className="text-blue-800 no-underline"
                            href={`https://twitter.com/@danisalTweets`}
                        >
                            @danisalTweets
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
