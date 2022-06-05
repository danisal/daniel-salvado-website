<main class="container prose mx-auto px-7 py-16 bg-indigo">
    <h1>Come say hello</h1>
    <p>
        Do you ahve any thoughts, suggestions or simply just want to get in
        touch regarding something else? This is the place.
    </p>
    <p>Drop me a line and I will get back to you in a couple of days</p>
    <form class="">
        <fieldset class="flex flex-col gap-4">
            <div class="relative">
                <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    class="peer w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 rounded px-4 py-2"
                    value=""
                    placeholder="Full Name"
                />
                <label
                    for="name"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-50 peer-focus:text-sm px-2 mx-4 peer-focus:bg-indigo-600 peer-focus:rounded"
                    >Full Name</label
                >
            </div>
            <div class="relative">
                <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    class="peer w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 rounded px-4 py-2"
                    value=""
                    placeholder="Email"
                />
                <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-50 peer-focus:text-sm px-2 mx-4 peer-focus:bg-indigo-600 peer-focus:rounded"
                    >Email</label
                >
            </div>
            <div class="relative">
                <input
                    id="subject"
                    name="subject"
                    required
                    type="text"
                    class="peer w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 rounded px-4 py-2"
                    value=""
                    placeholder="Subject"
                />
                <label
                    for="subject"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-50 peer-focus:text-sm px-2 mx-4 peer-focus:bg-indigo-600 peer-focus:rounded"
                    >Subject</label
                >
            </div>
            <div class="relative">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more..."
                    required
                    rows="10"
                    class="peer w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 rounded px-4 py-2"
                />
                <label
                    for="message"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-50 peer-focus:text-sm px-2 mx-4 peer-focus:bg-indigo-600 peer-focus:rounded"
                    >Message</label
                >
            </div>

            <label for="terms" class="flex gap-4 items-center">
                <input
                    id="terms"
                    name="terms"
                    required
                    type="checkbox"
                    class="accent-indigo-600"
                    value="false"
                />
                I agree with the terms and conditions
            </label>
            <br />
            <button
                type="submit"
                disabled={false}
                class="text-base text-center font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1  bg-indigo-600 rounded py-2"
                >Submit</button
            >
        </fieldset>
    </form>
</main>
